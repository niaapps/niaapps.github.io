package lcw

import (
	"sync/atomic"
	"time"

	cache "github.com/patrickmn/go-cache"
	"github.com/pkg/errors"
)

// ExpirableCache implements LoadingCache with TTL.
type ExpirableCache struct {
	options
	CacheStat
	currentSize int64
	backend     *cache.Cache
}

// NewExpirableCache makes expirable LoadingCache implementation, 1000 max keys by default and 5s TTL
func NewExpirableCache(opts ...Option) (*ExpirableCache, error) {

	res := ExpirableCache{
		options: options{
			maxKeys:      1000,
			maxValueSize: 0,
			ttl:          5 * time.Minute,
		},
	}

	for _, opt := range opts {
		if err := opt(&res.options); err != nil {
			return nil, errors.Wrap(err, "failed to set cache option")
		}
	}

	res.backend = cache.New(res.ttl, res.ttl/2)

	// OnEvicted called automatically for expired and manually deleted
	res.backend.OnEvicted(func(key string, value interface{}) {
		if res.onEvicted != nil {
			res.onEvicted(key, value)
		}
		if s, ok := value.(Sizer); ok {
			size := s.Size()
			atomic.AddInt64(&res.currentSize, -1*int64(size))
		}
	})

	return &res, nil
}

// Get gets value by key or load with fn if not found in cache
func (c *ExpirableCache) Get(key string, fn func() (Value, error)) (data Value, err error) {

	if v, ok := c.backend.Get(key); ok {
		atomic.AddInt64(&c.Hits, 1)
		return v, nil
	}

	if data, err = fn(); err != nil {
		atomic.AddInt64(&c.Errors, 1)
		return data, err
	}
	atomic.AddInt64(&c.Misses, 1)

	if c.allowed(key, data) {
		if s, ok := data.(Sizer); ok {
			if c.maxCacheSize > 0 && atomic.LoadInt64(&c.currentSize)+int64(s.Size()) >= c.maxCacheSize {
				c.backend.DeleteExpired()
				return data, nil
			}
			atomic.AddInt64(&c.currentSize, int64(s.Size()))
		}
		c.backend.Set(key, data, c.ttl)
	}

	return data, nil
}

// Invalidate removes keys with passed predicate fn, i.e. fn(key) should be true to get evicted
func (c *ExpirableCache) Invalidate(fn func(key string) bool) {
	for key := range c.backend.Items() { // Keys() returns copy of cache's key, safe to remove directly
		if fn(key) {
			c.backend.Delete(key)
		}
	}
}

// Peek returns the key value (or undefined if not found) without updating the "recently used"-ness of the key.
func (c *ExpirableCache) Peek(key string) (Value, bool) {
	return c.backend.Get(key)
}

// Purge clears the cache completely.
func (c *ExpirableCache) Purge() {
	c.backend.Flush()
	atomic.StoreInt64(&c.currentSize, 0)
}

// Delete cache item by key
func (c *ExpirableCache) Delete(key string) {
	c.backend.Delete(key)
}

func (c *ExpirableCache) Keys() (res []string) {
	items := c.backend.Items()
	res = make([]string, 0, len(items))
	for key := range items {
		res = append(res, key)
	}
	return res
}

// Stat returns cache statistics
func (c *ExpirableCache) Stat() CacheStat {
	return CacheStat{
		Hits:   c.Hits,
		Misses: c.Misses,
		Size:   c.size(),
		Keys:   c.keys(),
		Errors: c.Errors,
	}
}

func (c *ExpirableCache) size() int64 {
	return atomic.LoadInt64(&c.currentSize)
}

func (c *ExpirableCache) keys() int {
	return c.backend.ItemCount()
}

func (c *ExpirableCache) allowed(key string, data Value) bool {
	if c.backend.ItemCount() >= c.maxKeys {
		return false
	}
	if c.maxKeySize > 0 && len(key) > c.maxKeySize {
		return false
	}
	if s, ok := data.(Sizer); ok {
		if c.maxValueSize > 0 && s.Size() >= c.maxValueSize {
			return false
		}
	}
	return true
}

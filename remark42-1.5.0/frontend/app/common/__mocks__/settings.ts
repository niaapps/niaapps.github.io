// @ts-ignore
const mock: typeof import('@app/common/settings') = {
  ...jest.requireActual('@app/common/settings'),
  siteId: 'remark',
  pageTitle: 'remark test',
  url: 'https://remark42.com/test',
  maxShownComments: 20,
  token: 'abcd',
  theme: 'light',
  querySettings: {
    site_id: 'remark',
    page_title: 'remark test',
    url: 'https://remark42.com/test',
    max_shown_comments: 20,
    token: 'abcd',
    theme: 'light',
  },
};

module.exports = mock;

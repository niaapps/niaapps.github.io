/** @jsx createElement */
import loadPolyfills from '@app/common/polyfills';
import { createElement, render } from 'preact';
import 'preact/debug';

import { Provider } from 'react-redux';
import { ConnectedRoot } from '@app/components/root';
import { UserInfo } from '@app/components/user-info';
import reduxStore from '@app/store';

// importing css
import '@app/components/list-comments';

import { NODE_ID, BASE_URL } from '@app/common/constants';
import { StaticStore } from '@app/common/static_store';
import api from '@app/common/api';
import { bindActionCreators } from 'redux';
import { fetchHiddenUsers } from './store/user/actions';
import { restoreProvider } from './store/provider/actions';
import { restoreCollapsedThreads } from './store/thread/actions';

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

async function init(): Promise<void> {
  __webpack_public_path__ = BASE_URL + '/web/';

  await loadPolyfills();

  const node = document.getElementById(NODE_ID);

  if (!node) {
    console.error("Remark42: Can't find root node."); // eslint-disable-line no-console
    return;
  }

  const boundActions = bindActionCreators(
    { fetchHiddenUsers, restoreProvider, restoreCollapsedThreads },
    reduxStore.dispatch
  );
  boundActions.fetchHiddenUsers();
  boundActions.restoreProvider();
  boundActions.restoreCollapsedThreads();

  const params = window.location.search
    .replace(/^\?/, '')
    .split('&')
    .reduce<{ [key: string]: string }>((memo, value) => {
      const vals = value.split('=');
      if (vals.length === 2) {
        memo[vals[0]] = vals[1];
      }
      return memo;
    }, {});

  StaticStore.config = await api.getConfig();

  if (params.page === 'user-info') {
    return render(
      <div id={NODE_ID}>
        <div className="root root_user-info">
          <Provider store={reduxStore}>
            <UserInfo />
          </Provider>
        </div>
      </div>,
      node
    );
  }

  render(
    <Provider store={reduxStore}>
      <ConnectedRoot />
    </Provider>,
    node
  );
}

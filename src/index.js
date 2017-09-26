import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";

import { ConnectedRouter } from "react-router-redux";
import { Provider } from "react-redux";
import { configure, history } from "./config/configure-store";

// Data
import posts from './data/posts';
import comments from './data/comments';

const defaultState = {
  posts,
  comments
};

const store = configure(defaultState);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);

if (module.hot) {
  module.hot.accept("./components/App", () => {
    const NextApp = require("./components/App").default;
    ReactDOM.render(
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <NextApp />
        </ConnectedRouter>
      </Provider>,
      document.getElementById("root")
    );
  });
  window.store = store;
}

registerServiceWorker();

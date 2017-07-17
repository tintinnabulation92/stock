import 'babel-polyfill';
import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import "./global.css";
import reducers from './reducers'
import sagas from './sagas'
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { createHistory } from 'history'

import OffersPresenter from "./containers/offerPresenter/offerPresenter"
import App from './containers/app'
import EditOfferContainer from './containers/editOfferContainer/editOfferContainer'

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware)
)

sagas.forEach(sagaMiddleware.run);


const browserHistory = useRouterHistory(createHistory)({
 basename: process.env.CONTEXT_PATH ? `/${process.env.CONTEXT_PATH}`.replace(/\/{2,}|\/$/g, '/') : '/',
});

const history = syncHistoryWithStore(browserHistory, store)

render(
    <Provider store={store}>
      <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={OffersPresenter}/>
        <Route path="editOffer" component={EditOfferContainer}/>
      </Route>
    </Router>
    </Provider>,
    document.getElementById('app')
)

import 'babel-polyfill';

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware  } from 'redux'
import createSagaMiddleware from 'redux-saga'
import cls from "./global.css";

import reducers from './reducers'
import sagas from './sagas'

import OffersPresenter from "./containers/offerPresenter/offerPresenter"

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
)

sagas.forEach(sagaMiddleware.run);

render(
  <Provider store={store}>
    <OffersPresenter />
  </Provider>,
  document.getElementById('app')
)

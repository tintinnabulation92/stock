import { combineReducers } from 'redux'
import offersReducer from '../containers/offerPresenter/offersReducer'
import {reducer as formReducer} from 'redux-form'
import { routerReducer } from 'react-router-redux'

const reducers = combineReducers({
    offersReducer,
    form: formReducer,
    routing: routerReducer
})

export default reducers

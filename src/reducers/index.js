import { combineReducers } from 'redux'
import offersReducer from '../containers/offerPresenter/offersReducer'
import {reducer as formReducer} from 'redux-form'

const reducers = combineReducers({
    offersReducer,
    form: formReducer
})

export default reducers

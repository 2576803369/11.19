import { combineReducers } from './combindReducers'
import {counter} from './counter'
import {user} from './user'


export const rootReducer=combineReducers({
    counter:counter,
    user:user
})


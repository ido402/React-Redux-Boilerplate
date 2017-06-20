/**
 * Created by idodoron on 6/18/17.
 */
import {combineReducers} from 'redux';
import UserReducer from './reducer-users';

const allReducers = combineReducers({
   users: userReducer
});
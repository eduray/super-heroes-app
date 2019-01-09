import { combineReducers } from 'redux';
import { heroes }  from './heroeReducer';
import { enemies } from './enemieReducer';


export default combineReducers({   
    enemies,
    heroes,
});
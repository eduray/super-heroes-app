import { SET_ENEMIES } from './../actions/enemieAction';


export const enemies = (state = {}, action) => {
    switch(action.type){
      case SET_ENEMIES: 
         return { ...state, enemies: action.enemies};  
      default: break;
    }
    return state;
}
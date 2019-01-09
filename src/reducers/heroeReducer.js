
import { SET_HEROES, PUSH_HEROE } from './../actions/heroeAction';

export const heroes = (state = {}, action) => {
    switch(action.type){
      case SET_HEROES: 
         return { ...state, heroesList: action.payload };
      case PUSH_HEROE:
         return { ...state, heroesList: [...state.heroesList, action.payload]  }; //arr: state.countries.concat(action.payload)   
      default: break;
    }
    return state;
}

export const getHeroesArray= state => state.heroes.heroesList && state.heroes.heroesList;
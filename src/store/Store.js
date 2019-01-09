import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
//import { HeroeReducer }  from './../reducers/heroeReducer';
import combineReducers  from './../reducers/index';

//ESTO ES PARA UTILIZAR LA HERRAMIENTA EN EL CHROME, NO ES PARTE DEL MIDDLEWARE
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = { 
                       heroes:{
                                heroesList:['spider','spider man']
                              },
                     }; 
export const store = createStore( combineReducers, initialState,  composeEnhancers(applyMiddleware(thunk)));

import { getAllHeroes } from './../services/heroeService/heroeService';
//import { Heroe } from './../domains/heroe';
//import { UrlsHeroes } from './../data/app-urls';
const toPairs = require('lodash.topairs');

export const SET_HEROES= 'SET_HEROES';
export const GET_HEROES= 'GET_HEROES';
export const PUSH_HEROE= 'PUSH_HEROE';
export const setHeroes = payload => ({type: SET_HEROES, payload});
export const getHeroes = () => ({type: GET_HEROES, heroes:['']});
export const pushHeroe = payload => ({type: PUSH_HEROE, payload});


export const getHeroesFromService= () => {
    return (dispatch, getState) => {
          //activar el estado un indicador de busqueda de datos.
          //debugger;
          dispatch(setHeroes(null));
          const state = getState();
          debugger;
          return getAllHeroes().then( resultData =>{
              //const forecastData = getDataFromForecastService(resultData);
              console.log("recibido de promise "+resultData);
  
              //modificar el estado con el resultado de la promise(fetch)
              //debugger;
              dispatch(setHeroes(['marvel']));
              console.log(toPairs(resultData));
          },(error)=>{
              console.log("Error: communitation with weather web service");
          });
    };
  };
  
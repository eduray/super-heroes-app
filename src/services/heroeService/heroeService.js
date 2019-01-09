
import { UrlsHeroes } from './../../data/app-urls';

export const getAllHeroes = () => {
    return new Promise((resolve, reject) => {
        const url = `${UrlsHeroes.headerUrl}${UrlsHeroes.allCharactersUrl}${UrlsHeroes.accessUrl}`
        fetch( url ).then( data => {
            return data.json();
        }).then( heroesData => {
            console.log(heroesData);
            resolve(heroesData);
        },(error)=>{
            reject(error);
            console.log("Error: communitation with weather web service");
        }); 
    });  
};
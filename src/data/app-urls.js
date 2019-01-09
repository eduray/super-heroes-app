import { Data } from './app-data';

export const UrlsHeroes = ({   
    headerUrl : `https://gateway.marvel.com:443`,
    accessUrl : `?ts=1&apikey=${Data.pkey}&hash=${Data.hash}`,
    allCharactersUrl : `/v1/public/characters`,
    getCharacterIdUrl : `/v1/public/characters/{characterId}`,
});
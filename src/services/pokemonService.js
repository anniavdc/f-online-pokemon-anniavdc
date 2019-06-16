import {data} from './listDataMock';

const baseURL = 'https://pokeapi.co/api/v2/pokemon/';
//const baseURL = 'http://pokeapi.salestock.net/api/v2/pokemon/';
const getList = () => fetch(`${baseURL}?limit=2`).then(response => response.json());

// const getList = () => {
//     return new Promise(function(resolve, reject) {
//         setTimeout(function(){
//             resolve(data)
//         }, 2000)
//       })
// }
const getDetail = (url) => fetch(url).then(response => response.json());

export {getList, getDetail};

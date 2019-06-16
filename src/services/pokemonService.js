const baseURL = 'https://pokeapi.co/api/v2/pokemon/';
//const baseURL = 'http://pokeapi.salestock.net/api/v2/pokemon/';

const getList = () => fetch(`${baseURL}?limit=25`).then(response => response.json());

const getDetail = (url) => fetch(url).then(response => response.json());

export {getList, getDetail};

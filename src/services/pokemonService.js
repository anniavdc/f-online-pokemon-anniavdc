import {data} from './listDataMock';

//const ENDPOINT = 'https://pokeapi.co/api/v2/pokemon/?limit=25';

//const getList = () => fetch(ENDPOINT).then(response => response.json());

const getList = () => {
    return new Promise(function(resolve, reject) {
        setTimeout(function(){
            resolve(data)
        }, 2000)
      })
}
//Aqui irian tambien el getDetail, create(post), update(put,patch), delete
export {getList};

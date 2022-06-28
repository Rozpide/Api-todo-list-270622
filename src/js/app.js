
const createUser = () => {
    const fetch = require('node-fetch');

    let url = 'http://assets.breatheco.de/apis/fake/todos/user/rozpi6';

    let options = {
    method: 'GET',
    headers: {'Content-Type': 'application/json'}
    // body: JSON.stringify([{label:"" , done: ""}]),
    };

    fetch(url, options)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error('error:' + err));}

const updateUser = () => {    

    const fetch = require('node-fetch');

    let url = 'http://assets.breatheco.de/apis/fake/todos/user/rozpi6';
    
    let options = {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: '[{"label":"hacer la cama","done":false},{"label":"peinar al perro","done":false},{"label":"secar la ropa","done":false},{"label":"aprender python","done":false},{"label":"subir de nivel","done":false}]'
    };
    
    fetch(url, options)
      .then(res => res.json())
      .then(json => console.log(json))
      .catch(err => console.error('error:' + err));}

const deleteUser = () => {

      const fetch = require('node-fetch');

      let url = 'http://assets.breatheco.de/apis/fake/todos/user/rozpi6';
      
      let options = {method: 'DELETE'};
      
      fetch(url, options)
        .then(res => res.json())
        .then(json => console.log(json))
        .catch(err => console.error('error:' + err));}

export default {
    createUser,
    deleteUser,
    updateUser,
};

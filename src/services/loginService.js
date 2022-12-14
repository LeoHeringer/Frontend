import api from './api';

function login(email, password){
    return new Promise((resolve, reject) => {
        return api.post(`/auth`, { email, password } )
        .then(response => resolve(response))
        .catch(error => reject(error));
    });
}

function obterTodos(){
    return new Promise((resolve, reject) => {
        return api.get(`/users`)
        .then(response => resolve(response))
        .catch(error => reject(error));
    });
}

function obterPorId(id){
    return new Promise((resolve, reject) => {
        return api.get(`/usuarios/${id}`)
        .then(response => resolve(response))
        .catch(error => reject(error));
    });
}

export default {
    login,
    obterTodos,
    obterPorId
}
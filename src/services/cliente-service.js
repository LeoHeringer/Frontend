import api from './api';

function obterTodos(){
    return new Promise((resolve, reject) => {
        return api.get('/users')
        .then(response => resolve(response))
        .catch(error => reject(error));
    });
}

function obterPorId(id){

    return new Promise((resolve, reject) => {
        return api.get(`/users/${id}`)
        .then(response => resolve(response))
        .catch(error => reject(error));
    });
}

function cadastrar(cliente){

    return new Promise((resolve, reject) => {
        return api.post(`/users`, cliente)
        .then(response => resolve(response))
        .catch(error => reject(error));
    });
}

function atualizar(cliente){

    return new Promise((resolve, reject) => {
        return api.put(`/users/${cliente.id}`, cliente)
        .then(response => resolve(response))
        .catch(error => reject(error));
    });
}

function deletar(id){

    return new Promise((resolve, reject) => {
        return api.delete(`/users/${id}`)
        .then(response => resolve(response))
        .catch(error => reject(error));
    });
}

export default {
    obterTodos,
    obterPorId,
    cadastrar,
    atualizar,
    deletar
}

import perfil from "./perfil";

export default class Cliente {
    constructor(obj) {
        obj = obj || {};
        this.id = obj.id;
        this.name = obj.name;
        this.email = obj.email;
        this.password = obj.password;
        this.cpf = obj.cpf;
        this.perfil = new perfil(obj.perfil);
    }

    modeloValidoLogin() {
        return !!(this.email && this.senha);
    }

    modeloValidoParaCadastro() {
        return !!this.name
    }

    modeloValidoParaAtualizar() {
        return !!(this.id && this.name)
    }

}
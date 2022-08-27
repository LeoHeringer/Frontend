<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <h1 class="titulo">{{ modoCadastro ? "Adicionar " : "Editar" }} Cliente</h1>
                <hr />
            </div>
        </div>

        <div class="row">
            <div class="col-sm-2 mt-3">
                <div class="from-group">
                    <label for="id">Código</label>
                    <input id="id" v-model="cliente.id" type="text" disabled class="form-control" />
                </div>
            </div>

            <div class="col-sm-10 mt-3">
                <div class="from-group">
                    <label for="id">Nome</label>
                    <input id="nome" v-model="cliente.name" type="text" class="form-control" />
                </div>
            </div>
            <div class="col-sm-4 mt-3">
                <div class="from-group">
                    <label for="id">E-mail</label>
                    <input id="email" v-model="cliente.email" type="text" class="form-control" />
                </div>
            </div>
            <div class="col-sm-4 mt-3">
                <div class="from-group">
                    <label for="id">CPF</label>
                    <input id="cpf" v-model="cliente.cpf" type="text" class="form-control" />
                </div>
            </div>
            <div class="col-sm-4 mt-3">
                <div class="from-group">
                    <label for="id">Senha</label>
                    <input id="senha" v-model="cliente.password" type="password" class="form-control" />
                </div>
            </div>
            <div class="col-sm-12 mt-3">
                <div class="from-group">
                    <label for="observacao">Observação</label>
                    <textarea id="observacao" v-model="cliente.observacao" type="text" class="form-control"
                        rows="4"></textarea>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-12">
                <hr />
            </div>

            <div class="container">
                <div class="btn-group float-right">
                    <button @click="cancelarAcao" class="btn btn-default mr-4">
                        Cancelar
                    </button>
                    <button @click="salvarCliente" class="btn btn-primary">Salvar</button>

                </div>
            </div>
        </div>
    </div>
</template>

<script>

import ClienteCreate from '../models/clienteModels'
import clienteService from '@/services/cliente-service';

export default {
    name: "ClienteCreate",
    data() {
        return {
            cliente: new ClienteCreate(),
            modoCadastro: true,
        }
    },
    mounted() {
        let id = this.$route.params.id;
        if (!id) return;

        this.modoCadastro = false;
        this.obterClientePorId(id);
    },
    methods: {
        obterClientePorId(id) {
            clienteService.obterPorId(id)
                .then(response => {
                    this.cliente = new ClienteCreate(response.data)
                })
                .catch(error => {
                    console.log(error)
                })
        },
        cancelarAcao() {
            this.cliente = new ClienteCreate();
            this.$router.push({ name: "ListaClientes" })
        },

        cadastrarCliente() {
            if (!this.cliente.modeloValidoParaCadastro()) {
                alert("Preencha todos os campos.");
                return;
            }

            clienteService.cadastrar(this.cliente)
                .then(() => {
                    alert("Cliente cadastrado com sucesso!");
                    this.cliente = new ClienteCreate();
                    this.$router.push({ name: "ListaClientes" })
                })
                .catch(error => {
                    console.log(error)
                    alert("Preencha todos os campos.");
                })
        },

        atualizarCliente() {
            if (!this.cliente.modeloValidoParaAtualizar()) {
                alert("O Código e o nome do cliente é obrigatorio para o cadastro.");
                return;

            }
            clienteService.atualizar(this.cliente)
                .then(() => {
                    alert("Cliente atualizado com sucesso!")
                    this.$router.push({ name: "ListaClientes" })
                })
                .catch(error => {
                    console.log(error)
                })
        },

        salvarCliente() {
            (this.modoCadastro) ? this.cadastrarCliente() : this.atualizarCliente();
        }
    }

};
</script>

<style scoped>
textarea {
    resize: none;
}

button {
    width: 90%;
    background-color: #16C5BB;
    color: black;
    border: none;
    cursor: pointer;
    flex-direction: row;

}
</style>
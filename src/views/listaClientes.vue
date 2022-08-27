<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <h1 class="titulo">Clientes</h1>
        <hr>
      </div>
    </div>

    <div class="row sub-container">
      <div class="col-sm-2">
        <Button :callback="adicionarCliente" value="Adicionar"></Button>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12">
        <table class="table table-striped">
          <thead class="thead-dark">
            <tr>
              <th>Código</th>
              <th>Nome</th>
              <th>E-mail</th>
              <th>CPF</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="cliente in clientes" :key="cliente.id">
              <td>{{ cliente.id }}</td>
              <td>{{ cliente.name }}</td>
              <td>{{ cliente.email }}</td>
              <td>{{ cliente.cpf }}</td>
              <td>
                <i @click="editarCliente(cliente)" class="fas fa-pencil-alt icones-tabela"></i>
                <i @click="excluirCliente(cliente)" class="fas fa-trash-alt icones-tabela"></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>

import Button from '@/components/button/button/button.vue'
import clienteService from '../services/cliente-service'
import Cliente from "../models/clienteModels"
import conversorDeCpf from '@/utils/conversorCpf'

export default {
  name: "ListaDeClientes",
  components: {
    Button,
  },
  filters: {
    cpf(cpf) {
      return conversorDeCpf.aplicarMarcaraEmCpfIso(cpf);
    }
  },
  data() {
    return {
      clientes: []
    }
  },
  methods: {

    adicionarCliente() {
      this.$router.push({ name: "NovoCliente" })
    },

    editarCliente(cliente) {
      this.$router.push({ name: "EditarCliente", params: { id: cliente.id } })

    },

    excluirCliente(cliente) {
      if (confirm(`Deseja excluir o cliente "${cliente.id} - ${cliente.name}"?`)) {

        clienteService.deletar(cliente.id)
          .then(() => {
            let indice = this.clientes.findIndex(c => c.id == cliente.id);
            this.cliente.slice(indice, 1);
            setTimeout(() => {
              alert("Cliente excluido com sucesso!");
            }, 500);
          })
          .catch(error => {
            console.log(error);
          })
      }
    },

    ordenasClientes(a, b) {
      return (a.id < b.id) ? -1 : (a.id > b.id) ? 1 : 0;
    },

    obterTodosOsClientes() {

      clienteService.obterTodos()
        .then(response => {
          let clientes = response.data.map((c) => new Cliente(c));

          this.clientes = clientes.sort(this.ordenarClientes).reverse();
        })
        .catch((error) => {
          console.log(error);
        })
    }
  },

  mounted() {
    this.obterTodosOsClientes();
  },
}
</script>

<style>
.container {
  margin-top: 15px;
}

.titulo {
  font-weight: 600;
  color: black;
  font-size: 25px;
  margin-top: 10px;
}

.sub-container {
  margin-top: 10px;
}

.icones-tabela {
  margin: 5px;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.8);
}
</style>

import Vue from 'vue'
import VueRouter from 'vue-router'
import loginAuth from '@/views/loginAuth'
import listaClientes from '@/views/listaClientes'
import clienteCreate from '@/views/clienteCreate'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'loginAuth',
    component: loginAuth,
    title: 'Login',
    meta: { requiredAuth: false }
  },
  {
    path: '/listaClientes',
    name: 'ListaClientes',
    component: listaClientes,
    title: 'Lista Clientes',
    meta: { requiredAuth: true },
  },
  {
    path: '/controleClientes/novo',
    name: 'NovoCliente',
    component: clienteCreate,
    title: 'Adicionar cliente',
    meta: { requiredAuth: true },
  },
  {
    path: '/controleClientes/editar',
    name: 'EditarCliente',
    component: clienteCreate,
    title: 'Editar cliente',
    meta: { requiredAuth: true },
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

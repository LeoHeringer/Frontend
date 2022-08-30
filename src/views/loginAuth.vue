<template>
    <div class="box-login" id="loginAuth">
        <div class="logo">
            <img src="@/assets/faustinoIMG.png" alt="Logo">
        </div>
        <div> 
            <div>
                <label for="E-mail"></label>
                <input type="email" placeholder="exemplo@gmail.com" v-model="usuario.email">
            </div>
            <div>
                <label for="Senha"></label>
                <input type="password" placeholder="Senha" v-model="usuario.password">
            </div>
            <button @click="login()">Login</button>
        </div>
    </div>
</template>

<script>
import loginService from '@/services/loginService'
import button from '@/components/button/button/button.vue'
import utilsStorage from '../utils/storage'
import Usuario from '../models/clienteModels'

export default {
    name: 'loginAuth',
    data: () => ({
        usuario: {
            email: '',
            password: ''
        },
        components: {
            button
        }
    }),
    methods: {
        login() {
            loginService
                .login(this.usuario.email, this.usuario.password)
                .then(response => {
                    this.usuario = new Usuario(response.data.usuario);

                    utilsStorage.salvarUsuarioNaStorage(this.usuario);
                    utilsStorage.salvarTokenNaStorage(response.data.token_jwt);

                    this.$router.push({ path: '/listaClientes' });
                })
                .catch(error => {
                    console.log(error);
                    this.$swal({
                        icon: 'error',
                        title: 'Email ou senha incorretos.',
                        confirmButtonColor: '#16C5BB',
                        animate: true
                    })
                })
        }
    }
}
</script>

<style scoped>
.box-login {
    width: 300px;
    margin: auto;
    border: 3px solid #16C5BB;
    transition: box-shadow;
    border-radius: 8px;
    margin-top: 10%;
    padding: 30px;
    background-color: rgba(0, 0, 0, 0.8);

}

.logo {
    text-align: center;
}

input {
    width: 100%;
    padding: 12px 20px;
    margin: 9px 0px;
    display: inline-block;
    border: 1px solid #ddd;
    outline: none;
    border-radius: 4px;
    box-sizing: border-box;
}

span {
    margin-left: 40px;
}

img {
    width: 200px;
    height: 200px;
}
</style>
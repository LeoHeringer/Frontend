<template>
    <ul>
        <li>
            <img src="@/assets/faustinoIMG.png" alt="Logo">
        </li>
        <li>
            <a @click="() => this.$router.push({path: '/listaClientes'})">Clientes</a>
        </li>
        <li>
            <a @click="() => this.$router.push({path: '/'})">Sair</a>
        </li>
    </ul>
</template>

<style scoped>

ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.8);
    color: whitesmoke;
}

li {
    float: left;
}

li:first-child {
    margin-left: 10px;
}

li:last-child{
    float: right;
    margin-right: 10px;
}

li a {
    display: block;
    color: #fff;
    padding: 15px 17px;
    text-decoration: none;
    text-align: center;
}

li a:hover {
    background-color: #16C5BB;
    cursor: pointer;

}

img{
    width: 55px;
    height: 55px;
}

</style>
<template>
    <button @click="callback">{{ value }}</button>
</template>

<script>
    export default {
        name:'buttonLogin',
        props:{
            value: {type: String, require},
            callback: {type: Function, default: () => {}}
        }

    }
</script>

<style>
button{
    width: 100%;
    background-color: #16C5BB;
    color: black;
    padding: 8px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}
</style>
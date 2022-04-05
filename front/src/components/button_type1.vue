<template>
    <button type='text' @click='onClick'>
        {{message}}
    </button>
</template>

<script>
export default {
    props:["message","baseClr","hoverClr"],
    method:{
        onClick:function(){
            this.$emit('click');
        }
    }
}
</script>

<style scoped>
button{
    text-align: center;
    font-weight: bold;
    padding:0.5em;
    border: 0;
    background-color: gray;
    border-radius: 3em;
}
</style>

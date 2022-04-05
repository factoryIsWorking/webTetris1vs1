<template>
    <input type='text' v-model="value" 
        @input='update'>
</template>

<script>
export default {
    data:function(){
        return {
            value:"",
        }
    },
    method:{
        update:function(){
            this.$emit('input',this.value);
        }
    }
}
</script>

<style scoped>
input{
    text-align: center;
    font-weight: bold;
    padding:0.5em;
    border: 0;
    background-color: gray;
    border-radius: 3em;
}
</style>

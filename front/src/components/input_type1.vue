<template>
    <input type='text' 
        v-model= 'content'
        :style="[{
            backgroundColor:backColor, 
            color:fontColor}]"
        @input="update"
        @focus="isFocus=true"
        @blur="isFocus=false"
        @mouseover="isHover=true"
        @mouseleave="isHover=false">
</template>

<script>
export default {
    props:{
        palette:{
            default:{
                base:'gray',
                hover:'lightgray',
                focus:'darkgray',
            }
        },
        fontPalette:{
            default:{
                base:'white',
                hover:'white',
                focus:'white',
            }
        },
    },
    data:function(){
        return {
            content:"",
            isFocus:false,
            isHover:false,
        }
    },
    computed:{
        backColor:function(){
            return this.isFocus ? this.palette.focus 
            : this.isHover ? this.palette.hover : this.palette.base;
        },
        fontColor:function(){
            return this.isFocus ? this.fontPalette.focus 
            : this.isHover ? this.fontPalette.hover : this.fontPalette.base;
        }
    },
    method:{
        update:function(){
            this.$emit('input',this.content);
        },
    },
}
</script>

<style scoped>
::placeholder {
  color:white;
}
input{
    text-align: center;
    font-weight: bold;
    padding:0.5em;
    border: 0;
    border-radius: 3em;
    transition: 0.25s;
}
input:focus{
    outline: none;
}
</style>

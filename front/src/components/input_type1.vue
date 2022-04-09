<template>
    <input type='text' 
        v-model= 'content'
        :style="[{
            backgroundColor:backColor, 
            color:fontColor},
            FontStyle]"
        @input="update"
        @focus="isFocus=true"
        @blur="isFocus=false"
        @mouseover="isHover=true"
        @mouseleave="isHover=false">
</template>

<script>
import Store from '../models/appModel';
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
            FontStyle:Store.state.theme.FontStyle,
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
    methods:{
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
input:focus{
    outline: none;
}
</style>

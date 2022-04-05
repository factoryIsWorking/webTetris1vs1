<template>
    <button type='text' 
        :style="[{backgroundColor:backColor, color:fontPalette.base}]"
        @click='onClick'
        @mouseover="isHover=true"
        @mouseleave="isHover=false">
        {{message}}
    </button>
</template>

<script>
export default {
    props:{
        message:{
            default:"click"
        },
        palette:{
            default:{
                base:'gray',
                hover:'lightgray',
            }
        },
        fontPalette:{
            default:{
                base:'white',
                hover:'white',
            }
        }
    },
    data:function(){
        return {
            isHover:false,
        }
    },
    computed:{
        backColor:function(){
            return this.isHover ? this.palette.hover : this.palette.base
        }
    },
    method:{
        onClick:function(){
            this.$emit('click');
        },
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

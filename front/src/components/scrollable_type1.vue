<template>
    <div :style="{width:'100%',overflowY: 'hidden',overflowX: 'hidden'}">
        <div :style="{width:W+'px', overflow:'hidden', fontSize:'100px'}">12345123451234512345</div>
    </div>
</template>

<script>
export default {
    data:function(){
        return {
            message: this.innerHTML,
            element: {clientWidth:0},
        }
    },
    computed:{
        W(){
            console.log(this.element.clientWidth)
            return this.element.clientWidth;
        }
    },
    mounted() {
        this.element = this.$el;
    },
}
</script>

<style scoped>
div::-webkit-scrollbar{
    background-color: gray;
    border-radius: 1000px;
}
div::-webkit-scrollbar-track{
    background-color: gray;
    border-radius: 1000px;
}
div::-webkit-scrollbar-thumb{
    height: 1%;
    background-color: white;
    border-radius: 1000px;
}
</style>

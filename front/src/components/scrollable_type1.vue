<template>
    <div :style="{width:'100%',overflowY: 'hidden',overflowX: 'hidden'}">
        <div :style="[{height:Size[1]+'px', width:Size[0]+'px'}, {overflowY: 'auto',overflowX: 'hidden'}]">
            <div>12341234311254513451324</div>
            <div>12341234311254513451324</div>
            <div>12341234311254513451324</div>
            <div>12341234311254513451324</div>
            <div>12341234311254513451324</div>
            <div>12341234311254513451324</div>
        </div>
    </div>
</template>

<script>
import addWindowEvent from '../models/windowModel';
export default {
    data:function(){
        return {
            message: this.innerHTML,
            refreshFlag:false,
        }
    },
    methods:{
        upFlag(){
            this.refreshFlag = true;
        },
    },
    computed:{
        Size(){
            if (this.refreshFlag == true)
                this.refreshFlag == false;
            return this.$el ? [this.$el.clientWidth, this.$el.clientHeight] : [0,0];
        }
    },
    mounted() {
        this.upFlag();
        for (let type of ['keyup','fullscreenchange','resize']){
            addWindowEvent(type, this.upFlag);
        }
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

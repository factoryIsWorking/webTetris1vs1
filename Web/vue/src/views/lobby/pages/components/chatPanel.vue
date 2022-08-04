<template>
    <div :style="{width:'100%',overflowY: 'hidden',overflowX: 'hidden'}">
        <div :style="[{height:Size[1]+'px', width:Size[0]+'px'}, {overflowY: 'auto',overflowX: 'hidden'},
            {fontSize : '2em'}]">
            <div>12341234311254513451324</div>
            <div>12341234311254513451324</div>
            <div>12341234311254513451324</div>
            <div>12341234311254513451324</div>
        </div>
    </div>
</template>

<script>
import addWindowEvent from '../../../../models/windowModel';
export default {
    data:function(){
        return {
            Size : [0,0],
        }
    },
    methods:{
        triggerRefresh(){
            this.Size = [0,0];
            let Size = this.Size;
            let E = this.$el;
            setTimeout(function(){
                [Size[0],Size[1]] = [E.clientWidth,E.clientHeight];
            },1);
        }
    },
    mounted() {
        this.triggerRefresh();
        for (let type of ['fullscreenchange','resize']){
            addWindowEvent(type, this.triggerRefresh);
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

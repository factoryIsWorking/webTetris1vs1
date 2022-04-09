<template>
  <div :style="[FlexCol]">
    <BaseButton v-for="(item,idx) of lobbyState.state.pageInfo.list" :key='idx'
        @active="commitPage"
        :value="idx"
        :message="item"
        :style="[FontStyle,ButtonStyle,Radious,{flex:1},]"
        :palette="idx == lobbyState.state.pageInfo.page ? {base:'white',hover:'white'} : undefined"
        :fontPalette="idx == lobbyState.state.pageInfo.page ? {base:'gray',hover:'gray'} : undefined"
      />
  </div>
</template>

<script>
import Store from '../../../models/appModel';

export default {
  props:{
    lobbyState:{
        default:{commit(){console.log('no store');}}
    }
  },
  data: function(){
    return {
      FontStyle:Store.state.theme.LobbyPage.FontStyle,
      ButtonStyle:Store.state.theme.LobbyPage.ButtonStyle,
      Radious:Store.state.theme.Radious,
      FlexCol : Store.state.theme.FlexCol,
      gapSize:Store.state.theme.LobbyPage.gapSize,
      selectedStyle : '5px solid white'
    }
  },
  methods:{
    commitPage:function(val){
      if (val == 4) return; // 게임 페이지 비활성화
      this.lobbyState.commit('changePage',val);
    }
  }
}
</script>

<style scoped>
</style>

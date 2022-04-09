<template>
  <div class="LobbyView"
    :style="[flexRow,background]">
    <div :style="[flexRow, {
        height:`calc(100% - ${gapSize}px)`,
        width:`calc(100% - ${gapSize}px)`,
        gap:gapSize/2+'px',
      }]">
      <div :style="[flexRow,{height:'100%', flex : 5, justifyContent: 'center',}]">
        <div :style="[boxSize]">
          <GameView/>
        </div>
      </div>
      <div :style="[flexRow,{height:'100%', flex : 5, justifyContent: 'center',}]">
        <div :style="[boxSize]">
          <ChatRoom v-if="page == 0"/>
          <MatchRecord v-else-if="page == 1"/>
          <RankPage v-else-if="page == 2"/>
          <StatusPage v-else-if="page == 3"/>
          <LogOut v-else-if="page == 5"/>
        </div>
      </div>
      <div :style="{ 
          display: 'flex', flexDirection:'column',
          height:'100%', flex : 2, minWidth: '100px', justifyContent: 'center'}">
        <div :style="[conSize]">
          <GameController :lobbyState="store" v-if="page == 4"/>
          <LobbyController :lobbyState="store" v-else/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Store from '../../models/appModel';
import { createStore } from 'vuex';

import GameView from './game/gameView.vue'
import ChatRoom from './pages/ChatRoom.vue'
import MatchRecord from './pages/MatchRecord.vue'
import RankPage from './pages/RankPage.vue'
import StatusPage from './pages/StatusPage.vue'
import LogOut from './pages/LogOut.vue'

import LobbyController from './controllers/LobbyController.vue'
import GameController from './controllers/GameController.vue'

const lobbyStore = createStore({
  state(){
    return {
      pageInfo: {
          page: 0,
          list: ['chat','record','rank','status','game','logout'],
      },
    }
  },
  mutations:{
    changePage(state, page){
      state.pageInfo.page = page;
    }
  }
});
export default {
  data: function(){
    return {
      background : Store.state.theme.BackImage,
      flexRow : Store.state.theme.FlexRow,
      boxSize : {
        height : '100%',
        width : '100%',
      },
      conSize : {
        height : '100%',
        width : '100%',
      },
      gapSize:Store.state.theme.LobbyPage.gapSize,
      store : lobbyStore,
    }
  },
  computed:{
    page(){
      return lobbyStore.state.pageInfo.page;
    }
  },
  components:{
    ChatRoom,MatchRecord,RankPage,StatusPage,LobbyController,GameController,GameView,LogOut
  },
}
</script>

<style scoped>
.LobbyView{
  width: 100%;
  height: 100%;
}
</style>
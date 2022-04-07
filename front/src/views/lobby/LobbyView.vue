<template>
  <div class="LobbyView"
    :style="[background]">
    <div :style="[flexRow]">
      <div :style="[flexRow,{height:'100%', flex : 6}]">
        <ChatRoom v-if="page == 0"/>
        <MatchRecord v-else-if="page == 1"/>
        <RankPage v-else-if="page == 2"/>
        <StatusPage v-else-if="page == 3"/>
      </div>
      <div :style="{ height:'100%', flex : 1, minWidth: '100px'}">
        <GameController v-if="page == 4"/>
        <LobbyController v-else/>
      </div>
    </div>
  </div>
</template>

<script>
import Store from '../../models/appModel';
import { createStore } from 'vuex';

import ChatRoom from './pages/ChatRoom.vue'
import MatchRecord from './pages/MatchRecord.vue'
import RankPage from './pages/RankPage.vue'
import StatusPage from './pages/StatusPage.vue'

import LobbyController from './controllers/LobbyController.vue'
import GameController from './controllers/GameController.vue'

const lobbyStore = createStore({
  state(){
    return {
      pageInfo: {
          page: 0,
          list: ['chat','record','rank','status','game'],
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
    }
  },
  computed:{
    page(){
      return lobbyStore.state.pageInfo.page;
    }
  },
  components:{
    ChatRoom,MatchRecord,RankPage,StatusPage,LobbyController,GameController
  },
  store : lobbyStore,
}
</script>

<style scoped>
.LobbyView{
  width: 100%;
  height: 100%;
}
</style>
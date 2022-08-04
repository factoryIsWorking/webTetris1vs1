<template>
  <div class="App">
    <LoginView v-if="page==0"/>
    <LobbyView v-else-if="page==1"/>
  </div>
</template>

<script>
import messageModel from './models/messageModel';
import LoginView from './views/login/LoginView.vue';
import LobbyView from './views/lobby/LobbyView.vue';
import Store from './models/appModel';

export default {
  data:function(){
    return {};
  },
  computed:{
    page(){
      return Store.state.pageInfo.page;
    }
  },
  components: {
    LoginView,
    LobbyView,
  },
  mounted() {
    messageModel.getSessionInfo();
    console.log('start');
  },
}
</script>

<style>
body{
  margin: 0;
}
.App {
  overflow: hidden;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100vw;
  height: 100vh;
}
</style>
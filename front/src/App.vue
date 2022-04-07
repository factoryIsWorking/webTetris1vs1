<template>
  <div class="App">
    <LoginView v-if="page==0"/>
    <LobbyView v-else-if="page==1"/>
  </div>
</template>

<script>
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
    console.log('start')
    //여기서 서버와 통신해서 state 설정
  },
}
</script>

<style>
body{
  margin: 0;
}
.App {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100vw;
  height: 100vh;
}
</style>
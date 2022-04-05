<template>
  <div class="App">
    <LoginView @onLogin="onLogin" v-if="page==0"/>
  </div>
</template>

<script>
import LoginView from './views/login/LoginView.vue';

export default {
  name: 'App',
  data:function(){
    return {
      page : 0,
      list : ['login', 'lobby', 'game']
    };
  },
  methods:{
    onLogin:function(){
      this.page = 1;
    }
  },
  components: {
    LoginView
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

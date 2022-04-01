<template>
  <div id="App">
    <LoginView v-if="page==0"/>
  </div>
</template>

<script>
import LoginView from './views/login/LoginView.vue';

let state = {
  page : 0,
  list : ['login', 'lobby', 'game']
}
export default {
  name: 'App',
  data:()=>{
    return state;
  },
  components: {
    LoginView
  },
  state : state,
}
</script>

<style>
body{
  margin: 0;
}
#App {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100vw;
  height: 100vh;
}
</style>

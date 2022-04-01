<template>
  <div id="SigninInput">
      <div>signIn</div>
      <button v-on:click="onClick">signup</button>
  </div>
</template>

<script>
import LoginView from './LoginView.vue';

export default {
  name: 'SigninInput',
  props: {LoginView},
  data:()=>LoginView.state,
  methods: {
    onClick :function(){
      this.page = 1;
    }
  }
}
</script>

<style scoped>
#SigninInput{
  height: 70%;
  width: 50%;
  background-color: blue;
}
</style>

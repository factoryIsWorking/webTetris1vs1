<template>
  <div id="SignupInput">
      <div>signUp</div>
      <button v-on:click="onClick">signin</button>
  </div>
</template>

<script>
import LoginView from './LoginView.vue';

export default {
  name: 'SignupInput',
  props: {},
  data:()=>LoginView.state,
  methods: {
    onClick :function(){
      this.page = 0;
    }
  }
}
</script>

<style scoped>
#SignupInput{
  height: 70%;
  width: 50%;
  background-color: orange;
}
</style>

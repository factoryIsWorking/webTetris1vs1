<template>
  <div class="LoginView">
      <SigninInput v-if="page === 0" LoginView="state"/>
      <SignupInput v-else-if="page === 1"/>
  </div>
</template>

<script>
import SigninInput from './SigninInput.vue';
import SignupInput from './SignupInput.vue';

let state = {
  page : 0,
  list : ["signIn", "signUp"]
}
export default {
  name: 'LoginView',
  props: {},
  data: ()=>state,
  components:{
    SigninInput,
    SignupInput
  },
  methods:{
  },
  state:state,
}
</script>

<style>
.LoginView{
  background-color:beige;
  width: 100%;
  height: 100%;
}
</style>

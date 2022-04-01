<template>
  <div class="SigninInput">
      <div>signIn</div>
      <InputForm @onSubmit="onSubmit"/>
  </div>
</template>

<script>
import LoginView from './LoginView.vue';
import InputForm from '../../components/InputForm.vue'

export default {
  name: 'SigninInput',
  props: {LoginView},
  data:()=>LoginView.state,
  methods: {
    onSubmit :function(val){
      console.log(val)
    }
  },
  components:{
    InputForm
  }
}
</script>

<style scoped>
.SigninInput{
  height: 70%;
  width: 50%;
  background-color: blue;
}
</style>

<template>
  <div class="LoginView"
    :style="[background]">
    <div :style="[FlexCol]">
      <SigninInput 
        v-if="page === 0" 
        @toggle="togglePage"
        :style="[formStyle]"
        />
      <SignupInput 
        v-else-if="page === 1" 
        @toggle="togglePage"
        :style="[formStyle]"
        />
    </div>
  </div>
</template>

<script>
import SigninInput from './components/SigninInput.vue';
import SignupInput from './components/SignupInput.vue';
import Store from '../../models/appModel';

export default {
  data: function(){
    return {
      page : 0,
      list : ["signIn", "signUp"],
      background : Store.state.theme.BackImage,
      formStyle: Store.state.theme.FormStyle,
      FlexCol: Store.state.theme.FlexCol,
    }
  },
  methods:{
    togglePage:function(){
      this.page = (this.page+1)%2;
    },
  },
  components:{
    SigninInput,
    SignupInput
  },
}
</script>

<style scoped>
.LoginView{
  width: 100%;
  height: 100%;
}
</style>
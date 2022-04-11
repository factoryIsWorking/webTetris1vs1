<template>
  <div class="SigninInput">
    <div :style="FlexCol">
      <TitleEl :style="{margin:'10%'}"/>
      <BaseInput type='text' v-model="id" placeholder="ID" 
        :style="[InputStyle,Radious,FontStyle]"
        :value="id"/>
      <BaseInput type='password' v-model="pw" placeholder="Password" 
        :style="[InputStyle,Radious,FontStyle]"
        :value="pw"/>
      <BaseButton @active="onSubmit" message="Sign In" 
        :palette="{base:'gray',hover:'green'}"
        :style="[ButtonStyle,Radious]"/>
      <BaseButton @active="onToggle" message="Sign Up" 
        :style="[ButtonStyle,Radious]"
        :palette="{base:'white',hover:'gray'}"
        :fontPalette="{base:'gray',hover:'white'}"
      />
    </div>
  </div>
</template>

<script>
import messageModel from '../../../models/messageModel';
import Store from '../../../models/appModel';

export default {
  props: ['width','height'],
  data:function(){
    return {
      id:"",
      pw:"",
      InputStyle:Store.state.theme.LoginPage.InputStyle,
      ButtonStyle:Store.state.theme.LoginPage.ButtonStyle,
      FlexCol:Store.state.theme.FlexCol,
      Radious:Store.state.theme.Radious,
      FontStyle:Store.state.theme.LoginPage.FontStyle,
    }
  },
  methods: {
    onSubmit : async function(){
      let res = await messageModel.signIn(this.id, this.pw);
      this.id = "";
      this.pw = "";
      if (res){
        Store.commit('changePage',1);
      }else{
        alert("로그인 실패 메시지");
      }
    },
    onToggle :function(){
      this.$emit("toggle", 1);
    }
  },
}
</script>

<style scoped>
.SigninInput{
  background-color: white;
  border-radius: 10%;
}
</style>

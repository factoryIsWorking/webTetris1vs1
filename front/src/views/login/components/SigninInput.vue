<template>
  <div class="SigninInput">
    <div class="flexbox">
      <TitleEl :style="{margin:'10%'}"/>
      <Input type='text' v-model="id" placeholder="ID" 
        :style="InputStyle"
        :value="id"/>
      <Input type='password' v-model="pw" placeholder="Password" 
        :style="InputStyle"
        :value="pw"/>
      <Button @click="onSubmit" message="Sign In" 
        :palette="{base:'gray',hover:'green'}"
        :style="[ButtonStyle]"/>
      <Button @click="onToggle" message="Sign Up" 
        :style="[ButtonStyle]"
        :palette="{base:'white',hover:'gray'}"
        :fontPalette="{base:'gray',hover:'white'}"
      />
    </div>
  </div>
</template>

<script>
import messageModel from '../../../models/messageModel';
import Store from '../../../models/appModel';

import TitleEl from '../../../components/titleEl.vue';
import Input from '../../../components/input_type1.vue';
import Button from '../../../components/button_type1.vue';

export default {
  props: ['width','height'],
  data:function(){
    return {
      id:"",
      pw:"",
      InputStyle:Store.state.theme.InputStyle,
      ButtonStyle:Store.state.theme.ButtonStyle,
    }
  },
  methods: {
    onSubmit : async function(){
      let res = await messageModel.signIn(this.id, this.pw);
      this.id = "";
      this.pw = "";
      if (res.success){
        Store.commit('changePage',1);
      }else{
        alert("로그인 실패 메시지");
      }
    },
    onToggle :function(){
      this.$emit("toggle", 1);
    }
  },
  components:{
    TitleEl,
    Input,
    Button
  }
}
</script>

<style scoped>
.SigninInput{
  background-color: white;
  border-radius: 10%;
}
.flexbox{
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
</style>

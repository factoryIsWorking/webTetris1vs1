<template>
  <div class="SigninInput">
    <div class="flexbox">
      <TitleEl :style="{margin:'10%'}"/>
      <Input type='text' v-model="id" placeholder="ID" :style="InputStyle"/>
      <Input type='text' v-model="pw" placeholder="Password" :style="InputStyle"/>
      <Button @click="onSubmit" message="Submit" 
      :style="[ButtonStyle]"/>
      <Button @click="onToggle" message="SignUp" 
      :style="[ButtonStyle]"/>
    </div>
  </div>
</template>

<script>
import TitleEl from '../../../components/titleEl.vue'
import Input from '../../../components/input_type1.vue'
import Button from '../../../components/button_type1.vue'

const MARGIN = '0.7em';
export default {
  props: ['width','height'],
  data:function(){
    return {
      id:"",
      pw:"",
      InputStyle:{
        width:'60%',
        height:'5.5%',
        margin:MARGIN,
      },
      ButtonStyle:{
        width:'20%',
        height:'7.5%',
        fontSize:'0.7em',
        margin:MARGIN,
      }
    }
  },
  methods: {
    onSubmit :function(){
      console.log(this.id, this.pw);
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

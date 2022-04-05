<template>
  <div class="LoginView"
    :style="[background]">
    <div class="flexbox">
      <SigninInput 
        v-if="page === 0" 
        @toggle="togglePage"
        :style="[formSize]"
        />
      <SignupInput 
        v-else-if="page === 1" 
        @toggle="togglePage"
        :style="[formSize]"
        />
    </div>
  </div>
</template>

<script>
import SigninInput from './components/SigninInput.vue';
import SignupInput from './components/SignupInput.vue';

const FORM_LEN = '450px';
export default {
  props: {},
  data: function(){
    return {
      page : 0,
      list : ["signIn", "signUp"],
      background : {
        'background-image': `url(${global.CONFIG.assetURL}/background/8.jpg)`
      },
      formSize: {
        maxHeight: FORM_LEN,
        maxWidth: FORM_LEN,
        height: '100%',
        width: '100%',
      }
    }
  },
  components:{
    SigninInput,
    SignupInput
  },
  methods:{
    togglePage:function(){
      this.page = (this.page+1)%2;
    }
  },
}
</script>

<style scoped>
.LoginView{
  width: 100%;
  height: 100%;
}
.flexbox{
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
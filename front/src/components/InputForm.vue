<template>
  <div class="Input">
    <input v-model="value" placeholder="입력하세요.">
    <button @click="submit">제출</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  data:()=>{
    return {
      value : "",
    };
  },
  methods:{
    submit:function(){
      this.$emit("onSubmit",this.value);
    }
  },
}
</script>

<style>
.Input {
    
}
</style>

<template>
  <div class="">
    <textarea id="new-todo" v-model="newTodo" v-on:keyup.enter="submitTodo"></textarea>
  </div>
</template>

<script>
export default {
  name: 'AddTodo',
  data(){
    return {
      newTodo: ''
    }
  },
  methods:{
    submitTodo(){
      if(this.newTodo.trim().length){
        this.$emit("addT", this.newTodo.trim());
      }
      this.newTodo = '';
    }
  }
}
</script>
<style scoped>

</style>

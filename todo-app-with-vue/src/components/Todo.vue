<template>
  <div class="todo">
    <span @click="deleteTodo">{{todo.text}}</span>
    <button class="btn edit" @click="openEditing">Edit</button>
  </div>
</template>

<script>
export default {
  name: 'Todo',
  props: ["todo"],
  methods:{
    openEditing(){
      this.$emit('openEditDialogue', {text:this.todo.text, index:this.todo.index});
    },
    deleteTodo(){
      this.$emit('deleteT', this.todo.index);
    }
  }
}
</script>

<style scoped>
</style>

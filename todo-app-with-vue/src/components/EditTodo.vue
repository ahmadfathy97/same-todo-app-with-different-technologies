<template>
  <section class="edit-form">

    <textarea id="edit-todo" v-model="todo.text"></textarea>

    <div>
      <button class="btn done" @click="confirmEditing">Done</button>
      <button class="btn cancel" @click="close">Cancel</button>
    </div>

  </section>
</template>

<script>
export default {
  name: 'EditTodo',
  props: ["todo"],
  methods:{
    confirmEditing(){
      if(this.todo.text.trim().length){
        this.$emit('edit', {text:this.todo.text.trim(), index: this.todo.index});
        this.close();
      }
    },
    close(){
      this.$emit('cancel')
    }
  }
}
</script>

<style scoped>
</style>

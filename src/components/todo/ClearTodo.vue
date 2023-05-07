<template>
  <div class="hello">
    <div class="todo-grid">
      <TodoItem
        class="todo-item"
        v-for="(todo, i) in todoClear"
        :key="i"
        :todo="todo"
      />
    </div>
  </div>
</template>

<script lang="ts">
import TodoItem from "@/components/todo/TodoItem.vue";
import { TodoType } from "@/types/todoTypes";
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const store = useStore();
    const todoData = store.state.todo;
    const todoClear = computed(() =>
      todoData.filter((item: TodoType) => item.clear === true)
    );

    return { todoClear };
  },
  components: {
    TodoItem,
  },
});
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.todo-input {
  width: 200px;
}
.todo-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 24px auto;
  width: 1000px;
}

.todo-item {
  border: 1px solid gray;
  margin: 8px auto;
  width: 300px;
  height: 140px;
}
</style>

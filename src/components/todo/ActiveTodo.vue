<template>
  <div class="hello">
    <form @submit.prevent="saveTodo">
      <input
        class="todo-input"
        v-model="inputValue"
        placeholder="할 일을 적고 엔터를 누르세요"
      />
    </form>
    <div class="todo-grid">
      <TodoItem
        class="todo-item"
        v-for="(todo, i) in todoActive"
        :key="i"
        :todo="todo"
      />
    </div>
  </div>
</template>

<script lang="ts">
import TodoItem from "@/components/todo/TodoItem.vue";
import { TodoType } from "@/types/todoTypes";
import { format } from "date-fns";
import { v4 as uuidv4 } from "uuid";
import { computed, defineComponent, ref } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const store = useStore();
    const inputValue = ref("");
    const todoData = store.state.todo;
    const todoActive = computed(() =>
      todoData.filter((item: TodoType) => item.clear === false)
    );
    const saveTodo = () => {
      store.commit("setTodo", {
        id: uuidv4(),
        content: inputValue.value,
        createdAt: format(new Date(), "yyyyMMdd"),
        clear: false,
      });
      inputValue.value = "";
    };
    return { todoActive, saveTodo, inputValue };
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

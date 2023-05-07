<template>
  <div>
    <form v-if="toggle" @submit.prevent="editTodo">
      <input v-model="editValue" placeholder="수정 후 엔터" />
    </form>
    <div v-else>할일 :{{ todo.content }}</div>
    <div>날짜 : {{ todo.createdAt }}</div>
    <div>{{ todo.clear ? "완료" : "진행중" }}</div>
    <button @click="clearToggle">{{ todo.clear ? "취소" : "완료" }}</button>
    <div>
      <button @click="setToggle" type="button">수정</button>
      <button @click="deleteTodo" type="button">삭제</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";
export default defineComponent({
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const store = useStore();
    const toggle = ref(false);
    const editValue = ref("");
    const setToggle = () => {
      toggle.value = !toggle.value;
    };
    const editTodo = () => {
      if (editValue.value.length) {
        store.commit("updateTodo", {
          id: props.todo.id,
          content: editValue.value,
        });
      }
      toggle.value = false;
    };
    const deleteTodo = () => {
      if (confirm("정말 삭제하시겠습니까?")) {
        store.commit("deleteTodo", props.todo.id);
      }
    };
    const clearToggle = () => {
      store.commit("clearToggle", props.todo.id);
    };
    return { deleteTodo, toggle, editValue, editTodo, setToggle, clearToggle };
  },
});
</script>

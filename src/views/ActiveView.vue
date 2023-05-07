<template>
  <div class="home">
    <ActiveTodo />
  </div>
</template>

<script lang="ts">
import ActiveTodo from "@/components/todo/ActiveTodo.vue"; // @ is an alias to /src
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    ActiveTodo,
  },
});
</script>

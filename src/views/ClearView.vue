<template>
  <div>
    <ClearTodo />
  </div>
</template>

<script lang="ts">
import ClearTodo from "@/components/todo/ClearTodo.vue"; // @ is an alias to /src
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    ClearTodo,
  },
});
</script>

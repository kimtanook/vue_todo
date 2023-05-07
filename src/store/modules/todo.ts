import { TodoType } from "@/types/todoTypes";
import { MutationTree } from "vuex";

export const todo = {
  state: [],
  mutations: <MutationTree<TodoType[]>>{
    setTodo: (state, data: TodoType) => {
      state.push({
        id: data.id,
        content: data.content,
        createdAt: data.createdAt,
        clear: data.clear,
      });
    },
    updateTodo: (state, data: { id: string; content: string }) => {
      console.log("data : ", data);
      const todoIndex = state.findIndex((item) => item.id === data.id);
      if (todoIndex !== -1) {
        state[todoIndex] = { ...state[todoIndex], content: data.content };
      }
    },
    deleteTodo: (state, id: string) => {
      const index = state.findIndex((item) => item.id === id);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
    clearToggle: (state, id) => {
      const todoIndex = state.findIndex((item) => item.id === id);
      state[todoIndex] = {
        ...state[todoIndex],
        clear: !state[todoIndex].clear,
      };
    },
  },
};

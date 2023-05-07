import { todo } from "@/store/modules/todo";
import { user } from "@/store/modules/user";
import { createStore } from "vuex";
export default createStore({
  modules: { todo, user },
});

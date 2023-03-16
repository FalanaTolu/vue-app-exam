import { ref } from "@vue/reactivity";
import store from "@/store/index";

const useUser = () => {
  let user = ref("");
  
  user.value = store.state.auth.user;

  return { user };
};

export default useUser;

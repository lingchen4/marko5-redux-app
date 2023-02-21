import { initialize } from "../../redux/counter/counterSlice";
import { store } from "../../redux/store";


export default class {
  onCreate(input) {
    this.PRELOADED_STATE = input.module;
    store.dispatch(initialize({ ...this.PRELOADED_STATE}));
  }
}
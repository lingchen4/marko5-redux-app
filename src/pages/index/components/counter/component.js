import { decrement, increment, incrementByAmount } from "../../redux/counter/counterSlice";
import { store } from "../../redux/store";


export default class {
  onMount() {
    store.subscribe(() => {
      this.forceUpdate()
    });
  }

  increment() {
    store.dispatch(increment());
  }

  decrement() {
    store.dispatch(decrement())
  }

  incrementByFive() {
    store.dispatch(incrementByAmount(5));
  }
}
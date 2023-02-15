// <!--*
//  * This is a presentation component that has no knowledge of Redux.
//  * When an action needs to be performed it simply emits an event
//  * that needs to be handled by a parent container component.
//  * In this example, the `app` component will handle the `increment` and
//  * `decrement` actions by directly interacting with the Redux store.
//  -->
export default class {
  increment() {
    this.emit("increment");
  }

  decrement() {
    this.emit("decrement");
  }

  incrementIfOdd() {
    if (this.input.module.value % 2 !== 0) {
      this.increment();
    }
  }

  incrementAsync() {
    setTimeout(() => {
      this.increment();
    }, 1000);
  }
}

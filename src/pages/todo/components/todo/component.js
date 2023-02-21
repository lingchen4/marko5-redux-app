import {
  addTodo,
  deleteTodo,
  markAllCompleted,
  toggleTodo
} from '../../redux/todo/todoSlice';
import { store } from '../../redux/store';

export default class {
  onCreate() {
    this.state = {
      inputVal: ''
    };
  }

  handleInputChange(e) {
    this.state.inputVal = e.target.value;
  }

  onMount() {
    store.subscribe(() => {
      this.forceUpdate();
    });

    const comp = this;
    this.el.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
        console.log('enter')
        comp.addTodo();
      }
    });
  }

  addTodo() {
    if (this.state.inputVal) {
      store.dispatch(addTodo(this.state.inputVal));
      this.state.inputVal = '';
    }
  }

  deleteTodo(id) {
    store.dispatch(deleteTodo(id));
  }

  toggleTodo(id, { event }) {
    event.stopPropagation();
    store.dispatch(toggleTodo(id));
  }

  markAllCompleted() {
    store.dispatch(markAllCompleted());
  }
}

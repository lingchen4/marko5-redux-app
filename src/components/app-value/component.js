import store from '../store/index';
export default class {
  onMount() {

    store.subscribe(() => {
      this.forceUpdate();
    });
  }
}

import { observable, computed, decorate, autorun, reaction } from 'mobx';
export class MainStore {
	todos = ['as', 'ds'];
	myStr = observable.box('myStr');
	get todoCount() {
		return this.todos.length;
	}
}
decorate(MainStore, {
	todos: observable,
	myStr: observable,
	todoCount: computed,
});

const store = new MainStore();
// autorun(() => {
// 	console.log(store.todos.length);
// });
// reaction(
// 	() => store.todos.length,
// 	() => {
// 		store.todos.forEach(console.log);
// 	},
// );
export default store;

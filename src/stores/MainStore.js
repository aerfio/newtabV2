import { observable, computed, decorate } from 'mobx';
export class MainStore {
	todos = ['as', 'ds'];
	myStr = observable.box('omfg');
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

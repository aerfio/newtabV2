import { observable, computed, decorate, autorun, reaction } from 'mobx';
export class MainStore {
	todos = ['as', 'ds'];

	get todoCount() {
		return this.todos.length;
	}
}
decorate(MainStore, {
	todos: observable,
	todoCount: computed,
});

const store = new MainStore();
// autorun(() => {
// 	console.log(store.todos.length);
// });
reaction(
	() => store.todos.length,
	() => {
		store.todos.forEach(console.log);
	},
);
export default store;

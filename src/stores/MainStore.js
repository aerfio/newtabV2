import { observable, decorate } from 'mobx';
export class MainStore {
	page = 'Links';
	notes = [];
	loading = true;
	err = null;
}
decorate(MainStore, {
	page: observable,
	notes: observable,
	loading: observable,
	err: observable,
});

const store = new MainStore();
export default store;

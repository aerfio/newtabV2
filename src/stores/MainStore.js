import { observable, decorate } from 'mobx';
export class MainStore {
	subpage = 'Links';
	notes = [];
	loading = true;
	err = null;
	page = 'Main';
}
decorate(MainStore, {
	subpage: observable,
	notes: observable,
	loading: observable,
	err: observable,
	page: observable,
});

const store = new MainStore();
export default store;

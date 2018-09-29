import { observable, decorate } from 'mobx';
export class MainStore {
	page = 'Links';
}
decorate(MainStore, {
	page: observable,
});

const store = new MainStore();
export default store;

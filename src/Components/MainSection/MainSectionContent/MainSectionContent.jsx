import React from 'react';
import { observer } from 'mobx-react';
import store from './../../../stores/MainStore';
import Links from './Links';
import Notes from './Notes/Notes';
const MainSectionContent = () => {
	if (store.page === 'Links') {
		return <Links />;
	}
	return <Notes />;
};

export default observer(MainSectionContent);
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './stores/MainStore';
import './mobxConfig';
import DevTools from 'mobx-react-devtools';

ReactDOM.render(
	<React.Fragment>
		<App store={store} />
		{process.env.NODE_ENV !== 'production' && <DevTools noPanel={false} />}
	</React.Fragment>,
	document.getElementById('root'),
);
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './mobxConfig';
import DevTools from 'mobx-react-devtools';
import WebFont from 'webfontloader';

ReactDOM.render(
	<React.Fragment>
		<App />
		{process.env.NODE_ENV !== 'production' && <DevTools noPanel={false} />}
	</React.Fragment>,
	document.getElementById('root'),
);
registerServiceWorker();
WebFont.load({
	google: {
		families: ['Inconsolata:400', 'Lora', 'Noto Serif:400,700'],
	},
});

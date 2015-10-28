import App from 'ampersand-app';
import MainView from './mainView';

App.extend({
	init: () => {
		let mainView = new MainView();

		document.querySelector('#main').appendChild(mainView.el);
	}
});

App.init();
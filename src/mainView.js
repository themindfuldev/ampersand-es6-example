import View from 'ampersand-view';
import MainTemplate from './mainTemplate.hbs';

let MainView = View.extend({
	autoRender: true,
	template: MainTemplate,
	events: {
		'click #loadCat': 'loadCat',
		'click #loadDog': 'loadDog',
		'click #loadWolf': 'loadWolf'
	},
	loadCat: function() {
		require.ensure([], () => {
			let CatView = require('./cat/view');
			let CatState = require('./cat/state');

			let model = new CatState({
				name: 'Bugsy'
			});
			let view = new CatView({
				el: this.query('#catMessage'),
				model: model
			})
		});
	},
	loadDog: function() {
		require.ensure([], () => {
			let { DogView } = require('./zoo/view');
			let { DogState } = require('./zoo/state');

			let model = new DogState({
				name: 'Sherlock',
				breed: 'beagle'
			});
			let view = new DogView({
				el: this.query('#dogMessage'),
				model: model
			})
		});
	},
	loadWolf: function() {
		require.ensure([], () => {
			let { WolfView } = require('./zoo/view');
			let { WolfState } = require('./zoo/state');

			let model = new WolfState({
				name: 'Direwolf'
			});
			let view = new WolfView({
				el: this.query('#wolfMessage'),
				model: model
			})
		});
	}
});

export default MainView;
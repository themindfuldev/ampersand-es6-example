import View from 'ampersand-view';
import DogTemplate from './dogTemplate.hbs';
import WolfTemplate from './wolfTemplate.hbs';

export const DogView = View.extend({
	autoRender: true,
	bindings: {
		'model.message': '.message',
		'model.name': '.name',
		'model.breed': '.breed'
	},
	template: DogTemplate
});

export const WolfView = View.extend({
	autoRender: true,
	bindings: {
		'model.message': '.message',
		'model.name': '.name'
	},
	template: WolfTemplate
});
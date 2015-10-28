import View from 'ampersand-view';
import CatTemplate from './catTemplate.hbs';

export default View.extend({
	autoRender: true,
	bindings: {
		'model.message': '.message',
		'model.name': '.name'
	},
	template: CatTemplate
});
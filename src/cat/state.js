import State from 'ampersand-state';

export default State.extend({
    props: {
        name: 'string'
    },
	derived: {
        message: {
            deps: ['name'],
            fn: function() {
                return this.name + ': You gotta be kidding that I\'ll obey you, right?';
            }
        }
    }
});
import State from 'ampersand-state';

let getBarkStyle = isHowler => {
  return isHowler? 'woooooow!': 'woof, woof!';
};

export const DogState = State.extend({
    props: {
        name: 'string',
        breed: 'string'
    },
    derived: {
        message: {
            deps: ['name', 'breed'],
            fn: function() {
                return this.name + ': ' + getBarkStyle(this.breed === 'husky');
            }
        }
    }
});

export const WolfState = State.extend({
    props: {
        name: 'string'
    },
    derived: {
        message: {
            deps: ['name'],
            fn: function() {
                return this.name + ': ' + getBarkStyle(true);
            }
        }
    }
});

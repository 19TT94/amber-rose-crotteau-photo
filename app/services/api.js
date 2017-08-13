import Ember from 'ember';

const home = [
    {
        'color':''
        'url':'https://placehold.it/500x200';
    },
    {
        'color':''
        'url':'https://placehold.it/500x200';
    },
    {
        'color':''
        'url':'https://placehold.it/500x200';
    },
    {
        'color':''
        'url':'https://placehold.it/500x200';
    }
];

const reason = 'There was an error.';

export default Ember.Service.extend({

    getHome() {
        return new Ember.RSVP.Promise((res, rej) => {
            // on sucess
            res(home);
            //on failure
            //rej(reason);
        });
    }

});

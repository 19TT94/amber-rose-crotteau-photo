import Ember from 'ember';

const home = [
    {
        'button':'lifestyle',
        'color':'#424B54',
        'url':'/images/cat3.jpg'
    },
    {
        'button':'people',
        'color':'#E0E2DB',
        'url':'/images/human1.jpg'
    },
    {
        'button':'land',
        'color':'#7C90A0',
        'url':'/images/land2.JPG'
    },
    {
        'button':'sea',
        'color':'#CFE8EF',
        'url':'/images/ocean1.jpg'
    },
    {
        'button':'animals',
        'color':'#596869',
        'url':'/images/surf1.jpg'
    }
];

const reason = 'There was an error.';

export default Ember.Service.extend({

    getHome() {
        return new Ember.RSVP.Promise((res, rej) => {
            res(home);
        });
    }

});

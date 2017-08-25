import Ember from 'ember';

const home = [
    {
        'button':'lifestyle',
        'color':'#D6D8D2',
        'url':'/images/lifestyle.jpg'
    },
    {
        'button':'people',
        'color':'#424B54',
        'url':'/images/human1.jpg'
    },
    {
        'button':'land',
        'color':'#7C90A0',
        'url':'/images/land.jpg'
    },
    {
        'button':'sea',
        'color':'#C1D7DD',
        'url':'/images/surf.jpg'
    },
    {
        'button':'animals',
        'color':'#596869',
        'url':'/images/cat3.jpg'
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

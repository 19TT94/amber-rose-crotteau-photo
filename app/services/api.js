import Ember from 'ember';

const home = [
    {
        'button':'wild',
        'color':'linear-gradient(to bottom, #F4AD97 50%, #FFADC6 100%)',
        'url':'/images/cat3.jpg'
    },
    {
        'button':'humans',
        'color':'linear-gradient(to bottom, #FFADC6 50%, #DDBAC3 100%)',
        'url':'/images/human1.jpg'
    },
    {
        'button':'land',
        'color':'linear-gradient(to bottom, #DDBAC3 50%, #FFE4DB 100%)',
        'url':'/images/land2.JPG'
    },
    {
        'button':'sea',
        'color':'linear-gradient(to bottom, #FFE4DB 50%, #88A0A8 100%)',
        'url':'/images/ocean1.jpg'
    },
    {
        'button':'surf',
        'color':'linear-gradient(to bottom, #88A0A8 50%, #B4CEB3 100%)',
        'url':'/images/surf1.jpg'
    },
    {
        'button':'sand',
        'color':'#B4CEB3',
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

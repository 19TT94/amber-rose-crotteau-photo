import Ember from 'ember';

const home = [
    {
        'button':'wild',
        'color':'linear-gradient(to bottom, #FFCABA 80%, #FCD4DE 100%)',
        'url':'/images/cat3.jpg'
    },
    {
        'button':'humans',
        'color':'linear-gradient(to bottom, #FCD4DE 80%, #E0E2DB 100%)',
        'url':'/images/human1.jpg'
    },
    {
        'button':'land',
        'color':'linear-gradient(to bottom, #E0E2DB 80%, #B4CEB3 100%)',
        'url':'/images/land2.JPG'
    },
    {
        'button':'sea',
        'color':'linear-gradient(to bottom, #B4CEB3 80%, #CFE8EF 100%)',
        'url':'/images/ocean1.jpg'
    },
    {
        'button':'surf',
        'color':'linear-gradient(to bottom, #CFE8EF 80%, #91B7C7 100%)',
        'url':'/images/surf1.jpg'
    },
    {
        'button':'sand',
        'color':'#91B7C7',
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

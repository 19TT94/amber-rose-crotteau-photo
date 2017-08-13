import Ember from 'ember';

const home = [
    {
        'button':'Wild',
        'color':'#FFCEE5',
        'url':'/images/cat3.jpg'
    },
    {
        'button':'Humans',
        'color':'#FCF6BD',
        'url':'/images/human1.jpg'
    },
    {
        'button':'Land',
        'color':'#D0F4DE',
        'url':'/images/land2.JPG'
    },
    {
        'button':'Sea',
        'color':'#A9DEF9',
        'url':'/images/ocean1.jpg'
    },
    {
        'button':'Surf',
        'color':'#E4C1F9',
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

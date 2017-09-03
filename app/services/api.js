import Ember from 'ember';

const home = [
    {
        'button':'lifestyle',
        'color':'#D6D8D2',
        'url':'/images/lifestyle.jpg',
        'slides': [
            '/images/lifestyle.jpg',
            '/images/lifestyle1.jpg',
            '/images/lifestyle2.jpg'
        ]
    },
    {
        'button':'people',
        'color':'#424B54',
        'url':'/images/human1.jpg',
        'slides': [
            '/images/human1.jpg',
            '/images/human.jpg',
            '/images/human2.jpg'
        ]
    },
    {
        'button':'land',
        'color':'#7C90A0',
        'url':'/images/land.jpg',
        'slides': [
            '/images/land.jpg',
            '/images/land1.jpg',
            '/images/land2.jpg'
        ]
    },
    {
        'button':'sea',
        'color':'#C1D7DD',
        'url':'/images/surf.jpg',
        'slides': [
            '/images/surf.jpg',
            '/images/surf1.jpg',
            '/images/surf2.jpg'
        ]
    },
    {
        'button':'animals',
        'color':'#596869',
        'url':'/images/cat3.jpg',
        'slides':[
            '/images/cat3.jpg',
            '/images/cat.jpg',
            '/images/cat1.jpg'
        ]
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

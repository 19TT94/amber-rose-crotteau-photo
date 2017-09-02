import Ember from 'ember';

const home = [
    {
        'button':'lifestyle',
        'color':'#D6D8D2',
        'url':'/images/lifestyle.jpg',
        'slides': [
            'https://placehold.it/500x500',
            'https://placehold.it/500x500',
            'https://placehold.it/500x500'
        ]
    },
    {
        'button':'people',
        'color':'#424B54',
        'url':'/images/human1.jpg',
        'slides': [
            'https://placehold.it/500x500',
            'https://placehold.it/500x500',
            'https://placehold.it/500x500'
        ]
    },
    {
        'button':'land',
        'color':'#7C90A0',
        'url':'/images/land.jpg',
        'slides': [
            'https://placehold.it/500x500',
            'https://placehold.it/500x500',
            'https://placehold.it/500x500'
        ]
    },
    {
        'button':'sea',
        'color':'#C1D7DD',
        'url':'/images/surf.jpg',
        'slides': [
            'https://placehold.it/500x500',
            'https://placehold.it/500x500',
            'https://placehold.it/500x500'
        ]
    },
    {
        'button':'animals',
        'color':'#596869',
        'url':'/images/cat3.jpg',
        'slides':[
            'https://placehold.it/500x500',
            'https://placehold.it/500x500',
            'https://placehold.it/500x500'
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

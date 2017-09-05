import Ember from 'ember';

const home = [
    {
        'button':'lifestyle',
        'color':'#D6D8D2',
        'url':'/images/lifestyle.jpg',
        'slide':'/images/lifestyle.jpg',
        'slide1':'/images/lifestyle1.jpg',
        'slide2':'/images/lifestyle2.jpg'
    },
    {
        'button':'people',
        'color':'#424B54',
        'url':'/images/human1.jpg',
        'slide':'/images/human1.jpg',
        'slide1':'/images/human.jpg',
        'slide2':'/images/human2.jpg'
    },
    {
        'button':'land',
        'color':'#7C90A0',
        'url':'/images/land.jpg',
        'slide':'/images/land.jpg',
        'slide1':'/images/land1.jpg',
        'slide2':'/images/land2.jpg'
    },
    {
        'button':'sea',
        'color':'#C1D7DD',
        'url':'/images/surf.jpg',
        'slide':'/images/surf.jpg',
        'slide1':'/images/surf1.jpg',
        'slide2':'/images/surf2.jpg'
    },
    {
        'button':'animals',
        'color':'#596869',
        'url':'/images/cat3.jpg',
        'slide':'/images/cat3.jpg',
        'slide1':'/images/cat.jpg',
        'slide2':'/images/cat1.jpg'
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

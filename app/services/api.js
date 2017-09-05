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
        'slide1':'/images/human.JPG',
        'slide2':'/images/human3.jpg'
    },
    {
        'button':'land',
        'color':'#7C90A0',
        'url':'/images/land5.JPG',
        'slide':'/images/land5.JPG',
        'slide1':'/images/ocean1.jpg',
        'slide2':'/images/land2.JPG'
    },
    {
        'button':'sea',
        'color':'#C1D7DD',
        'url':'/images/surf5.JPG',
        'slide':'/images/surf5.JPG',
        'slide1':'/images/surf1.jpg',
        'slide2':'/images/surf2.jpg'
    },
    {
        'button':'animals',
        'color':'#596869',
        'url':'/images/cat3.jpg',
        'slide':'/images/cat3.jpg',
        'slide1':'/images/cat2.jpg',
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

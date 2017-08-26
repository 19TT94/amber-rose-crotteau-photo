import Ember from 'ember';

export default Ember.Component.extend({

    didInsertElement() {
        let self = this;
        Ember.run.scheduleOnce('afterRender', () => {
            Ember.$(this.element).fullpage({
                menu: '.category',
		        lockAnchors: false,
                anchors:['lifestyle', 'people', 'land', 'sea', 'animals'],
                fadingEffect: true,
                navigation: false,
                onLeave: function(index, nextIndex, direction) {
                    let element = $('.section');
                    if(element.hasClass('active')) {
                        let prev = index-1;

                        // image effects
                        let imagePrev = '.featured__image' + prev;
                        let imageNext = '.featured__image' + nextIndex;
                        // if(index < 5) {
                        //     if(!$(imagePrev).hasClass('hide')) {
                        //         element.find(imagePrev).addClass('hide');
                        //     } else {
                        //         element.find(imagePrev).removeClass('hide');
                        //     }
                        //     if(!$(imageNext).hasClass('hide')) {
                        //         element.find(imageNext).addClass('hide');
                        //     } else {
                        //         element.find(imageNext).removeClass('hide');
                        //     }
                        // }
                    }
                }
            });
        });
    }

});

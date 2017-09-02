import Ember from 'ember';

export default Ember.Component.extend({

    didInsertElement() {
        let self = this;
        Ember.run.scheduleOnce('afterRender', () => {
            Ember.$(this.element).fullpage({
                menu: '.category',
		        lockAnchors: false,
                anchors:['lifestyle', 'people', 'land', 'sea', 'animals'],
                // css3: false,
                navigation: false,
                onLeave: function(index, nextIndex, direction) {
                    let element = $('.section');
                    if(element.hasClass('active')) {
                        // image fade effects
                        let currentSlide = $(this);
                        //going down
                        // if (direction === 'down') {
                        //     currentSlide.find('.featured__image').addClass('hide');
                        // } else {
                        //     currentSlide.find('.featured__image').removeClass('hide');
                        // }

                        if (nextIndex === 6 || nextIndex === 7) {
                            // remove menu comoponents
                            $('.category').css('opacity', '0');
                            $('.title').css('opacity', '0');
                            // $('.social').css('opacity', '0');
                        } else {
                            // add menu comoponents
                            $('.category').css('opacity', '1');
                            $('.title').css('opacity', '1');
                            $('.social').css('opacity', '1');
                        }

                    }
                }
            });
        });
    }

});

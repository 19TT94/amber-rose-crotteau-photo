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
                onLeave: function(index, direction) {
                    let element = $('.section');
                    if(element.hasClass('active')) {
                        console.log('active');
                        element.find('.featured__image' + index).addClass('show');
                    }
                }
            });
        });
    }

});

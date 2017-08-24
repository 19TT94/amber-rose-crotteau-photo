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

                }
            });
        });
    }

});

import Ember from 'ember';

export default Ember.Component.extend({

    didInsertElement() {
        let self = this;
        Ember.run.scheduleOnce('afterRender', () => {
            Ember.$(this.element).fullpage({
                anchors:['wild', 'humans', 'land', 'sea', 'surf'],
                fadingEffect: true,
                navigation: false,
                onLeave: function(index, nextIndex, direction) {

                }
            });
        });
    }

});

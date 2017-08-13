import Ember from 'ember';

export default Ember.Component.extend({

    didInsertElement() {
        let self = this;
        Ember.run.scheduleOnce('afterRender', () => {
            Ember.$(this.element).fullpage({
                fadingEffect: true,
                navigation: false,
                onLeave: function(index, nextIndex, direction) {

                }
            });
        });
    }

});

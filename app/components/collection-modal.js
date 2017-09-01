import Ember from 'ember';

export default Ember.Component.extend({
    show: false,

    actions: {
        toggleModal() {
          this.toggleProperty('show');
        }
    }
});

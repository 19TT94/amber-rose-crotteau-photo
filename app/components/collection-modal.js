import Ember from 'ember';

export default Ember.Component.extend({
    modal: false,

    actions: {
        toggleModal: function (element) {
            console.log("Toggle Modal");
            this.toggleProperty('modal');
        }
    }
});

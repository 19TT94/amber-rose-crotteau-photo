import Ember from 'ember';

export default Ember.Component.extend({
    isOpen: false,

    actions: {
       open: function (element) {
           this.set('isOpen', true);
           $('.fixed').css('display', 'none');
       },

       close: function (element) {
           this.set('isOpen', false);
           $('.fixed').css('display', 'block');
       }
    }
});

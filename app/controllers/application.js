import Ember from 'ember';

export default Ember.Controller.extend({
    api: Ember.inject.service(),

    model(params) {
        return this.get('api').getHome();
    }
});

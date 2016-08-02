import Ember from 'ember';

export default Ember.Route.extend({
    rmodel() {
    return this.store.findAll('rental');
  }
});

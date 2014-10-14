import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    someAction: function() {
      this.sendAction("anAction");
    }
  }
});
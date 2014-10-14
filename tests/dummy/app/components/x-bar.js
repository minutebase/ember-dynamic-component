import Ember from 'ember';

export default Ember.Component.extend({
  classNames: "x-bar",
  actions: {
    someAction: function() {
      this.sendAction("anAction");
    }
  }
});
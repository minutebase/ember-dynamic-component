import Ember from 'ember';

export default Ember.Component.extend({
  classNames: "x-baz",
  actions: {
    someAction: function() {
      this.sendAction("anAction");
    }
  }
});
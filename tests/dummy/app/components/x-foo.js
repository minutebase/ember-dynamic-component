import Ember from 'ember';

export default Ember.Component.extend({
  classNames: "x-foo",
  actions: {
    someAction: function() {
      this.sendAction("anAction");
    }
  }
});
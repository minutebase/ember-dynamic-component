import Ember from 'ember';

export default Ember.Controller.extend({
  type:         "x-foo",
  dynamicValue: "type something",
  actions: {
    changeType: function(type) {
      this.set("type", type);
    },
    componentAction: function() {
      alert("action triggered");
    }
  }
});
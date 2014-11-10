import Ember from 'ember';

var get      = Ember.get;
var observer = Ember.observer;
var on       = Ember.on;

export default Ember.ContainerView.extend(Ember._Metamorph, {
  type: null,

  _changeChild: on('init', function() {
    this.clear();
    this.pushObject(this.componentForType());
  }),

  changeChild: observer('type', function() {
    this._changeChild();
  }),

  componentForType: function() {
    var type = get(this, 'type');

    var container       = get(this, 'container');
    var componentLookup = container.lookup('component-lookup:main');
    var customComponent = componentLookup.lookupFactory(type, container);

    var options = get(this, "_dynamicOptions");
    var hash    = options.hash;
    var ignore  = ["templateData", "_dynamicOptions", "_context", "_parentView", "helperName", "container"];
    var props   = {};

    var prop, bindingTarget;
    for (prop in hash) {
      if (ignore.indexOf(prop) !== -1) { continue; }
      if (prop.match(/Binding$/)) {
        bindingTarget = prop.replace("Binding", '');
        props[prop]   = "_parentView."+bindingTarget;
      } else {
        props[prop] = hash[prop];
      }
    }

    return customComponent.create(props);
  }
});

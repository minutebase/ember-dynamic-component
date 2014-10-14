import Ember from 'ember';
import { DynamicComponentView } from 'ember-dynamic-component';

export default function(options) {
  Ember.assert("You can only pass attributes (such as name=value) not bare " +
                   "values to {{dynamic-component}} '", arguments.length < 2);

  // pass the options through to the resulting view
  // is there a valid type to use here?
  // this works but...
  options.hashTypes['_dynamicOptions'] = "OBJECT";
  options.hash['_dynamicOptions']      = options;

  return Ember.Handlebars.helpers.view.call(this, DynamicComponentView, options);
}

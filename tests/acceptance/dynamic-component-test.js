import Ember from 'ember';
import startApp from '../helpers/start-app';

var App;

module('Acceptance: DynamicComponent', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('displays the initial component', function() {
  visit('/');
  andThen(function() {
    ok(find(".x-foo").length);
  });
});

test('swaps the component when the type changes', function() {
  visit('/');
  click('.x-bar-button');
  andThen(function() {
    ok(find(".x-bar").length);
  });
});

test('displays bound values', function() {
  visit('/');
  fillIn("input[name=dynamic-value]", "some new text");
  andThen(function() {
    equal(find(".dynamic").text(), "some new text");
  });
});

test('displays static values', function() {
  visit('/');
  andThen(function() {
    equal(find(".static").text(), "static");
  });
});

test('bound values update with new component', function() {
  visit('/');

  click('.x-bar-button');
  fillIn("input[name=dynamic-value]", "some new text");
  andThen(function() {
    equal(find(".dynamic").text(), "some new text");
  });
});

test('static values display with new component', function() {
  visit('/');
  click('.x-bar-button');
  andThen(function() {
    equal(find(".static").text(), "static");
  });
});

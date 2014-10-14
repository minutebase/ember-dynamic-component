# Ember-dynamic-component

An Ember CLI addon to render a dynamic component.

## Note

This is a work in progress, it will be published to NPM shortly (once I've written some tests).

## Using

### Installation

Install this addon via npm:

```
npm install --save-dev ember-dynamic-component
```

### Usage

Give the `{{dynamic-component}}` helper a type with the name of the component to render, and as that property
changes then the correct component will be rendered:

```handlebars
{{dynamic-component type=theType}}
```

Any other properties and actions given to the helper will be passed through to the underlying component:

```handlebars
{{dynamic-component
  type=theType
  boundProperty=foo
  staticProperty="bar"
  onFoo="fooTriggered"
}}
```

This means the following:

```handlebars
{{#if showFoo}}
  {{x-foo onClick="thingClicked" value=something}}
{{/if}}
{{#if showBar}}
  {{x-bar onClick="thingClicked" value=something}}
{{/if}}
{{#if showBaz}}
  {{x-baz onClick="thingClicked" value=something}}
{{/if}}
```

... is essentially the same as:

```handlebars
{{dynamic-component type=type onClick="thingClicked" value=something}}
```

## Developing

### Installation

* `git clone` this repository
* `npm install`
* `bower install`

### Running

* `ember server`
* Visit your app at http://localhost:4200.

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).

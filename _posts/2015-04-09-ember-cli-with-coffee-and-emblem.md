---
layout: post
title: Ember-cli with Coffee and Emblem
tags:
- javascript
- coffeescript
- emberjs
---

First of all let's install `ember-cli`:

```sh
$ npm install -g ember-cli
```

Now we gonna generate ember app:

```sh
$ ember new HelloEmber
```

Change directory to our app:

```sh
$ cd HelloEmber
```

Lets install coffeescript support. We need to install `ember-cli-coffees6` packege. Due to some ES6 compatibilites.

```sh
$ ember install ember-cli-coffees6
```

And the emblem package:

```sh
$ ember install ember-cli-emblem-hbs-printer
```

And thats it. Now we're rewrite javascript files into coffee.

Replace `app/app.js` with `app/app.coffee`:

```coffee
import Ember from 'ember'
import Resolver from 'ember/resolver'
import loadInitializers from 'ember/load-initializers'
import config from './config/environment'

Ember.MODEL_FACTORY_INJECTIONS = true

App = Ember.Application.extend
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver: Resolver

loadInitializers(App, config.modulePrefix)

export default App
```

And `app/router.js` with `app/router.coffee`:

```coffee
import Ember from 'ember'
import config from './config/environment'

Router = Ember.Router.extend
  location: config.locationType

export default Router.map ->
```

It's time form emblem templates.

Replace `app/templates/application.hbs` with `app/templates/application.emblem`:

```slim
h2#title HelloEmber

== outlet
```

Now start application:

```sh
$ ember serve
```

Look at `http://localhost:4200/` and thats it. It works! Quick and easy.


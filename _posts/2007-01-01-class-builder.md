---
layout: post
title: Class Builder
date: '2007-01-01T19:22:00.000+01:00'
tags:
- javascript
---

Simple (yet) function that make pseudo class creation simple.

Example class:

```js
Class({
  clazz: {
    clazz: function( smth ){
      this.foobar = smth;
    },
    foobar: 'default',
    getFoobar: function(){
      return this.foobar;
    }
  }
})

foo = new clazz('123');
bar = new clazz();

alert( foo.getFoobar() );
alert( bar.getFoobar() );
```

Notice that constructor have same name as class name :)
You can download it <a href="http://fazibear.googlepages.com/classBuilder.zip">here</a>.

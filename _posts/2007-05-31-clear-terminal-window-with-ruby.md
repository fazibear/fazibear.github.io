---
layout: post
title: Clear Terminal Window with Ruby
date: '2007-05-31T01:20:00.001+02:00'

tags:
- ruby
- tips
---

Clean and simple :)
Works only on *nix systems

```ruby
CLEAR = `clear`
print CLEAR
```
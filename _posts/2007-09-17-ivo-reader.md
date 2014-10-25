---
layout: post
title: Ivo Reader
date: '2007-09-17T15:43:00.000+02:00'
author: FaziBear
tags:
- ruby
---

This is a ruby rewrite of ivonka.sh script. This simple script read data from standard input or command line parameters using <a href="http://say.expressivo.com/">say.expressivo.com</a> text to speech reader.

Features:

- english language (default)
- male and female polish voice
- romanian language
- files are player directly from internet
- mplayer as default player

Script can be downloaded from <a href="http://fazibear.googlepages.com/ivo.rb">here</a>.

Simple usage:

```
# ivo.rb "This is simple text"
# echo "simple text" | ivo.rb
# cat somefile.txt | ivo.rb
```

Configuration:

- DEFAULT_LANGUAGE - default language
- PLAYER - filename of mp3 player.
- SLEEP - time between http requests in seconds (something about 0.5s)
- SLEEP_ON_FAIL - time after failed http request (it should be something about 1s)
- MAX_TEXT_LENGTH - lenght that can be converted at one request (for now in 200)

To change reader language, pass a language symbol as parameter while creating ivo object.

```ruby
ivo = Ivo.new :PL #for polish
ivo = Ivo.new :PLM #for polish male voice
ivo = Ivo.new :PLF #for polish female voice
ivo = Ivo.new :RO #for romanian
```
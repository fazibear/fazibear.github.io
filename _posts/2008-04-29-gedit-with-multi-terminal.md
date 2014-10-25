---
layout: post
title: GEdit With Multi Terminal
date: '2008-04-29T15:46:00.008+02:00'

tags:
- gedit
- python
---

<a href="http://www.gnome.org/projects/gedit/">GEdit</a> is nice developer editor for <a href="http://www.gnome.org/">GNOME</a>. <a href="http://macromates.com/">Textmate</a> like snippets, file browser and embedded terminal. Last one is a nice feature, but default plugin gives you only one terminal. But wait, plugins are written in python. This is my third attempt to modify python code... It was not so bad, after few `print()`, `dir()`, and `id()` I can add and remove terminal windows within gedit :)

How to install ? Copy all files to `~/.gnome2/gedit/plugins`, disable terminal plugin, restart gedit and enable mterminal plugin.

How to use it ? To add new terminal right-click on terminal window and choose 'New Terminal'. If you want to remove it, right-click and choose 'Remove Terminal'.

<del>Plugin/Sources are located <a href="http://fazibear.googlepages.com/mterminal.tar.gz">here</a>.</del>

I hope you like it.

This plugin is now on <a href="http://github.com/fazibear/gedit-mterminal">github</a>.
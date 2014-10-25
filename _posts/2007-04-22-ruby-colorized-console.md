---
layout: post
title: Ruby Colorized Console
tags:
- ruby
- gem
---

I wrote a simple ruby string class extension to displays console colors easier using ANSI escape sequences.
Links for <a href="http://rubyforge.org/projects/colorize/">project page</a>, and <a href="http://colorize.rubyforge.org/">documentation page</a>.

Install:

`# gem install colorize`

Some examples:

```ruby
puts "This is blue".colorize( :blue )
puts "This is light blue".colorize( :light_blue )
puts "This is also blue".colorize( :color => :blue )
puts "This is blue with red background".colorize( :color => :light_blue, :background => :red )
puts "This is blue with red background".colorize( :light_blue ).colorize( :background => :red )
puts "This is blue text on red".blue.on_red
puts "This is red on blue".colorize( :red ).on_blue
puts "This is uncolorized".blue.on_red.uncolorize
```

This thing should work on Windows too, but its untested. So if you check it out, please give me some feedback.
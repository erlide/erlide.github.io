---
layout: post
title: "Architecture"
date: 2013-02-21 08:51
comments: true
categories: internals
author: Vlad
---

I've done recently a lot of changes to the plugin structure, which I
think could be called "architectural changes". The goal is to separate
the different concerns and make it easier to reason about them and
test them in isolation.<!--more-->

At the moment we have three kinds of plugins:

 * _libraries_: just wrappers for third-party libraries. These are:
   `libs`, `guava`
 * _core_: a stack of plugins that have no eclipse dependencies except
   those needed to make them work as plugins, declaring and using
   extension points. These are: `util`, `runtime` and `model`, plus
   the `kernel.*` ones.
 * _eclipse-based_: plugins that match those in core, but have
   eclipse-based APIs: `util_eclipse`, `backend`, `core`, `ui`
 
The `runtime`/`backend` plugins handle starting and connecting to
Erlang nodes, to be used either internally or to execute/debug the
user's code. 

The `model` is where all the interesting stuff happens. It keeps track
of the structure of projects and modules and will provide an API to
ask questions about it. At the moment it is implemented in both Java
and Erlang and this is what has caused many of our problems so far:
the impedance mismatch makes it easy for errors to sneak in. Our plan
is to evolve a one-language implementation with an independent
API. Ideally we would like to be able to use either Java only
(with Xtext) or Erlang only.

`core` will adapt the `model` API to use Eclipse concepts, like
resources. Together with `ui` it will also implement the Eclipse
hooks, commands and views necessary to make everything work. Ideally
this part will be quite language-independent.


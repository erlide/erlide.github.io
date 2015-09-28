---
layout: post
title: "erlide internals: What is a backend?"
tags: internals
author: Vlad
---

The term "backend" is used often in erlide, but it might be unclear what it really means.

What we call a backend is an Erlang runtime that we're connected to via an internal Java node. 
This connection requires some erlide code to be installed and running on the Erlang side.
<!-- more -->

There are two kinds of backends: _managed_ and _standalone_. Managed ones have their lifecycle 
controlled by erlide. Standalone ones use already started erlang nodes.

Inside erlide, backends are used for several purposes:

 * for the IDE internals: scanning, parsing, etc. This is always a managed backend.
 * for compiling code
 * for running and debugging the applications

There are several reasons for having them separated. One is to isolate functionality (especially 
in early erlide versions, it was easy to have the IDE hang for some crash in the builder, or the 
other way around). Another is that one might want to run the IDE on the latest and greatest 
Erlang version, but compile the project for some older version, while still testing it on all 
newer versions available.

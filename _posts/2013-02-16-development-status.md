---
layout: post
title: Development status  
author: Vlad
comments: true
date: 2013-02-16 22:16
---

I thought it would be nice to write a report on what has been going on and what we are doing at the moment.

Since quite a long time ago, we started being hampered in our progress by (basically) the fact that the code 
base has grown organically into a mess. This makes it hard to change without creating follow-up problems and 
it makes it hard/slow to test. So for some year ago I sketched a plan for how to address this.
<!-- more -->

One of the alternatives and the one we drove the last half of last year, is to start using Xtext, an Eclipse 
framework for developing language support ([xtext.org](http://xtext.org)). It was all nice and dandy, until 
we discovered that there were performance problems for large projects (which our main user base has). These 
problems we could not solve right away and we decided to wait and see how Xtext evolves.

We returned to the "old" codebase and started to implement the changes needed to make it easier to 
understand, less fragile and more testable. This is an ongoing process and it will be quite dramatic. If 
anyone is keeping track of the code, the most visible thing happening is that there are several new plugins. 
Code is getting moved from one plugin to another and we might even split up the wrangler, cover and trace 
features into their own repositories. This will mess up the git history a bit, but it is necessary. 

The vision is that when we are ready, we will have all the core functionality nicely packaged and independent 
of Eclipse, hopefully implemented completely in Erlang. There's a long way there, though.

Some highlights of the current state of affairs:

 * we have finally fixed some problems that have haunted us for a long time, where the Erlang backend would 
 crash. From version 0.19 you should see a much stabler application
 * we are soon going to set Eclipse 3.7 as the minimum supported base 
 * we have support for R16
 * in the nearest timeframe there won't be many new features, but we focus on fixing bugs and improving 
 stability and testability of the code base


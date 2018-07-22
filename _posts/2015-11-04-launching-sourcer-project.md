---
layout: post
title: "Launching Sourcer project"
date: 2015-11-04 15:00
comments: true
categories: announcements
author: Vlad
---

[Sourcer](https://github.com/erlide/sourcer) is an Erlang scanner+parser tailored for use in tools that handle source code (like IDEs and refactoring tools), keeping track of the exact source code in the files and allowing for incomplete and malformed code. It was originally developed as part of [erlide](https://erlide.org), but it is easier to handle and to get feedback if it is a separate project. As a matter of fact, I discovered many bugs, thinkos and other problems just by looking at the code as an independent entity.

*Note:* the current status is still very alpha. I hope to get feedback from any interested party and important changes will almost certainly happen to both implementation and API. 

### Rationale

The normal tools for processing source code are aiming to support the compiler and thus are lossy: information that is uninteresting to the compiler is dropped. When supporting editors, cross-referencing tools and other tools, we find ourselves needing to access all the information about the source code.

For example, if sections of a module are conditionally compiled and I am searching for all places where a certain function is called (maybe to rename it), I want to look even into the sections that are invisible to the regular parser because of the values of the currently defined macros. When looking at the resulting list of references, they could be annotated with the boolean macro expression deciding whether they are visible or not to the compiler.

Similarly, while I am editing a file, for example starting to enter a literal string in the middle of the file, I don't want the rest of the file to get scanned as part of that string until the ending quote is entered.

Having to keep an implementation of these tools parallel with the OTP ones is not easy, but the kind of functionality we are after can't be integrated into the OTP parser tools either, so we have no other option.

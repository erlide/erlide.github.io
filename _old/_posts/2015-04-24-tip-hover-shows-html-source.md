---
layout: post
title: "Tip: Hover information shows HTML source?"
date: 2015-04-24 10:48
comments: true
categories: 
author: Vlad
---

Eclipse uses an embedded browser control to display nicely formatted documentation and hover information. Apparently Ubuntu 14.04.x comes with libwebkitgtk-3.0.0 pre-installed and this is NOT compatible with SWT.

```sudo apt-get install libwebkitgtk-1.0-0``` is required.

Also, make sure that the browser is enabled in the preferences.

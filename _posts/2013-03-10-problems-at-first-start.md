---
layout: post
title: "Problems at first start"
date: 2013-03-10 14:32
comments: true
categories: 
---

Erlide requires a functioning Erlang runtime, or it crashes and/or hangs the whole Eclipse. 
This can happen when starting for the first time in a workspace and we're working to fix it. 

Sometimes you can't even get to the dialog where the runtimes are configured... The good news is 
that there is a workaround: in your `eclipse.ini` file (in the Eclipse directory), add the following 
line at the end:

    -Derlide.runtime=/path/to/your/erlang/installation/directory

<!--more-->

Note that the top Erlang directory should be referenced (`$ERL_TOP`). This is not needed if your Erlang installation is in a "standard" place, like

*  c:\program files
*  c:\program files (x86)
*  /usr
*  /usr/lib
*  /usr/lib64
*  /usr/local
*  /usr/local/lib
*  /Library/Frameworks/erlang/Versions


---
layout: post
title: "Towards erlide 2.0: it's not only about code"
tags: erlang   
author: Vlad
---

Writing code is of course an important part of the development process. In other languages, it is one of 
the two pillars, the other one being debugging the code. Erlang, however, is different: _an Erlang system 
is __alive___, and thus it's just as important to be able to architect and monitor it.
<!-- more -->

Of course these activities could be placed under the two other categories, but I dare to claim that they 
are sufficiently different from "normal" coding and "normal" debugging that they can stand on their own.

"What's the fuss about? We have that already!" I hear someone mutter there in the back. Um, yes, but 
there's always room for improvement. There are no tools to help with the architecture of the system 
and there are almost none to watch it running. Here are some examples:
 
 * visualize and edit the supervisor structure as well as the links and monitors between processes. With 
 a graphical tool, I mean something like right click and add a child, drag and drop from it to create a 
 link to another process, mark the process as trapping exits, and so on. This would of course get saved 
 into the appropriate code modules. 
 * freeze execution of all application processes and inspect them without fearing that timeouts will kill 
 them
 * "sandboxes" for processes, allowing all to be killed and the application restarted without affecting 
 unrelated processes
 * trace messages live, at full or reduced speed or step-by-step. This could also be done offline, from 
 the logs, but then the processes' data can't be accessed.

Some of these features require extensive support from the VM, so it becomes a matter of how useful these 
tools will prove themselves at paying customer's site. Which is difficult to find out before having a tool 
to test, but I am hopeful that there will be a way out of the deadlock (maybe we can build a good enough 
tool without VM support to use as demo).

I will explore this path further, I think we can get more developer productivity gains from this kind of 
tooling than from the usual coding and debugging support.

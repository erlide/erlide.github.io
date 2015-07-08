---
layout: documentation
---

## Prerequisites

* Subscribe to the erlide-devel mailing list. This way all questions and answers are searchable by future contributors. You can subscribe at [http://lists.sourceforge.net/lists/listinfo/erlide-devel](http://lists.sourceforge.net/lists/listinfo/erlide-devel). The list is not very active currently, because we're just two people and it's faster to chat or email directly. When there will be more active people, we will start using the list, of course. Send a "hello" message so that we know you're there :-)
* The issue manager is at https://www.assembla.com/spaces/erlide/tickets.
* It would be highly recommended to have some background with Java and Eclipse development, the learning curve can be quite steep. You probably won't start by implementing a new plug-in from scratch, but it helps to know how things are working and where to look. Some suggestions for tutorials/documentation/books:
  * the eclipse documentation, of course
  * http://www.vogella.com/articles/EclipsePlugIn/article.html
  * http://www.amazon.com/Eclipse-Plug-ins-Edition-Eric-Clayberg/dp/0321553462

## Tools

* Download and install Eclipse 3.7, which will serve as a target for development. 
* You can use Eclipse 3.7 for development too, but the newer Java tools are much better. I always the latest Eclipse for developing.
* The debugger support code has different projects for R15, R16 and v17, due to changes to the compiler and/or runtime. You need all these versions installed if you make changes to the debugger.
* In your development Eclipse, install a Java 1.6 JDK and the _EGit_, _Erlide_ and _Xtend_ plugins.
* Other recommended plugins: AnyEdit.
* A note about using more recent versions of Java/Eclipse/Erlang: they should work, but if the target is not 1.6/3.7/R15B, then you might use things that are not available in the base configuration or have changed since and then there will be errors (at compile-time or run-time).

## Setup

* Start Eclipse and 
  * configure the Plugin development environment by setting the target environment to the 3.6 installation 
  * configure Erlide with a runtime (have a R14 one, but it doesn't need to be the default one)
  * restart
* In your Eclipse workspace, import all projects from the erlide repository, even the optional ones (wrangler, cover, tracing). This will let you know if you happen to change something that affects them.
* Close the wrangler.refactoring.codeinspection plugin, it only compiles on the build server. (Alternatively, leave it open and live with a couple of compilation errors).
* Configure some settings by importing the preferences from `meta/config`, this will help to keep a consistent view of the code. 

* The projects should build without errors.

* The "Run" button's (green with white arrow) popdown menu should contain a few entries: some junit_* ones that run the unit tests for the respective project and "Erlide_tests" that launches a new Eclipse instance that uses the local erlide code (including any changes you made). You can import in there all projects from `org.erlide.ui.tests/projects`
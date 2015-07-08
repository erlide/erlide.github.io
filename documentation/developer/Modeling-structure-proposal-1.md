---
layout: documentation
---

One of the things we will try to improve next is the way the code
structure is represented in erlide. I have some starting points, but
it's not clear how it is best to do it.

In a perfect world, an erlide project should correspond directly to an
Erlang application. In practice we have to handle badly structured or
unstructured projects where source files can be found almost anywhere...
We also support (or will support in the future) tools (aka services)
that have their own ideas about where the code is placed and how it
should be handled.

For this reason, I would like to have a flexible setup where services
can be plugged-in and they provide information about how they see the
world, because each one will have specific needs and we can't anticipate
all of them. This means that there should be a way for services to
declare what kind of information they need as input; and a way for
providers to connect to that input and add their specific data. In the
Eclipse world, plug-ins do something similar and they use "extension
points". I will use that name, but it doesn't necessarily mean that the
implementation will use Eclipse's way.

bq. For example, let's look at the builder: it needs to know which erl
files to compile and with which options (among other, where to put the
beam file). The builder then registers an extension point called, let's
say, "build_path" where a client can define a list of erl files and a
list of options to use when compiling them. There can be many kinds of
clients. A basic one is a 'directory provider' that exposes all erl
files in a given directory. A more elaborate one will look recursively
in a directory and choose all erl files inside subdirectories called
'test'. Yet another one finds any yrl files, generates the corresponding
erl files in some temporary location and provides these to the compiler.

It may seem complicated, but the builder will only have to retrieve a
list of all build_path providers, ask them for the erl files and their
compile options, and then call the compiler on them. Very
straightforward. The alternative is that the bulder has to know about
each special case and adding a new provider requires changes to the
builder too.

Likewise, the providers have a standard way of exposing their specifics
instead of having each their own API. They register only with the
tools/services that they care about and get activated by means of
callbacks.

This is all fine, but it is quite a big job to implement it and in the
meanwhile things will be broken. I think that it is better if we first
specify this in some kind of pseudo-code (or better, as executable
specs/tests) before getting to the code. We can then find out if it
really works without having to waddle through implementation details. We
should begin with the services and providers that we have today and see
what the result looks like.

[Specification of services and providers]({{ site.baseurl }}/documentation/Specification-of-services-and-providers)


---
layout: documentation
---

* [I can't write comments or strings in Chinese (or other non-latin language)](FAQ#faq1)
* [Erlide won't start!](FAQ#faq2)

## I can't write comments or strings in Chinese (or other non-latin language)! <a name="faq1"/>

This has been fixed for R1603+. We use the right default encoding according to the runtima and we detect the `coding` comments at the top of a file and use the right encoding for it. There might be issues if you have multiple projects in the workspace targeting different Erlang versions, use `coding` to fix them.

[Top](FAQ)

## Erlide won't start! <a name="faq2"/>

Checklist:

* Did you configure it properly? See [Configuration]({{ site.baseurl }}/documentation/Configuration)
* Is your local host name configured properly in /etc/hosts (or c:\Windows\System32\drivers\etc\hosts)?
* Have you checked the cookie settings (see [here](Concepts#cookies))?

[Top](FAQ)


Metroly-UI
==========

A basic mobile ui framework.

Usage Docs
----------

Headers
-------

* `.header-main` - will span 100% of the window width, position is absolute.
* `.header` - will span 100% of the parent container.

12 Column Grid System
---------------------

* `.span-N` - where N is from 1 to 12.

Fixes
-----

Similar to bootstrap, when using absolute positioning like `.header-main`, the first row after the header should be applied a margin-top fix, use `.top-fix`.

```html
  <header class='header-main'>
    <h1>Metroly</h1>
  </header>
  <div class='row top-fix'>
    <p>I'm good now!</p>
  </div>
```

The same applies to fixed footers, use `bottom-fix`.

```html
  <div class='row bottom-fix'>
    <p>I'm good now!</p>
  </div>
  <footer class='footer-fixed'>
    <h1>Metroly</h1>
  </footer>

```

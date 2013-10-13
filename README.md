Metroly-UI
==========

A basic mobile ui framework.

Usage Docs
----------

Headers
-------

* `.header-main` - will span 100% of the window width, position is absolute.
* `.header` - will span 100% of the parent container.

Footers
-------

* `.footer-fixed` - will span 100% of the window width, position is fixed to the bottom.
* `.footer` - will span 100% of the parent container.

Navbar
------

Use data attributes in your html to wire up a toggle button to a nav menu. Pair the value of the `data-target-nav` attribute with the `id` of the nav menu. Use `.nav-items` to hide the nav menu by default.

```html

  <button class='nav-toggle' data-target-nav='#menu'>Menu</button>
  <nav id="menu" class='nav-items'>
    <ul>
      <li><a href="#item1">Item 1</a></li>
      <li><a href="#item2">Item 2</a></li>
      <li><a href="#item3">Item 3</a></li>
    </ul>
  </nav>

```


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
    <p>Metroly &copy; 2013.</p>
  </footer>

```

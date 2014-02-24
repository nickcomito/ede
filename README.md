ede
===

*"ede" is a library of css-based form/input components that aim to make data entry enjoyable*

Out of the box ede gives you css styles (and minimal js) that aim to provide clarity and simplicity to form interfaces.

Benefits
--------
* Easy to use
* Easy to override
* Percentage-based structure
* Component-based Design


Minimal HTML
------------

The core of ede rests on a couple of divs and classes: the component section, the input container, and label/input types (short, medium, long)

```
<div class="component-section">
  <div class="input-component label-sm input-med">
    <label>Short Label</label>
    <div class="input-box">
      <input type="text" />
    </div>
  </div>
</div>
```

Requirements
------------
* jQuery v2.0 (for tooltips and expand/collapse)
* SASS recommended


Tested Browsers
---------------
* Google Chrome v32
* Firefox v27
* Internet Explorer v9,v10,v11
* Safari v6
* Opera v12


Coming Soon
-----------

* Mobile Styles
* Skins
* Bootstrap Integration
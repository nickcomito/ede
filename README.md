ede
===

E.D.E. is a form library that aims to make data entry enjoyable


An example of the necessary HTML
<!-- Short Label Medium Input -->
<div class="input-component label-sm input-med">
  <label>Short Label</label>
  <div class="input-box">
    <input type="text" />
  </div>
  <div class="description">
    <p>This is some description text. It'll be desaturated but italicized to draw emphasis in a subtle way.</p>
  </div>
</div>


An example of a nested component
<div class="input-component label-sm input-med">
  <label>Short Label</label>

  <div class="input-box">
    <input type="text" />
  </div>
  <div class="description">
    <p>This is some description text. It'll be desaturated but italicized to draw emphasis in a subtle way.</p>
  </div>

  <!-- Long Label Long Input (Nested) -->
  <div class="input-component label-long input-long">
    <label>Long Label</label>

    <div class="input-box">
      <input type="text" />
    </div>
  </div>
</div>
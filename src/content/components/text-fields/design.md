**Text Fields** allow users to input, edit, and select text.

## Usage
<div data-insert-component="ImageGrid">
  <div class="mb-16">
    Text fields typically reside in forms but can appear in other places, like dialog boxes and search.
  </div>
  <div class="img-block">
    ![Text Field Usage](images/textfield-usage.svg)
  </div>
</div>

## Atom & Specs
<p class="pb-16"><b>Label</b></p>
<div data-insert-component="ImageGrid">
  <div class="mb-16">
    Text field labels display the type of input a field requires. Every text field should have a label. Label floating above the input line.
  </div>
  <div class="img-block">
    ![Text Field Spec 1](images/textfield-spec-1.svg)
  </div>
  <div class="img-block">
    ![Text Field Spec 2](images/textfield-spec-2.svg)
  </div>
</div>

<p class="pb-16"><b>Placeholder (Hint text)</b></p>
<div data-insert-component="ImageGrid">
  <div class="mb-16">
    Placeholder text rests in the input field until the user starts entering text. It may contain an action or an example, such as a phone number or email address.
  </div>
  <div class="img-block">
    ![Text Field Spec 3](images/textfield-spec-3.svg)
  </div>
  <div class="img-block">
    ![Text Field Spec 4](images/textfield-spec-4.svg)
  </div>
</div>

<p class="pb-16"><b>Helper</b></p>
<div data-insert-component="ImageGrid">
  <div class="mb-16">
    Helper text gives context about a field’s input, such as how the input will be used. It should be visible either persistently or only on focus.
  </div>
  <div class="img-block">
    ![Text Field Spec 5](images/textfield-spec-5.svg)
  </div>
  <div class="img-block">
  </div>
</div>

<p class="pb-16"><b>Cursor</b></p>
<div data-insert-component="ImageGrid">
  <div class="mb-16">
    The cursor indicates the user’s current input position.
  </div>
  <div class="img-block">
    ![Text Field Spec 6](images/textfield-spec-6.svg)
  </div>
  <div class="img-block">
  </div>
</div>

<p class="pb-16"><b>Icon</b></p>
<div data-insert-component="ImageGrid">
  <div class="mb-16">
    Icon help to describe the required text field. They are displayed on the right of the text field. 
    <br /><br />
    Icon can also be touchable in order to reveal the purpose of itself, such as drop down icon to reveal a choice of menus.
  </div>
  <div class="img-block">
    ![Text Field Spec 7](images/textfield-spec-7.svg)
  </div>
  <div class="img-block">
    ![Text Field Spec 8](images/textfield-spec-8.svg)
  </div>
</div>

<p class="pb-16"><b>Character or word counter</b></p>
<div data-insert-component="ImageGrid">
  <div class="mb-16">
    Use character or word counters where there is a character or word limit. Specs:
    <ul class="mt-8">
      <li>Right justified</li>
      <li>Displayed as a ratio of characters used and the character limit (formatted as: characters used / character limit</li>
    </ul>
  </div>
  <div class="img-block">
    ![Text Field Spec 9](images/textfield-spec-9.svg)
    <br /><br />
    ![Text Field Spec 10](images/textfield-spec-10.svg)
  </div>
  <div class="img-block">
    ![Text Field Spec 11](images/textfield-spec-11.svg)
  </div>
</div>

## State

<p class="pb-16"><b>Enabled</b></p>
<div data-insert-component="ImageGrid">
  <div class="mb-16">
    Enabled text fields are the state where user can input any given text fields. Empty by default or covered with placeholder that will replace with user’s input.
  </div>
  <div class="img-block">
    ![Text Field State 1](images/textfield-state-1.svg)
  </div>
</div>

<p class="pb-16"><b>Disabled</b></p>
<div data-insert-component="ImageGrid">
  <div class="mb-16">
    Disabled text fields are the state where user can not fill up due to some constraint coming from any possibilities. They have stripped input line and less opacity that thet appear less tapable.
  </div>
  <div class="img-block">
    ![Text Field State 2](images/textfield-state-2.svg)
  </div>
</div>

<p class="pb-16"><b>Focus</b></p>
<div data-insert-component="ImageGrid">
  <div class="mb-16">
  Focus text fields
  <br /><br />
  As the user types into the text field, input text replaces any placeholder text. Autocompleted text is displayed to the right of the cursor, using the same font size and color as placeholder text.
  </div>
  <div class="img-block">
    ![Text Field State 3](images/textfield-state-3.svg)
  </div>
</div>

<p class="pb-16"><b>Error Message</b></p>
<div data-insert-component="ImageGrid">
  <div class="mb-16">
  When input isn’t accepted, text fields can display an error message below the input line, with instructions on how to fix the error. Until the error is fixed, the error replaces the helper text. An error message should appear on a single line, if possible.
  </div>
  <div class="img-block">
    ![Text Field State 4](images/textfield-state-4.svg)
  </div>
</div>

## General guidelines

Buttons are used primarily on action items. Some examples include **Add**, **Save**, **Delete**, **Sign up**. Do not use Buttons as navigational elements. Instead, use [Links](/components/link) because it takes the user to a new page and is not associated with an action. Each page may have one to two primary buttons. Any remaining calls-to-action are represented as secondary buttons.

## Usage

| Button type      | Purpose                                                                                                                                                                                                                                                                                                                                                                                  |
|------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Primary          | For the principle call to action on the page.                                                                                                                                                                                                                                                                                                                                            |
| Secondary        | For secondary actions on each page.                                                                                                                                                                                                                                                                                                                                                      |
| Button with icon | When words are not enough, icons can be used in buttons to better communicate what the button does. Icons are always paired with text.                                                                                                                                                                                                                                                   |
| Disabled button  | Use when the user cannot proceed until an input is collected.                                                                                                                                                                                                                                                                                                                            |
| Set of Buttons   | When an action required by the user has more than one option, always use a a negative action button (secondary) paired with a positive action button (primary) in that order. Negative action buttons will be on the left. Positive action buttons should be on the right. When these two types of buttons are paired in the correct order, they will automatically space themselves apart. |
| Small Button     | Use when there is not enough vertical space for a regular sized button.                                                                                                                                                                                                                                                                                                                  |   
| Ghost Button     | When an action does not require primary dominance on the page.  |        

## Labels

Button labels tell users what will happen when they click the button. Use verbs that describe the action, such as **Add** or **Delete**. Use sentence-style capitalization (only the first word in a phrase and any proper nouns capitalized) and no more than three words for button labels.

For Sets of Buttons, use specific labels, such as **Save** or **Discard**, instead of using **OK** and **Cancel**. This is particularly helpful when the user is confirming an action.

For consistency, see [labels and idioms](/guidelines/content/glossary) for the approved list of action labels.

## Icon usage

* Use glyphs (16px) within buttons.
* Glyphs are distinguished by their solid shape and knocked-out details.
* Glyphs should always appear to the right of the text.
* Glyphs used in buttons must be directly related to the action that the user is taking.
* Glyphs must be the same color value as the text within a button.
* Ghost buttons require a glyph icon (cannot be stand alone text because of poor affordance).

---
***
> 
![button with glyph](images/button-usage-1.png)
_Glyph usage in Button_


## Color

| ATTRIBUTE            | SCSS                   | HEX                    |
|------------------|------------------------|------------------------|
| Normal           | $brand-01              | #3d70b2                |
| Primary:hover    | $brand-02              | #5596e6               |
| Secondary:hover  | $brand-01              | #3d70b2                |
| Disabled         | $brand-01              | #3d70b2 at 50% opacity |


<div data-insert-component="ImageGrid">
  <div>
    ![Example of a normal Primary Button](images/button-style-1.png)
  </div>
  <div>
    ![Example of a Primary Button on hover](images/button-style-2.png)
  </div>
  <div>
    ![Example of a disabled Primary Button](images/button-style-3.png)
  </div>
  <div>
    ![Example of a normal Secondary Button](images/button-style-4.png)
  </div>
  <div>
    ![Example of a Secondary Button on hover](images/button-style-5.png)
  </div>
  <div>
    ![Example of a disabled Secondary Button](images/button-style-6.png)
  </div>
  <div>
    ![Example of a normal Ghost Button](images/button-style-15.png)
  </div>
  <div>
    ![Example of a Ghost Button on hover](images/button-style-16.png)
  </div>
  <div>
    ![Example of a disabled Ghost Button](images/button-style-17.png)
  </div>
</div>
_Primary, Secondary, and Ghost Button state examples_



## Typography

Button text should be set in sentence case, with only the first word in a phrase and any proper nouns capitalized.

| PROPERTY  | FONT-SIZE (px/rem)     | FONT-WEIGHT  |
|-------------|------------------|--------------|
| Button text | 14 / 0.875 | Bold / 700   |

## Structure

| HEIGHT          | PX | REM |
|-----------------|----|-----|
| Regular buttons | 40 | 2.5 |
| Small buttons   | 32 | 2   |

<div data-insert-component="ImageGrid">
  <div>
    ![Structure for a Primary Button](images/button-style-7.png)
  </div>
  <div>
    ![Structure for a small Primary Button](images/button-style-8.png)
  </div>
</div>
_Stucture measurements for small and regular Primary Button | px / rem_

### Spacing

A Button cannot have any element or text within 16 pixels / 1 rem of its borders. For Button groups, the primary button is positioned on the outside of the set, while the secondary button is positioned inside. For a Button with a glyph, the space between the button label and the glyph must be greater than or equal to 16 pixels / 1 rem. This is to accommodate for instances where two or more buttons with glyphs appear together.

| SPACING                 | PX | REM   |
|-------------------------|----|-------|
| External: regular button| 16 | 1     |
| Internal: regular button| 16 | 1     |
| Internal: small button  | 10 | 0.625 |
| Button pairings         | 16 | 1     |
| Text & glyph            | 16 | 1     |
| Ghost Button: text & glyph    | 8  | 0.5   |

<div data-insert-component="ImageGrid">
  <div>
    ![Spacing for Primary Button](images/button-style-9.png)
  </div>
  <div>
    ![Spacing for small Primary Button](images/button-style-10.png)
  </div>
  <div>
    ![External Button spacing](images/button-style-11.png)
  </div>
  <div>
    ![Internal spacing for a Button with glyph](images/button-style-12.png)
  </div>
  <div>
  ![Ghost button spacing](images/button-style-13.png)
  </div>
  <div>
  ![Small Ghost button spacing](images/button-style-14.png)
  </div>
</div>
_Spacing measurements for various Button types | px / rem_

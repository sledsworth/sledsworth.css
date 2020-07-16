---
layout: layouts/base.njk
title: Style Guide
---

# Style Guide

This page is a way for me to quickly make sure I didn't make any visual oopsies.

<ul class="colors"></ul>

## Heading 2

This is a paragraph. It ought to be longer to be consider such. So that is what this is all about. Making more text. Easy as that. Of course, most paragraphs don't have such short sentences, so that explains the run on here. Think that's enough?

This is a paragraph. _It ought to be longer_ to be consider such. So that is what this is all about. **Making more text.** Easy as that. Of course, most paragraphs don't have such short sentences, so that explains the run on here. Think that's enough?

This is a paragraph. It ought to be longer to be consider such. So that is what this is all about. Making more text. Easy as that. Of course, most paragraphs don't have such short sentences, so that explains the run on here. Think that's enough?

```swift
class Thing: ParentClass, Protocol {
  private _thing: Integer;
  var prop {
  get {
    return _thing
  }
  set {
    _thing = newValue
  }}
}
```

### Heading 3

This is a paragraph. It ought to be longer to be consider such. So that is what this is all about. Making more text. Easy as that. Of course, most paragraphs don't have such short sentences, so that explains the run on here. Think that's enough?

```css
*,
*::before,
*::after {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

body {
  margin: 0;
  min-height: 100vh;
  scroll-behavior: smooth;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
}

.class-name {
  margin: 0 2rem 3rem;
}
```

#### Heading 4

This is a paragraph. It ought to be longer to be consider such. So that is what this is all about. Making more text. Easy as that. Of course, most paragraphs don't have such short sentences, so that explains the run on here. Think that's enough?

```js
this.javascript();
const looks = {
  okay: true,
  ugly: false,
  string: "Hello World",
};
```

##### Heading 5

This is a paragraph. It ought to be longer to be consider such. So that is what this is all about. Making more text. Easy as that. Of course, most paragraphs don't have such short sentences, so that explains the run on here. Think that's enough?

Blockquote incoming:

> This is a paragraph. It ought to be longer to be consider such. So that is what this is all about. Making more text. Easy as that. Of course, most paragraphs don't have such short sentences, so that explains the run on here. Think that's enough?

Some `inline coding` for good measure. This is a paragraph. It ought to be longer to be consider such. So that is what this is all about. Making more text. Easy as that. Of course, most paragraphs don't have such short sentences, so that explains the run on here. Think that's enough?

![Handsome portrait of Steve and his lovely wife Sam](https://f001.backblazeb2.com/file/empatheticbot/sam-and-i.png)

###### Heading 6

This is a paragraph. It ought to be longer to be consider such. So that is what this is all about. Making more text. Easy as that. Of course, most paragraphs don't have such short sentences, so that explains the run on here. Think that's enough?

- Halo: Combat Evolved
- Zelda: Windwaker
- Mario Kart DS
- Ori and the Blind Forest
- Zelda: Breathe of the Wild

1. Halo: Combat Evolved
2. Zelda: Windwaker
3. Mario Kart DS
4. Ori and the Blind Forest
5. Zelda: Breathe of the Wild

<style>
.colors {
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  list-style: none;
}

.colors li::before {
  content: none;
}

.color {
  border-radius: 2px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
  padding: 0.5rem;
  transition: box-shadow 0.15s;
}

.color:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.color__swatch {
  background-color: var(--color);
  border-radius: 2px 2px 0 0;
  display: block;
  height: 11rem;
}

.color__details {
  font-size: 1.375rem;
  padding: 0.5rem;
  text-align: right;
}

.color input {
  border: 0;
  display: block;
  font-family: monospace;
  font-size: inherit;
  margin: 0;
  padding: 0.2rem;
  text-align: right;
  width: 100%;
}
</style>
<script>
/*
 Check if the stylesheet is internal or hosted on the current domain.
 If it isn't, attempting to access sheet.cssRules will throw a cross origin error.
 See https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleSheet#Notes

 NOTE: One problem this could raise is hosting stylesheets on a CDN with a
 different domain. Those would be cross origin, so you can't access them.
*/
const isSameDomain = (styleSheet) => {
  // Internal style blocks won't have an href value
  if (!styleSheet.href) {
    return true;
  }

  return styleSheet.href.indexOf(window.location.origin) === 0;
};

/*
 Determine if the given rule is a CSSStyleRule
 See: https://developer.mozilla.org/en-US/docs/Web/API/CSSRule#Type_constants
*/
const isStyleRule = (rule) => rule.type === 1;

/**
 * Get all custom properties on a page
 * @return array<array[string, string]>
 * ex; [["--color-accent", "#b9f500"], ["--color-text", "#252525"], ...]
 */
const getCSSCustomPropIndex = () =>
  // styleSheets is array-like, so we convert it to an array.
  // Filter out any stylesheets not on this domain
  [...document.styleSheets].filter(isSameDomain).reduce(
    (finalArr, sheet) =>
      finalArr.concat(
        // cssRules is array-like, so we convert it to an array
        [...sheet.cssRules].filter(isStyleRule).reduce((propValArr, rule) => {
          const props = [...rule.style]
            .map((propName) => [
              propName.trim(),
              rule.style.getPropertyValue(propName).trim()
            ])
            // Discard any props that don't start with "--". Custom props are required to.
            .filter(([propName]) => propName.indexOf("--") === 0);

          return [...propValArr, ...props];
        }, [])
      ),
    []
  );

const cssCustomPropIndex = getCSSCustomPropIndex();

// Add the swatches to the DOM
document.querySelector(".colors").innerHTML = cssCustomPropIndex.reduce(
  (str, [prop, val]) => `${str}<li class="color">
    <b class="color__swatch" style="--color: ${val}"></b>
    <div class="color__details">
      <input value="${prop}" readonly />
      <input value="${val}" readonly />
    </div>
   </li>`,
  ""
);


</script>

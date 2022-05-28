# ThemeToggler

![npm (scoped)](https://img.shields.io/npm/v/@galpop/themetoggler) ![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/gwendolinerodriguez/themetoggler)

![Dark Mode](/img/darkMode.png)
![Light Mode](/img/lightMode.png)

![Showcase](/img/toggler-showcase.gif)

A Web component, accessible theme toggler adapting dynamically to prefers-color-scheme media query, so to the user settings of dark mode enabled or not. It's a vanilla javascript web component, hence can be intalled on an Angular, React or Vue app.

Example here : <https://polyhedra-viewer.netlify.app/>

## Install

```bash
npm i @galpop/themetoggler
```

## Usage

This component is largely based on this [wonderful article](https://web.dev/prefers-color-scheme/) that lead to its own [dark mode toggler](https://github.com/GoogleChromeLabs/dark-mode-toggle) webcomponent.
Therefore, this assumes that you have your dark and light mode styles into different css files.

```html
<link rel="stylesheet" href="/dark.css" media="(prefers-color-scheme: dark)" />
<link
  rel="stylesheet"
  href="/light.css"
  media="(prefers-color-scheme: light)"
/>
<!-- The main stylesheet -->
<link rel="stylesheet" href="/style.css" />
```

Then add the component this way in your html, lightFocusColor and darkFocusColor being optional.

```javascript
<script type="module" src="../node_modules/@galpop/themetoggler/src/themetoggler.module.js"></script>
...
<theme-toggler lightFocusColor="#5859ff" darkFocusColor="#42c996"></theme-toggler>
```

## Features

- focusable with the keyboard
- reacts dynamically to the user setting defining dark/light mode

## Resources

This code is based on two main resources :

- <https://www.w3schools.com/howto/howto_css_switch.asp>
- <https://web.dev/prefers-color-scheme/>

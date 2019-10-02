# ionic-vue-shadow-styles-bug

This repo isolates an issue with `@ionic/vue` (Firefox and Safari only) where component styles get wiped out by nested ionic component styles.

```
git clone https://github.com/DesignByOnyx/ionic-vue-shadow-styles-bug.git
cd ionic-vue-shadow-styles-bug
yarn
yarn serve
```

## The problem

**Chrome:**
![chrome](./screenshots/chrome.png)

**Firefox/Safari:**
![firefox](./screenshots/firefox.png)

We are building a component library with Stencil and we are using Ionic components within this component library. When we integrate our components into an Ionic/Vue app, the styles for our custom components will get wiped out by ionic component styles (in the screenshots above, the ion-list is the culprit). The issue arises from a combination of `@ionic/vue` and use of an ionic component inside a shadow DOM. To reproduce the issue, do the following:

- create a stencil component which uses `shadow: true` and custom styles
- use an ionic component somewhere within the render function
  - note: the issue only happens with ionic components which use `shadow: false` (eg. ion-list)
- integrate the component into a Vue app which uses `@ionic/vue`

### The problem goes away if either:

- you comment out `Vue.use(Ionic)`
- or, you don't use an ionic component in your component render function

**Note:** This problem only occurs when an ionic component is used. We tested with other custom components (not ionic) and everything worked as expected.

**Note 2:** We were able to produce the same error with `@ionic/react` - simply importing `IonList` from `@ionic/react` caused the same exact result. If you want an example project, we can put one together.

## About this project

- This is a vanilla vue app (typescript) created with `vue create`
- The ui-components folder is a vanilla stencil project created with `npm init stencil`
  - `@ionic/core` was added as a dependency
  - there is 1 component and no other customizations
- All unnecessary files, components, utils, et al were removed to eliminate distractions
- `@ionic/vue@^0.0.9` was added as a dependency and configured in `src/main.ts`
- ui-components were added to the Vue app and configured per the [stencil integration docs](https://stenciljs.com/docs/vue)

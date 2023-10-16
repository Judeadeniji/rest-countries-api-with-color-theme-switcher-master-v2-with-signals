# Frontend Mentor - REST Countries API with color theme switcher solution

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode.

### Screenshot

![](./design/desktop-preview.jpg)
![](./design/desktop-design-detail-dark.jpg)

### Links

- Live Site URL: [View Here](https://apex-toyan-countries.vercel.app)

## My process

### Built with

- [Tailwind](https://tailwindcss.com/)
- [React](https://reactjs.org/) - A JavaScript library for building interfaces
- [RC Extended](https://github.com/Judeadeniji/RC-Extended) - A JavaScript library that provides enhanced hook and components for working with React.

### what I learned

I learnt how to use [RC-Extended](https://github.com/Judeadeniji/RC-Extended) to do control flows in style with the elegant `Switch` & `Match` components.

```javascript
  <Switch fallback={<CountryList countries={countries} />}>
    <Match when={loading}>
      <Spinner />
    </Match>
    <Match when={error}>
      <Error />
    </Match>
  </Switch>
```

I also learned how to create a global store using the `defineStore()` function and how to use signals for atomic state management.

```javascript
const useStore = defineStore("store-name", {
  state() {
    return {
      /* return state object */
    },
  }
  actions: {
    someAction() {
      /* do something*/
    }
  },
  computed {
    someDerviedValue() {
      /* do something*/
    }
    //...
  },
})
```

Overall I rebuilt this project to know RC-Extended better, it's strength and weakness and how i can further improve it.

## Author

- Website - [TheLazyDev](https://www.the-lazy-dev.vercel.com)
- Twitter (Me) - [@feranmiwebdev](https://www.twitter.com/feranmiwebdev)
- Twitter (Toyan) - [@__Annonnymouss__](https://www.twitter.com/_Annonnymouss_)

## Acknowledgments

Special thanks to [Toyan](https://github.com/Olatoyan) for building the first version of this amazing project, which laid the foundation for this one. This project is meant to showcase how powerful and simple [RC Extended](https://github.com/Judeadeniji/RC-Extended) can be when working on React projects.
# Portfolio template website

## Table of contents

- [Overview](#overview)
  - [The App](#the-app)
  - [What it looks like](#what-it-looks-like)
  - [How to run the app ?](#how-to-run-the-app)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)

## Overview

### The App

This website is a template portfolio website with a minimalist design. It is available on desktop/laptop, tablet and mobile devices.

Check it out here : https://dlndev_minimalistportfolio.surge.sh/

### What it looks like

Desktop hompepage overview :

![](./src/assets/screenshots/desktop-homepage-1.png)
![](./src/assets/screenshots/desktop-homepage-2.png)

Portfolio index page :

![](./src/assets/screenshots/desktop-portfolio-1.png)
![](./src/assets/screenshots/desktop-portfolio-2.png)

Project details page :

![](./src/assets/screenshots/desktop-detail-1.png)
![](./src/assets/screenshots/desktop-detail-2.png)

Contact me page :
![](./src/assets/screenshots/desktop-contact.png)
![](./src/assets/screenshots/desktop-contact-2.png)
![](./src/assets/screenshots/desktop-contact-3.png)

### How to run the app locally ?

Clone the project, then jump into your command line and run these :

```bash
# install dependencies
yarn

# start the application
yarn start

# open the application in the browser
open http://localhost:3000
```

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- Mobile-first workflow
- [TailwindCSS](https://tailwindcss.com/) - Mobile-first CSS framework
- [React](https://reactjs.org/) - JS library
- [Typescript](https://www.typescriptlang.org/) - JS with an emphasis on types
- [Figma](https://www.figma.com/)

### What I learned

When I implemented React router in my project I quickly came across an issue : when changing routes the browser didn't scroll to the top of the page automatically, in the contrary it stayed at the same place where I was on the previous page.

### Continued development

I witnessed some issues concerning the routing of the website. I also witnessed that the website doesn't display properly on laptop screensizes, it is due to the font-size that is not adaptating to the loss of screen size and also to the absolute position of some elements.

I will try to fix all of these in the near future.

# Interactive Traffic Signal Light 🚦

This is a simple front-end project that creates a visual representation of a traffic signal light using only HTML and CSS. The lights are interactive and change color from a default gray to their respective colors (red, yellow, or green) when the user hovers over them.

## Features

* **Clean UI**: A simple and clean traffic light design.
* **Interactive Hover Effects**: Each light individually illuminates upon hovering with the mouse.
* **Pure CSS**: No JavaScript is used. The entire functionality is built with HTML5 and CSS3.
* **Easy to Understand**: The code is straightforward and well-structured, making it great for beginners.

---

## How to Use

To run this project locally, follow these simple steps:

1.  **Create the files**:
    * Create a file named `index.html` and paste the HTML code into it.
    * Create a file named `style.css` in the same directory and paste the CSS code into it.

2.  **Open in Browser**:
    * Open the `index.html` file in your favorite web browser (like Chrome, Firefox, or Edge).
    * You should now see the traffic light. Hover over the circles to see the effect!

---

## Code Overview

### `index.html`

This file sets up the basic structure of the web page.

* It contains a main `div` with the class `container` which acts as the black casing for the traffic light.
* Inside the container, there are three `div` elements, each representing a light:
    * `<div class="red sig"></div>`
    * `<div class="yellow sig"></div>`
    * `<div class="green sig"></div>`

### `style.css`

This file contains all the styling for the traffic light.

* **`body`**: Centers the traffic light on the page.
* **`.container`**: Styles the black casing, giving it a border-radius and a box-shadow to make it pop.
* **`.sig`**: Styles the individual lights, making them circular (`border-radius: 50%`) and setting a default gray background color.
* **`:hover` pseudo-class**: The core of the interactive functionality. It changes the `background-color` of each light when the mouse pointer is over it.
    * `.red:hover`
    * `.yellow:hover`
    * `.green:hover`

---

This project is a great example of how powerful CSS pseudo-classes like `:hover` can be for creating simple, interactive web elements without needing any JavaScript.
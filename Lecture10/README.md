# 🛒 3D Shopping Cart (Pure CSS)

A pure CSS 3D shopping cart scene with animated rotation, floating effect, and spinning wheels — no JavaScript required.

## ✨ Features

- Pure CSS 3D model using transform-style: preserve-3d
- Smooth continuous rotation and floating animation
- Realistic cart body, handle, and wheels with spokes
- Responsive scaling for smaller screens
- Modern gradient background and glow text effect

## 📁 Files

- `index.html` – Markup for the 3D cart and info section
- `style.css` – All styles, 3D transforms, and animations

## 🚀 Run locally

Just open the HTML file in your browser:

```powershell
start .\index.html
```

Supported in modern browsers (Chrome, Edge, Firefox, Safari).

## 🧩 How it works

- The cart is built with nested divs representing faces of a box and circular wheels
- 3D effect via perspective on the body and preserve-3d on the cart
- Animations:
  - `rotate3d` rotates the cart around the Y-axis
  - `float` gently moves the cart up and down
  - `wheelRotate` spins the wheels using rotateZ
- Extra polish with gradients, inner shadows, and a pulsing ground shadow

## 🎛 Customize

- Size: tweak `.cart`, `.cart-body`, and face dimensions
- Depth: adjust `perspective` on `body`
- Speed: change durations in `@keyframes` or animation properties
- Colors: modify gradient values in `.face`, wheels, and background

## ♿ Accessibility

- Purely visual demo; no interactive controls
- Text uses high contrast with text-shadow for readability

## 👤 Author

ANUBHAV YADAV

## 📄 License

Open source; free to use for learning and demos.

# 🩴 Flip-Flop 3D Card

A pure CSS 3D flip card animation with no JavaScript required. This project demonstrates advanced CSS transforms, transitions, and 3D perspective effects.

## ✨ Features

- **Pure CSS Animation** - No JavaScript dependencies
- **3D Flip Effect** - Smooth 180° rotation on hover/focus
- **Fully Accessible** - Keyboard navigation support with Tab, Enter, and Space
- **Responsive Design** - Adapts to different screen sizes
- **Touch Device Support** - Works on mobile and tablet devices
- **ARIA Labels** - Screen reader friendly
- **Modern CSS** - Uses CSS custom properties (variables) for easy customization

## 🎯 Demo

Hover over the card (or tap on touch devices) to see the smooth 3D flip animation revealing the back side.

### Interactions:
- **Desktop**: Hover your mouse over the card
- **Touch Devices**: Tap and hold the card
- **Keyboard**: Tab to focus the card, then press Enter or Space

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- No build tools or dependencies required!

### Installation

1. Clone or download this folder
2. Open `index.html` in your web browser
3. That's it! No installation needed.

```bash
# Simply open the file
start index.html  # Windows
open index.html   # macOS
xdg-open index.html  # Linux
```

## 📁 Project Structure

```
flip-flop/
├── index.html      # HTML structure and content
├── style.css       # All styles and animations
└── README.md       # This file
```

## 🎨 Customization

The project uses CSS custom properties for easy theming. You can modify these in `style.css`:

```css
:root {
  --bg: #0b1220;        /* Background color */
  --text: #e2e8f0;      /* Text color */
  --primary: #f59e0b;   /* Accent color */
  --front: #1f2937;     /* Front face color */
  --back: #f59e0b;      /* Back face color */
}
```

### Adjusting Card Dimensions

Modify the `.scene` class in `style.css`:

```css
.scene {
  width: 300px;       /* Change card width */
  height: 190px;      /* Change card height */
  perspective: 900px; /* Adjust 3D depth */
}
```

### Animation Speed

Adjust the transition duration in the `.card` class:

```css
.card {
  transition: transform 650ms cubic-bezier(0.22, 1, 0.36, 1);
  /* Change 650ms to your preferred duration */
}
```

## 🔧 Technical Details

### CSS Techniques Used

- **Transform-style: preserve-3d** - Maintains 3D space for child elements
- **Backface-visibility** - Hides the back of elements when rotated
- **Perspective** - Creates 3D depth effect
- **Transform: rotateY()** - Rotates card along Y-axis
- **Cubic-bezier easing** - Smooth, natural animation curve
- **CSS Grid** - Modern layout for centering content
- **Custom Properties** - Easy theme customization

### Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Accessibility Features

- Semantic HTML structure
- ARIA labels for screen readers
- Keyboard navigation support
- Focus visible states
- Touch-friendly tap targets
- Reduced motion support (can be extended)

## 👨‍💻 Author

**ANUBHAV YADAV**

## 📄 License

This project is open source and available for personal and commercial use.

## 🙏 Acknowledgments

- Inspired by modern card UI designs
- Built with pure CSS to demonstrate the power of modern web standards
- Flip-flop emoji (🩴) adds a playful touch to the design

## 💡 Learning Resources

This project is great for learning:
- CSS 3D transforms
- CSS animations and transitions
- CSS custom properties
- Accessibility best practices
- Modern CSS layout techniques



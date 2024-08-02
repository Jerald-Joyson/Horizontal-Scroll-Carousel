# Horizontal Scroll Carousel

This project demonstrates the implementation of a horizontal scroll carousel using React and Next.js, along with Tailwind CSS for styling. The carousel allows horizontal scrolling within a vertical scroll context, providing a unique and dynamic user experience.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Components](#components)
- [Styling](#styling)
- [Contributing](#contributing)
- [Output](#output)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/Horizontal-Scroll-Carousel.git
   cd Horizontal-Scroll-Carousel
   ```
2. **Install dependencies:**

   ```bash
   npm install
   ```
3. **Run the development server:**

   ```bash
   npm run dev
   ```
4. **Open your browser and navigate to:**

   ```
   http://localhost:3000
   ```

## Usage

To use the horizontal scroll carousel, simply run the development server and navigate to the home page. You will see a vertical section, followed by the horizontal scroll section, and another vertical section.

Scroll down to reach the horizontal scroll section and experience the horizontal scrolling behavior.

## Project Structure

The main files and directories are:

```
.
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── horizontal-scroll.js
│   │   ├── layout.tsx
│   │   └── page.tsx
├── public/
│   └── ...
├── README.md
└── package.json
```

### Components

#### `horizontal-scroll.js`

This component handles the horizontal scrolling logic. It calculates the dynamic height required for the container based on the object width and sets the translation in the X-axis based on the scroll position.

#### `layout.tsx`

This file defines the root layout of the Next.js application, including global metadata and styles.

#### `page.tsx`

This is the main page that includes vertical sections and the horizontal scroll section using the `HorizontalScroll` component.

### Styling

The project uses Tailwind CSS for styling. The global styles are imported in `globals.css`.

### CSS Classes

- **Container:**
  ```css
  relative w-full
  ```
- **Sticky Container:**
  ```css
  sticky top-0 h-screen w-full overflow-x-hidden
  ```
- **Scrollable Object:**
  ```css
  absolute h-full will-change-transform
  ```
- **Content:**
  ```css
  relative h-full pl-[150px] flex flex-row flex-nowrap justify-start items-center
  ```
- **Items:**
  ```css
  relative h-[700px] w-[900px] bg-[#111f30] mr-[75px] flex-shrink-0
  ```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request on GitHub.

## Output

[click me](https://horizontal-scroll-carousel-two.vercel.app/)

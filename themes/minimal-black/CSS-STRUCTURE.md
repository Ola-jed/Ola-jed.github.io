# CSS Architecture

The Minimal Black theme uses a modular CSS architecture for better maintainability and organization.

## Directory Structure

```
assets/css/
├── main.css                    # Entry point (imports all modules)
├── base.css                    # Tailwind imports & theme variables
├── utilities.css               # Utility classes & animations
├── responsive.css              # Global responsive styles
├── components/
│   ├── dock.css               # Floating action dock
│   ├── cards.css              # Card variants (home, project, post, CTA)
│   ├── navigation.css         # Header, footer, nav links
│   ├── search.css             # Search overlay & results
│   └── tech-marquee.css       # Technology carousel
├── content/
│   ├── markdown.css           # Typography, blockquotes, lists, code
│   └── toc.css                # Table of contents sidebar
└── pages/
    ├── about.css              # About page with timeline
    └── about-alternative.css  # Alternative about page layout
```

## Module Descriptions

### Base Layer
- **base.css**: Tailwind directives, CSS custom properties for theming (light/dark mode), and base body styles

### Utilities
- **utilities.css**: Color utilities, animation classes, and helper classes used throughout the theme

### Components
Reusable UI components that appear across multiple pages:
- **dock.css**: Floating action button dock with expandable panel
- **cards.css**: All card variants including home cards, project/post cards, CTA cards, and badges
- **navigation.css**: Page layouts, header, footer, navigation links, and theme toggle
- **search.css**: Search modal overlay, search results, empty states, and keyboard hints
- **tech-marquee.css**: Animated technology/skills carousel component

### Content
Styles specific to content rendering:
- **markdown.css**: Complete markdown styling including typography, blockquotes, lists, code blocks, tables, GitHub-style alerts, and syntax highlighting
- **toc.css**: Table of contents sidebar with sticky positioning and active link tracking

### Pages
Page-specific styles:
- **about.css**: Standard about page with timeline visualization
- **about-alternative.css**: Alternative about layout with sidebar profile card and stats

### Responsive
- **responsive.css**: All media queries and mobile optimizations for global components

## Import Order

The import order in `main.css` is important:
1. Base styles (Tailwind + variables)
2. Utilities (available to all components)
3. Components (dock → cards → navigation → search → tech)
4. Content styles (markdown → TOC)
5. Page-specific styles
6. Responsive overrides

## Development Guidelines

### Adding New Styles
- Component styles → `components/`
- Content/typography → `content/`
- Page-specific → `pages/`
- Utilities → `utilities.css`
- Theme variables → `base.css`

### Modifying Existing Styles
Each file is focused on a specific concern. Find the relevant module and edit it directly. Hugo will automatically rebuild the combined CSS.

### Theme Colors
All theme colors are defined as CSS custom properties in `base.css`:
```css
--color-bg          /* Background */
--color-surface     /* Card/surface backgrounds */
--color-text        /* Primary text */
--color-text-muted  /* Secondary text */
--color-border      /* Borders */
--color-accent      /* Primary accent color */
```

These variables automatically switch between light and dark themes.

### Responsive Breakpoints
- Mobile: `max-width: 640px`
- Tablet: `641px - 1023px`
- Desktop: `min-width: 1024px`
- Large Desktop: `min-width: 1536px`
- XL Desktop: `min-width: 1920px`

## Build Process

Hugo processes `main.css` through:
1. Resolves `@import` statements
2. Processes Tailwind directives (@tailwind, @apply)
3. Minifies for production
4. Outputs to `public/css/main.css`

The modular structure is development-only; users receive a single optimized CSS file.

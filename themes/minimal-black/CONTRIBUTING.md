# Contributing to Minimal Black

Thank you for your interest in contributing to Minimal Black! This document provides guidelines and instructions for contributing to the theme.

## Code of Conduct

By participating in this project, you agree to maintain a respectful and collaborative environment. Be kind, be professional, and be constructive in your feedback.

## How Can I Contribute?

### Reporting Bugs

Before creating a bug report, please check the [existing issues](https://gitlab.com/jimchr12/hugo-minimal-black/-/issues) to avoid duplicates.

When creating a bug report, include:

- **Clear title** — Descriptive and specific
- **Steps to reproduce** — Minimal steps needed to reproduce the issue
- **Expected behavior** — What you expected to happen
- **Actual behavior** — What actually happened
- **Screenshots** — If applicable
- **Environment:**
  - Hugo version (`hugo version`)
  - Operating system
  - Browser (if frontend issue)
  - Node.js version (`node --version`)

### Suggesting Enhancements

Enhancement suggestions are welcome! Please:

1. **Check existing issues** — Your idea might already be proposed
2. **Provide clear use case** — Explain why this would be useful
3. **Consider alternatives** — Mention any alternative solutions you've considered
4. **Keep it minimal** — The theme prioritizes simplicity

### Pull Requests

1. **Fork the repository** and create your branch from `main`
2. **Make your changes** following the code style guidelines below
3. **Test your changes** thoroughly
4. **Update documentation** if you're changing functionality
5. **Commit with clear messages** following the commit conventions
6. **Submit a pull request** with a comprehensive description

## Development Setup

### Prerequisites

- Hugo Extended v0.120.0+
- Node.js 18+
- npm or yarn

### Local Development

1. **Clone your fork:**
   ```bash
   git clone https://gitlab.com/YOUR-USERNAME/hugo-minimal-black.git
   cd hugo-minimal-black
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the example site:**
   ```bash
   cd exampleSite
   hugo server -D --themesDir ../..
   ```

4. **Build CSS** (if modifying styles):
   ```bash
   npx tailwindcss -i ./assets/css/main.css -o ./static/css/main.css
   ```

### Making Changes

#### CSS/Styling

- CSS files are in `assets/css/`
- The theme uses Tailwind CSS with a modular structure
- See [CSS-STRUCTURE.md](CSS-STRUCTURE.md) for architecture details
- Follow the existing pattern: one component per file
- Use CSS custom properties for theme colors
- Ensure changes work in both light and dark modes

#### HTML/Templates

- Templates are in `layouts/`
- Follow Hugo's template best practices
- Use semantic HTML5 elements
- Test responsiveness on mobile, tablet, and desktop

#### JavaScript

- Keep JavaScript minimal
- Use vanilla JavaScript (no frameworks)
- Ensure compatibility with all modern browsers
- Add comments for complex logic
- Test with JavaScript disabled for core functionality

### HTML/Templates

- **2 spaces** for indentation
- **Semantic HTML** — Use appropriate elements
- **Accessibility** — Include ARIA labels where needed
- **Hugo conventions** — Follow Hugo's best practices

```html
{{ define "main" }}
  <section class="layout-page">
    <article class="about-page">
      <h1>{{ .Title }}</h1>
      {{ .Content }}
    </article>
  </section>
{{ end }}
```

### CSS

- **2 spaces** for indentation
- **BEM-inspired** naming for custom classes
- **Mobile-first** responsive design
- **CSS custom properties** for theme values
- **Comments** for complex styles

```css
/* Component name */
.component-name {
  property: value;
}

/* Component variant */
.component-name--variant {
  property: value;
}

/* Component element */
.component-name__element {
  property: value;
}
```

### JavaScript

- **2 spaces** for indentation
- **camelCase** for variables and functions
- **Descriptive names** — Avoid abbreviations
- **Comments** for non-obvious code
- **Modern syntax** — Use ES6+ features

```javascript
function handleSearchInput(event) {
  const query = event.target.value;
  const results = filterPages(query);
  renderResults(results);
}
```

## Commit Messages

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
type(scope): subject

body (optional)

footer (optional)
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

### Examples

```
feat(search): add keyboard navigation to search results

fix(toc): correct active link highlighting on scroll

docs(readme): update installation instructions

style(css): reorganize markdown styles into modules

refactor(cards): simplify project card component

perf(images): optimize image loading with lazy loading
```

## Testing Checklist

Before submitting a pull request, ensure:

- [ ] Hugo builds without errors (`hugo`)
- [ ] No console errors in browser
- [ ] Works in latest Chrome, Firefox, Safari
- [ ] Responsive on mobile, tablet, desktop
- [ ] Dark and light modes both work
- [ ] Accessibility: Keyboard navigation works
- [ ] Performance: Lighthouse score >90
- [ ] Documentation updated (if applicable)
- [ ] No breaking changes (or clearly documented)

## File Structure

```
minimal-black/
├── archetypes/          # Content templates
├── assets/
│   └── css/            # Modular CSS files
├── layouts/
│   ├── _default/       # Default layouts
│   ├── partials/       # Reusable components
│   └── shortcodes/     # Custom shortcodes
├── static/
│   └── js/             # JavaScript files
├── exampleSite/        # Example site for testing
├── images/             # Theme screenshots
├── CSS-STRUCTURE.md    # CSS architecture docs
├── CONTRIBUTING.md     # This file
├── LICENSE             # MIT License
├── README.md           # Main documentation
└── theme.toml          # Theme metadata
```

## Questions?

- **Issues:** [GitLab Issues](https://gitlab.com/jimchr12/hugo-minimal-black/-/issues)
- **Discussions:** [GitLab Discussions](https://gitlab.com/jimchr12/hugo-minimal-black/-/issues)

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to Minimal Black! 🎉

# Portfolio — component structure

```
src/
  theme.js                    color + font tokens
  data.js                     all content (stats, projects, experience, skills, etc.) — edit this to make it yours
  App.jsx                     composes every section in order
  components/
    Reveal.jsx                scroll-in animation wrapper
    SkillBar.jsx               animated skill progress bar
    TypedTerminal.jsx          typing-effect code snippet used in the hero
    Nav.jsx                    sticky nav + mobile menu
    Hero.jsx
    Stats.jsx
    Services.jsx               "what I work on"
    Work.jsx                   selected projects grid
    ExperienceEducation.jsx    two-column timeline
    Skills.jsx
    Testimonials.jsx
    Blog.jsx                   writing teaser cards
    Contact.jsx
    Footer.jsx
```

## To customize

Almost everything you'd want to change lives in **`data.js`** (your name goes in `Nav.jsx` and `Hero.jsx` directly, and social links in `Hero.jsx`).

## Dependencies

```
npm install react lucide-react
```

Tailwind CSS needs to be set up in your project (this uses only core utility classes — no custom config required). See https://tailwindcss.com/docs/installation for setup.

Fonts (Space Grotesk, Inter, JetBrains Mono) are pulled in via an `@import` in `App.jsx`'s inline `<style>` tag, so no extra setup is needed there.

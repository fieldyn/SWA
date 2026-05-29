# hero-redesign Specification

## Purpose
TBD - created by archiving change modernize-landing-visuals. Update Purpose after archive.
## Requirements
### Requirement: Kinetic title reveal

The hero title SHALL reveal word-by-word on load with a staggered animation, without altering the translated text content or its accessibility.

#### Scenario: Staggered word reveal

- **WHEN** the hero first paints and motion is allowed
- **THEN** each word or line of the title SHALL fade and translate in with an increasing delay, preserving the existing gradient and italic accents

#### Scenario: Content and a11y preserved across languages

- **WHEN** the title is read by assistive technology OR the language is switched between EN and ES
- **THEN** the full, correct title text SHALL be present, and the word-wrapping spans SHALL NOT introduce spurious pauses, duplicate readings, or broken strings

#### Scenario: Reduced motion

- **WHEN** `prefers-reduced-motion: reduce` is active
- **THEN** the title SHALL appear fully composed with no per-word animation

### Requirement: Logo draw-in

The InnovatioX logo mark SHALL animate its two strokes "drawing in" on the first paint of the hero.

#### Scenario: Strokes draw on load

- **WHEN** the hero logo mounts and motion is allowed
- **THEN** the X strokes SHALL animate from undrawn to fully drawn via a stroke-dash animation, then settle with the existing glow

#### Scenario: Reduced motion

- **WHEN** `prefers-reduced-motion: reduce` is active
- **THEN** the logo SHALL render fully drawn immediately, with no draw animation

### Requirement: Scroll-linked hero parallax

The hero orbs and watermark SHALL move at a parallax offset as the user scrolls, implemented with native CSS scroll-driven animation and no JavaScript scroll listeners.

#### Scenario: Parallax on scroll

- **WHEN** the user scrolls through the hero, `animation-timeline: scroll()` is supported, and motion is allowed
- **THEN** the orbs and watermark SHALL translate at a slower rate than the foreground content to create depth

#### Scenario: Fallback when unsupported

- **WHEN** `animation-timeline` is not supported by the browser
- **THEN** the hero SHALL render in its current static composition with no console errors or layout shift


## ADDED Requirements

### Requirement: Living brand gradient

The system SHALL render the brand gradient (`--ix-gradient`) as an animated gradient whose angle is driven by a CSS `@property`-registered custom property (e.g. `--ix-grad-angle`), so that gradient text, primary buttons, the logo mark and accent fills shift continuously rather than remaining static.

#### Scenario: Gradient animates at rest

- **WHEN** the page is loaded and the user has not requested reduced motion
- **THEN** the brand gradient SHALL rotate its angle smoothly and continuously in a slow loop across every element that uses it (gradient text, primary CTAs, logo, accents)

#### Scenario: @property is unsupported

- **WHEN** the browser does not support `@property` angle registration
- **THEN** the system SHALL fall back to the current static gradient with no visual breakage or layout shift

### Requirement: Film-grain and aurora background

The system SHALL layer a subtle film-grain texture and a refreshed aurora glow over the existing radial-gradient background to add depth, and these layers SHALL be decorative only (`aria-hidden`, non-interactive).

#### Scenario: Grain is present but subtle

- **WHEN** the page renders in either dark or light theme
- **THEN** a low-opacity grain texture SHALL overlay the background WITHOUT reducing any text/background contrast below WCAG AA

#### Scenario: Layers adapt to theme

- **WHEN** the theme toggles between dark and light
- **THEN** the grain and aurora SHALL adapt their opacity and blend mode so that neither theme looks washed out or muddy

### Requirement: Motion governance

All animations and transitions introduced by this change SHALL be disabled or reduced to a non-animated final state when the user has `prefers-reduced-motion: reduce` set.

#### Scenario: Reduced motion disables effects

- **WHEN** `prefers-reduced-motion: reduce` is active
- **THEN** gradient rotation, scroll parallax, 3D tilt, pointer spotlight, kinetic text reveal and logo draw-in SHALL NOT animate, and the page SHALL present its final composed state immediately

### Requirement: Pointer and data governance

Pointer-tracking effects SHALL be enabled only for fine pointers, and the heaviest decorative layers SHALL respect reduced-data preferences.

#### Scenario: Coarse pointer disables tracking

- **WHEN** the primary input is a coarse pointer (e.g. touch)
- **THEN** pointer spotlight and 3D tilt SHALL be disabled and the affected surfaces SHALL show a static, tasteful resting state

#### Scenario: Reduced data simplifies decoration

- **WHEN** `prefers-reduced-data: reduce` is active
- **THEN** the system SHALL drop or simplify the most expensive decorative layers (e.g. grain texture and large blurs) while keeping the layout and content intact

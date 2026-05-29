# layout-and-rhythm Specification

## Purpose
TBD - created by archiving change modernize-landing-visuals. Update Purpose after archive.
## Requirements
### Requirement: Services bento layout

The Services section SHALL present its cards in a bento grid with intentionally varied tile sizes (a dominant featured tile plus smaller supporting tiles), and SHALL remain responsive.

#### Scenario: Bento on desktop

- **WHEN** the Services section is viewed at desktop widths
- **THEN** the cards SHALL form an asymmetric bento grid with varied row/column spans rather than a uniform 2×2 grid

#### Scenario: Responsive collapse

- **WHEN** the viewport narrows to mobile widths
- **THEN** the bento SHALL collapse to a single, readable column with no horizontal overflow or clipped content

### Requirement: Aurora section dividers

Transitions between major sections SHALL be visually articulated with subtle aurora/gradient dividers to improve page rhythm, in both themes.

#### Scenario: Divider marks section boundary

- **WHEN** the user scrolls from one major section to the next
- **THEN** a soft gradient/aurora divider SHALL mark the boundary without introducing harsh lines, in both dark and light themes

### Requirement: Scroll-spy navigation

The header navigation SHALL indicate the section currently in view and expose that state to assistive technology.

#### Scenario: Active link tracks scroll position

- **WHEN** a section becomes the primary section in the viewport
- **THEN** its corresponding header nav link SHALL receive an active visual state and `aria-current` SHALL be set on it and removed from the others

#### Scenario: Clicking a link still navigates

- **WHEN** a nav link is clicked
- **THEN** the page SHALL smoothly anchor to that section as it does today, and the active state SHALL update to match

### Requirement: Closing CTA micro-section

The page SHALL end with a compact, high-emphasis call-to-action micro-section placed between the Contact section and the Footer.

#### Scenario: CTA present before footer

- **WHEN** the user reaches the bottom of the page
- **THEN** a closing CTA band SHALL appear between Contact and Footer with a clear primary action

#### Scenario: Themed and localized

- **WHEN** the theme or language is changed
- **THEN** the closing CTA SHALL render correctly in both dark/light themes and in both EN/ES, sourcing its copy from the existing i18n content store


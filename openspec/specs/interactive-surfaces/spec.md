# interactive-surfaces Specification

## Purpose
TBD - created by archiving change modernize-landing-visuals. Update Purpose after archive.
## Requirements
### Requirement: Pointer spotlight on cards

Service cards, strength cards and the contact card SHALL render a radial spotlight that tracks the pointer position while hovered, replacing the current static hover halo.

#### Scenario: Spotlight follows the pointer

- **WHEN** a fine pointer moves within a card
- **THEN** a soft radial highlight SHALL track the pointer coordinates in real time, anchored to the card bounds

#### Scenario: Spotlight fades on leave

- **WHEN** the pointer leaves the card
- **THEN** the spotlight SHALL fade out smoothly and the card SHALL return to its resting border/elevation state

#### Scenario: Disabled for coarse pointer or reduced motion

- **WHEN** the pointer is coarse OR `prefers-reduced-motion: reduce` is active
- **THEN** no pointer tracking SHALL occur and the card SHALL keep a static resting halo with no per-move updates

#### Scenario: No re-render on pointer move

- **WHEN** the pointer moves across a card
- **THEN** position SHALL be communicated via CSS custom properties (not React state) so that pointer movement triggers NO React re-render

### Requirement: 3D tilt hero card

The hero mark card SHALL tilt in 3D toward the pointer, with its floating chips and logo offset on a parallax plane to create depth.

#### Scenario: Card tilts toward the pointer

- **WHEN** a fine pointer moves over the hero visual
- **THEN** the card SHALL rotate about its X and Y axes proportional to the pointer offset, and inner layers SHALL translate on Z to produce parallax

#### Scenario: Card springs back on leave

- **WHEN** the pointer leaves the hero visual
- **THEN** the card SHALL animate back to its neutral resting transform

#### Scenario: Disabled gracefully

- **WHEN** `prefers-reduced-motion: reduce` is active OR the pointer is coarse
- **THEN** the card SHALL remain static (retaining the current gentle resting rotation) with no pointer response

### Requirement: Elevated micro-interactions

Primary buttons, tech pills, navigation links and card links SHALL present refined hover and press feedback consistent with the brand gradient, without harming keyboard accessibility.

#### Scenario: Hover feedback

- **WHEN** a fine pointer hovers an interactive control
- **THEN** the control SHALL respond with a subtle lift, gradient sheen or glow that settles within roughly 250ms

#### Scenario: Press and focus feedback

- **WHEN** the control is activated by pointer or keyboard
- **THEN** it SHALL show a brief press state AND retain a clearly visible `:focus-visible` ring for keyboard users


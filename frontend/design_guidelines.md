# AI Prompting Landing Page Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from modern SaaS and educational platforms like Linear, Notion, and Vercel, with a space/tech aesthetic to match the AI theme.

## Core Design Elements

### A. Color Palette
**Dark Mode Primary** (matching the cosmic theme):
- Background: 12 15% 8% (deep space dark)
- Surface: 220 15% 12% (slightly lighter panels)
- Primary brand: 240 100% 70% (vibrant blue)
- Text primary: 0 0% 95% (near white)
- Text secondary: 0 0% 70% (muted gray)

**Accent Colors**:
- Gradient start: 240 100% 70% (electric blue)
- Gradient end: 280 100% 60% (purple-blue)
- Highlight: 200 100% 80% (cyan accent for tech elements)

### B. Typography
- **Primary Font**: Inter (Google Fonts) - clean, modern sans-serif
- **Headline**: 48px/1.1, font-weight 700
- **Subtitle**: 20px/1.5, font-weight 400
- **Navigation**: 16px/1.4, font-weight 500
- **Button text**: 16px/1.2, font-weight 600

### C. Layout System
**Tailwind Spacing**: Use units of 4, 8, 12, 16, 24 for consistent spacing
- Container max-width: 1200px
- Section padding: py-24, px-8
- Component gaps: space-y-8, space-x-4

### D. Component Library

**Header Component**:
- Fixed navigation with AI Prompting logo (left)
- "Prompting" button (right) with rounded-full, outline variant
- Background: backdrop-blur with dark overlay

**Hero Section**:
- Full viewport height (h-screen)
- Centered content with max-width container
- Headline with gradient text effect
- Subtitle with opacity-80
- Primary CTA button with gradient background and hover scaling

**Button Variants**:
- Primary: Gradient background (blue to purple), white text, rounded-full
- Outline: Transparent background with blurred backdrop when over images
- Consistent padding: px-8 py-4

### E. Background Treatment
**Space Theme Elements**:
- Dark gradient background with subtle particle effects
- Floating geometric shapes (circles, atoms) with CSS animations
- Subtle glow effects around interactive elements
- Background should feel deep and cosmic without being distracting

## Images
**Hero Background**: 
- Large cosmic/space scene with abstract tech elements
- Should include floating interface mockups, atomic structures, and planetary elements
- Position: Full background with overlay gradient
- Style: Dark, mysterious with blue/purple tech highlights

**Supporting Graphics**:
- Floating UI elements and atomic structures scattered throughout
- Small planet/orbital graphics in corners
- Abstract geometric shapes with subtle animations

## Responsive Behavior
- Mobile: Stack navigation items, reduce hero text size
- Tablet: Maintain layout with adjusted spacing
- Desktop: Full hero experience with all background elements

## Animation Guidelines
**Minimal Animations Only**:
- Subtle hover scaling on buttons (scale-105)
- Gentle floating motion on background elements
- Smooth transitions on interactive states
- No distracting or complex animations

## Component Structure
- Separate JSX files for Header, Hero, and Background components
- Shared styles in a dedicated CSS/styling file
- Modular approach for easy maintenance and updates
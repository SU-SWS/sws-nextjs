# AGENTS.md

This document provides AI agents with essential context about the SWS NextJS Static Website project, including architecture, conventions, workflows, and best practices.

---

## Project Overview

**SWS NextJS Static Website** is a static site built with **Next.js 15 (App Router)** and **Stanford's design system**, providing a fast, accessible, and maintainable web experience for Stanford Web Services projects.

### Goals
- Deliver **fast, reliable, accessible** static web experiences
- Provide reusable components following Stanford's design system
- Maintain clean, type-safe code with TypeScript
- Support long-term maintainability and collaboration
- Enable easy content updates through static data files

### Tech Stack

| Layer | Technology | Notes |
|-------|-------------|-------|
| Framework | **Next.js 15** | App Router, Static Export, TypeScript strict mode |
| Styling | **TailwindCSS v4** | Utility-first, Stanford design tokens |
| Components | **React 19** | Server components by default, client when needed |
| Fonts | **Stanford Fonts** | Source Sans 3, custom font loading |
| Type System | **TypeScript** | Strict mode enabled |
| Testing | **Jest + Cypress** | Unit and component testing |
| Linting | **ESLint + Prettier** | Code quality and formatting |

**Node Version**: >=22.0.0

### Key Dependencies

- `next` - Next.js framework
- `react` - React library
- `tailwindcss` - Utility-first CSS framework
- `clsx` - Utility for conditionally building class names
- `@heroicons/react` - Icon library

---

## Architecture

- **Static Export:** Fully static HTML generated at build time
- **Server Components:** Default rendering strategy for better performance
- **Client Components:** Used only when needed for interactivity
- **Component Library:** Reusable UI components following Stanford design patterns
- **Type Safety:** Full TypeScript coverage for components and utilities

---

## Project Structure

```
├── src/
│   ├── app/                          # Next.js app directory (App Router)
│   │   ├── layout.tsx                # Root layout
│   │   ├── page.tsx                  # Homepage
│   │   └── not-found.tsx             # 404 page
│   ├── components/                   # React components
│   │   ├── elements/                 # Base UI elements (Text, Button, Link, etc.)
│   │   ├── paragraphs/               # Content paragraph components
│   │   └── patterns/                 # Composite UI patterns (HeroBanner, ImageCard, etc.)
│   ├── styles/                       # Global styles
│   │   └── globals.css               # Global CSS imports
│   └── utilities/                    # Utility functions and helpers
├── public/                           # Static assets
│   ├── fonts/                        # Stanford fonts
│   └── images/                       # Static images
├── tailwind.config.ts                # Tailwind configuration
├── tsconfig.json                     # TypeScript configuration
└── next.config.ts                    # Next.js configuration
```

---

## Component Organization

### Component Structure

Components are organized into three main categories:

1. **Elements** (`src/components/elements/`) - Basic UI building blocks
   - Text, headings, buttons, links, images, etc.
   - Highly reusable, minimal dependencies
   - Example: `Text.tsx`, `Button.tsx`, `Link.tsx`

2. **Paragraphs** (`src/components/paragraphs/`) - Content layout components
   - Row layouts (one-column, two-column, three-column)
   - Card components for structured content
   - Example: `card-paragraph.tsx`, `media-caption-paragraph.tsx`

3. **Patterns** (`src/components/patterns/`) - Composite UI patterns
   - Complex compositions of elements and paragraphs
   - Page-level components
   - Example: `hero-banner.tsx`, `image-card.tsx`

### File Naming Conventions

**Files:**
- Components: `kebab-case.tsx` (e.g., `hero-banner.tsx`, `image-card.tsx`)
- Types: `PascalCase.types.ts` (if needed for complex types)
- Tests: `ComponentName.test.tsx` (Jest), `ComponentName.cy.tsx` (Cypress)

**Components:**
- Component names: `PascalCase` (e.g., `HeroBanner`, `ImageCard`, `Text`)
- Props types: `ComponentNameProps` or inline type definitions

**Exports:**
- Default exports for components
- Named exports for additional utilities or types

### Component Props Typing

**Pattern:**
```typescript
type ComponentProps = React.HTMLAttributes<HTMLDivElement> & {
  required: string;
  optional?: boolean;
  children?: React.ReactNode;
};

export const Component = ({ required, optional, children, ...props }: ComponentProps) => (
  <div {...props}>{children}</div>
);
```

**Common Patterns:**
- Extend HTML element attributes for proper DOM prop spreading
- Use optional props with `?` for non-required values
- Avoid `Maybe<T>` wrapper types - use standard TypeScript optionals

### Component Styling

**Styling Approach:**
- Use Tailwind utility classes directly in component files
- Stanford design tokens configured in `tailwind.config.ts`
- Conditional classes with `clsx()` utilities
- No separate `.styles.ts` files unless styles are complex/reusable

**Example:**
```typescript
import {clsx} from "clsx";
import twMerge from "@lib/utils/twMerge";

export const Card = ({ variant, className, children }: CardProps) => (
  <div className={twMerge(
    "border border-black-10 bg-white shadow-lg",
    clsx({
      "p-10": variant === "padded",
      "p-0": variant === "flush",
    }),
    className
  )}>
    {children}
  </div>
);
```

---

## TypeScript Configuration

### Key Settings

- `strict: true` - Strict type checking enabled
- `baseUrl: "."` - Base path for imports
- `paths: { "@/*": ["./src/*"] }` - Path alias for absolute imports

**Import paths:**
```typescript
// Use path alias for absolute imports
import { Component } from '@/components/elements/component';
import { utility } from '@/utilities/utility';
```

---

## Linting & Code Style

### ESLint Rules (Key Highlights)

**Formatting:**
- `semi: always` - Require semicolons
- `quotes: single` - Use single quotes (except JSX)
- `jsx-quotes: prefer-double` - Use double quotes in JSX
- `comma-dangle: always-multiline` - Require trailing commas in multiline

**React:**
- `react/jsx-props-no-spreading: off` - Allow prop spreading
- `react/prop-types: off` - Prop types not required (TypeScript)
- Server components by default, add `'use client'` directive when needed

**TypeScript:**
- `@typescript-eslint/no-unused-vars: warn` - Warn on unused variables
- Explicit return types encouraged for exported functions

### Running Linters

```bash
npm run lint           # Check for errors and warnings
npm run lint:fix       # Auto-fix issues
npm run tsc            # TypeScript type checking
```

---

## Testing Strategy

### Philosophy: "Good Enough Testing"

**Principles:**
1. Test critical paths and user flows
2. Focus on real-world scenarios, not edge cases
3. Catch regressions early
4. Balance coverage with effort
5. Keep tests maintainable

### Testing Tools

**Jest** - Unit tests for pure functions and utilities
- Config: `jest.config.ts`
- Run: `npm run test`

**Cypress** - Component tests
- Component tests: Test individual React components in isolation
- Run component tests: `npm run cy:component`

### Component Test Structure

**File location:** Same directory as component (`component-name.cy.tsx`)

**Pattern:**
```typescript
import { mount } from 'cypress/react';
import { Component } from './component';

describe('Component', () => {
  it('should render with expected content', () => {
    mount(<Component prop="value" />);
    cy.get('selector').should('contain.text', 'value');
  });
});
```

**Test**: Props, interactions, conditionals, a11y | **Skip**: Third-party internals, edge cases

---

## Git Workflow

**Branches**: `main` (production)

**Process**:
1. Create feature branch: `git checkout -b feature/name`
2. Submit PR to `main`
3. Get approvals: tests pass, no lint errors, code review
4. Squash and merge to `main`

### Code Review
- Developers **review AI output** before PR
- PRs require peer review
- PRs should be labeled with `AI Developer` label if AI-assisted

---

## AI-Assisted Development

### AI Tooling Guidelines
- Use AI to generate components, boilerplate, tests, and docs
- Reference project-specific types and naming conventions
- Favor **deterministic code**, minimal side effects, and typed interfaces
- Never store personalized AI configs in the repo (`.gitignore` them)
- Always validate AI-generated code meets project standards

---

## Design System & Styling

- **Design System:** Tailwind CSS 4 config with Stanford design tokens
- **Colors:** Stanford brand colors (cardinal red, digital blue, etc.)
- **Typography:** Source Sans 3 font family, semantic heading levels
- **Spacing:** Consistent spacing scale using Tailwind utilities
- **Breakpoints:** Mobile-first responsive design

### Stanford Design Tokens

Common design tokens available in Tailwind:

**Colors:**
- `cardinal-red` - Stanford primary red
- `digital-blue` - Stanford blue
- `black-true`, `black-90`, `black-80`, etc. - Black scale
- `white` - Pure white
- `foggy-light`, `cool-grey`, `stone-dark` - Neutral grays

**Typography:**
- Font family: Source Sans 3 (default)
- Heading components: `H1`, `H2`, `H3`, `H4`
- Text component: `Text` with size/weight variants

**Spacing:**
- Use standard Tailwind spacing scale
- Margin utilities: `mb-{size}` for consistent vertical rhythm

---

## Common Component Patterns

### Typography Components

```typescript
import { H2 } from '@/components/elements/headers';
import { Text } from '@/components/elements/text';

<H2>Section Heading</H2>
<Text size="lg" weight="semibold">Body text with custom styling</Text>
```

### Layout Components

```typescript
import OneColumn from '@/components/paragraphs/one-column';
import TwoColumn from '@/components/paragraphs/two-column';

<OneColumn bg_color="f4f4f4" top_padding="more">
  <Text>Content in a single column with background</Text>
</OneColumn>

<TwoColumn column_widths="33-67" vertical_dividers>
  <div>Left column content</div>
  <div>Right column content</div>
</TwoColumn>
```

### Card Components

```typescript
import CardParagraph from '@/components/paragraphs/card-paragraph';

<CardParagraph
  header="Card Title"
  superHeader="Category"
  body="<p>Card body content as HTML</p>"
  link={{ url: "/path", title: "Learn More" }}
  imageUrl="/images/photo.jpg"
  imageAlt="Description"
  headingLevel="h3"
  linkStyle="action"
/>
```

### Pattern Components

```typescript
import HeroBanner from '@/components/patterns/hero-banner';
import ImageCard from '@/components/patterns/image-card';

<HeroBanner
  imageUrl="/images/hero.jpg"
  imageAlt="Hero image"
  overlayPosition="center"
  overlayColor="#000000"
>
  <H1>Page Title</H1>
  <Text>Hero description</Text>
</HeroBanner>

<ImageCard
  imageUrl="/images/card.jpg"
  imageAlt="Card image"
  isArticle={true}
  squareImage={false}
>
  <H3>Card heading</H3>
  <Text>Card content</Text>
</ImageCard>
```

---

## Accessibility Guidelines

### Requirements
- All images must have descriptive `alt` text
- Heading hierarchy must be semantic (don't skip levels)
- Interactive elements must be keyboard accessible
- Color contrast must meet WCAG AA standards
- Form inputs must have associated labels

### Best Practices
- Use semantic HTML elements (`<nav>`, `<main>`, `<article>`, etc.)
- Provide ARIA labels for icon-only buttons
- Ensure focus states are visible
- Test with keyboard navigation
- Test with screen readers when possible

---

## Common Tasks

### Creating a New Component

1. Create component file in appropriate directory:
   - `src/components/elements/` for basic elements
   - `src/components/paragraphs/` for content layouts
   - `src/components/patterns/` for complex patterns

2. Define TypeScript props interface

3. Implement component with proper typing

4. Add Tailwind styling using utility classes

5. Export component (default export)

6. Create test file if needed (`.cy.tsx` for Cypress)

### Adding a New Page

1. Create route in `src/app/`
2. Create `page.tsx` file for the route
3. Use existing components to build page layout
4. Add metadata with `generateMetadata` if needed
5. Test page rendering and navigation

### Commands

```bash
npm run dev                      # Start development server
npm run build                    # Build for production
npm run start                    # Start production server
npm run lint                     # Check for lint errors
npm run lint:fix                 # Auto-fix lint errors
npm run tsc                      # TypeScript type checking
npm run test                     # Run Jest tests
npm run cy:component             # Run Cypress component tests
```

---

## Agent Behavior Rules

- **Code in TypeScript** and follow Next.js App Router conventions
- **Use existing components** from the component library when possible
- **Apply Tailwind utilities** for styling with Stanford design tokens
- **Ensure accessibility** (ARIA labels, semantic HTML, keyboard nav)
- **Follow naming conventions** (kebab-case files, PascalCase components)
- **Write tests** for new components when appropriate
- **Keep it simple** - prefer static content over complex state management

### Code Generation Guidelines

- Avoid creating unnecessary README.md files unless prompted
- Reference existing components as examples for consistency
- Favor **deterministic code** with minimal side effects
- Use TypeScript for type safety
- Follow existing patterns in the codebase
- Keep components focused and single-purpose

---

## Important Gotchas

**Next.js**:
- App Router only (not Pages Router)
- Server components by default - add `'use client'` directive for client components
- Use `generateMetadata` for page metadata
- Always use `@/` imports for absolute paths

**TypeScript**:
- Strict mode enabled - watch for null/undefined
- Type props explicitly for all components
- No `any` types - use proper typing

**Styling**:
- Use `twMerge()` to safely merge Tailwind classes
- Use `clsx()` for conditional classes
- Custom variants: `hocus:` (hover + focus)

**Components**:
- Server components can't use hooks or browser APIs
- Client components need `'use client'` directive at top of file
- Spread HTML attributes with `...props` for flexibility

---

## Quick Reference

```bash
# Development
npm run dev                      # Start dev server

# Building
npm run build                    # Build static site
npm run start                    # Preview production build

# Testing
npm run test                     # Run Jest tests
npm run cy:component             # Run Cypress component tests

# Linting
npm run lint                     # Check for lint errors
npm run lint:fix                 # Auto-fix lint errors
npm run tsc                      # TypeScript type checking
```

---

## Summary Checklist

1. ✅ Use TypeScript with explicit typing
2. ✅ Style with Tailwind utilities and Stanford tokens
3. ✅ Follow component organization (elements/paragraphs/patterns)
4. ✅ Test critical components with Cypress
5. ✅ Use `@/` imports for absolute paths
6. ✅ Follow kebab-case for files, PascalCase for components
7. ✅ Server components by default, client only when needed
8. ✅ Run `lint` + `tsc` before committing
9. ✅ Ensure accessibility (alt text, ARIA, semantic HTML)
10. ✅ Reference existing components as examples

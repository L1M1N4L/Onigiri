# 🧩 Component Documentation

## Overview

This document provides detailed information about all React components in the Onigiri application, their props, usage examples, and styling guidelines.

## Component Architecture

The application follows a modular component architecture with clear separation of concerns:

- **Pages**: Top-level route components
- **Layout Components**: Reusable layout structures
- **Feature Components**: Domain-specific functionality
- **UI Components**: Reusable UI elements

## Homepage Components

### Hero Component

The main hero section with parallax effects and call-to-action.

**File**: `src/components/homepage/Hero.tsx`

**Props**: None

**Features**:
- Parallax scrolling effects
- Trust badge with user avatars
- Responsive video placeholder
- Animated browser window mockup

**Usage**:
```tsx
import Hero from '../components/homepage/Hero';

function Homepage() {
  return (
    <div>
      <Hero />
    </div>
  );
}
```

**Styling**:
- Background: Wave pattern with gradient overlay
- Typography: Large, bold headings with orange accent
- Animations: Smooth parallax and hover effects

### Navbar Component

Fixed navigation header with logo and CTA button.

**File**: `src/components/homepage/Navbar.tsx`

**Props**: None

**Features**:
- Fixed positioning with backdrop blur
- Responsive logo
- Get Started button
- Clean, minimal design

**Usage**:
```tsx
import Navbar from '../components/homepage/Navbar';

function Layout() {
  return (
    <div>
      <Navbar />
      {/* Page content */}
    </div>
  );
}
```

### StyledButton Component

Reusable button component with consistent styling.

**File**: `src/components/homepage/StyledButton.tsx`

**Props**:
```typescript
interface Props {
  children: React.ReactNode;
}
```

**Features**:
- Rounded corners with asymmetric design
- Hover effects (scale and shadow)
- Consistent color scheme
- Router integration

**Usage**:
```tsx
import StyledButton from '../components/homepage/StyledButton';

function CTASection() {
  return (
    <div>
      <StyledButton>Start Learning Free</StyledButton>
    </div>
  );
}
```

### Title Component

Consistent heading component with responsive sizing.

**File**: `src/components/homepage/Title.tsx`

**Props**:
```typescript
interface Props {
  children: React.ReactNode;
}
```

**Features**:
- Responsive text sizing
- Consistent color scheme
- Proper line height
- Maximum width constraint

**Usage**:
```tsx
import Title from '../components/homepage/Title';

function Hero() {
  return (
    <Title>
      Master Japanese with <br/>
      <span className="text-[#E56E0C]">ir-rice-istible</span> learning!
    </Title>
  );
}
```

### Subtitle Component

Consistent subtitle component for descriptions.

**File**: `src/components/homepage/Subtitle.tsx`

**Props**:
```typescript
interface Props {
  children: React.ReactNode;
}
```

**Features**:
- Responsive text sizing
- Reduced opacity for hierarchy
- Proper line height
- Maximum width constraint

**Usage**:
```tsx
import Subtitle from '../components/homepage/Subtitle';

function Hero() {
  return (
    <Subtitle>
      Transform your Japanese study journey with Onigiri's interactive platform.
    </Subtitle>
  );
}
```

## Signup Page Components

### LeftPanel Component

Visual panel with background image and content.

**File**: `src/components/signup_page/LeftPanel.tsx`

**Props**: None

**Features**:
- Background image with overlay
- Decorative SVG patterns
- Responsive text sizing
- Centered content layout

**Usage**:
```tsx
import LeftPanel from '../components/signup_page/LeftPanel';

function SignupPage() {
  return (
    <div className="flex">
      <LeftPanel />
      <RightPanel />
    </div>
  );
}
```

**Styling**:
- Background: Fushimi image with dark overlay
- Text: White text with proper contrast
- Patterns: Subtle SVG decorative elements
- Responsive: Scales appropriately on all devices

### RightPanel Component

Form panel containing the signup form.

**File**: `src/components/signup_page/RightPanel.tsx`

**Props**: None

**Features**:
- Background pattern
- Centered form layout
- Decorative accent elements
- Responsive padding

**Usage**:
```tsx
import RightPanel from '../components/signup_page/RightPanel';

function SignupPage() {
  return (
    <div className="flex">
      <LeftPanel />
      <RightPanel />
    </div>
  );
}
```

### SignupForm Component

Complete signup form with validation and social login.

**File**: `src/components/signup_page/SignupForm.tsx`

**Props**: None

**Features**:
- Form validation
- Social login integration
- Responsive design
- Smooth animations
- Error handling

**Form Fields**:
- Full Name (required)
- Email Address (required)
- Password (required)

**Usage**:
```tsx
import SignupForm from '../components/signup_page/SignupForm';

function RightPanel() {
  return (
    <div>
      <SignupForm />
    </div>
  );
}
```

**Styling**:
- Input fields: Rounded with focus states
- Buttons: Consistent with design system
- Spacing: Responsive margins and padding
- Colors: Brand color scheme

## Layout Components

### SectionContainer Component

Wrapper component for page sections.

**File**: `src/components/homepage/SectionContainer.tsx`

**Props**:
```typescript
interface Props {
  children: React.ReactNode;
  className?: string;
}
```

**Usage**:
```tsx
import SectionContainer from '../components/homepage/SectionContainer';

function FeaturesSection() {
  return (
    <SectionContainer className="py-20">
      {/* Section content */}
    </SectionContainer>
  );
}
```

### SectionTitle Component

Consistent section headings.

**File**: `src/components/homepage/SectionTitle.tsx`

**Props**:
```typescript
interface Props {
  children: React.ReactNode;
  className?: string;
}
```

**Usage**:
```tsx
import SectionTitle from '../components/homepage/SectionTitle';

function FeaturesSection() {
  return (
    <div>
      <SectionTitle>Key Features</SectionTitle>
      {/* Section content */}
    </div>
  );
}
```

## Styling Guidelines

### Color System

```css
/* Primary Colors */
--primary-orange: #E56E0C;
--primary-blue: #333F72;
--background: #faf5ef;

/* Usage */
.text-primary { color: #E56E0C; }
.bg-primary { background-color: #333F72; }
.bg-background { background-color: #faf5ef; }
```

### Typography Scale

```css
/* Responsive Typography */
.text-responsive {
  font-size: 1rem;        /* 16px */
}

@media (min-width: 640px) {
  .text-responsive {
    font-size: 1.125rem;   /* 18px */
  }
}

@media (min-width: 1024px) {
  .text-responsive {
    font-size: 1.25rem;    /* 20px */
  }
}
```

### Spacing System

```css
/* Consistent Spacing */
.spacing-xs { margin: 0.5rem; }    /* 8px */
.spacing-sm { margin: 1rem; }      /* 16px */
.spacing-md { margin: 1.5rem; }     /* 24px */
.spacing-lg { margin: 2rem; }      /* 32px */
.spacing-xl { margin: 3rem; }      /* 48px */
```

### Component Patterns

#### Button Pattern
```tsx
// Primary Button
<button className="bg-[#E56E0C] text-white px-6 py-3 rounded-lg hover:bg-[#d46310] hover:scale-105 transition-all duration-300 shadow-md">
  Primary Action
</button>

// Secondary Button
<button className="border-2 border-[#333F72]/20 text-[#333F72] px-6 py-3 rounded-lg hover:border-[#333F72] hover:bg-[#333F72] hover:text-white transition-all duration-300">
  Secondary Action
</button>
```

#### Input Pattern
```tsx
<input 
  className="w-full py-3 px-4 border-2 border-[#333F72]/20 rounded-lg text-base transition-all outline-none bg-white/80 backdrop-blur-sm focus:border-[#E56E0C] focus:shadow-[0_0_0_3px_rgba(229,110,12,0.1)] focus:bg-white/95"
  placeholder="Enter your text"
/>
```

#### Card Pattern
```tsx
<div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50">
  {/* Card content */}
</div>
```

## Best Practices

### Component Design
1. **Single Responsibility**: Each component should have one clear purpose
2. **Props Interface**: Always define TypeScript interfaces for props
3. **Default Props**: Provide sensible defaults where appropriate
4. **Error Boundaries**: Wrap components that might fail
5. **Accessibility**: Include proper ARIA labels and keyboard navigation

### Styling Guidelines
1. **Tailwind First**: Use Tailwind utilities before custom CSS
2. **Responsive Design**: Always consider mobile-first approach
3. **Consistent Spacing**: Use the defined spacing scale
4. **Color Consistency**: Stick to the brand color palette
5. **Performance**: Minimize custom CSS and use CSS-in-JS sparingly

### Performance Considerations
1. **Lazy Loading**: Use React.lazy() for large components
2. **Memoization**: Use React.memo() for expensive components
3. **Bundle Splitting**: Split components by route
4. **Image Optimization**: Use appropriate image formats and sizes
5. **Code Splitting**: Implement route-based code splitting

## Testing Components

### Unit Testing
```tsx
import { render, screen } from '@testing-library/react';
import StyledButton from '../components/homepage/StyledButton';

test('renders button with correct text', () => {
  render(<StyledButton>Test Button</StyledButton>);
  expect(screen.getByText('Test Button')).toBeInTheDocument();
});
```

### Integration Testing
```tsx
import { render, screen, fireEvent } from '@testing-library/react';
import SignupForm from '../components/signup_page/SignupForm';

test('submits form with valid data', () => {
  render(<SignupForm />);
  
  fireEvent.change(screen.getByPlaceholderText('Full Name'), {
    target: { value: 'John Doe' }
  });
  
  fireEvent.click(screen.getByText('Start Free Trial'));
  
  // Assert form submission
});
```

## Component Library

For a complete list of available components and their usage, see the [Storybook documentation](http://localhost:6006) (when available).

## Contributing

When adding new components:

1. Follow the existing naming conventions
2. Include proper TypeScript types
3. Add responsive design considerations
4. Include accessibility features
5. Write comprehensive documentation
6. Add unit tests
7. Update this documentation

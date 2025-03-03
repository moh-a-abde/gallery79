# Gallery79 - Crafting Digital Experiences with Precision & Purpose

![Gallery79 Logo](/public/gallery-icon.svg)

A curated collection of projects showcasing attention to detail, thoughtful design, and technical excellence.

## Project Overview

Gallery79 is a modern, responsive web application designed to showcase creative projects with a focus on beautiful UI/UX. The site features a carefully crafted design system with smooth animations, thoughtful interactions, and an intuitive browsing experience.

**Live URL**: https://lovable.dev/projects/87b8f47c-981d-4f77-ac2a-a6073a245167

## UI/UX Design Principles

### Visual Language

Gallery79 implements a cohesive visual language with the following characteristics:

- **Modern Aesthetic**: Clean, minimalist design with ample whitespace and subtle animations
- **Responsive Layout**: Fully responsive design that works seamlessly across all devices
- **Thoughtful Animations**: Subtle entrance animations, hover effects, and transitions enhance the user experience without being distracting
- **Accessibility**: High contrast text, semantic HTML, and keyboard-navigable interfaces
- **Gradient Accents**: Subtle gradient effects add depth and visual interest

### User Experience Features

- **Smart Navbar**: Auto-hiding navbar provides more screen real estate while scrolling, with smooth transitions when revealing
- **Intuitive Navigation**: Clear information hierarchy and consistent navigation patterns
- **Performant Loading**: Optimized asset loading with appropriate loading states
- **Interactive Elements**: Responsive interactive elements with clear hover and focus states
- **Lightbox Gallery**: Immersive image viewing experience for project details

## Core Components

### Layout Components

#### Navbar (`Navbar.tsx`)
- Smart-hiding navigation that responds to scroll direction
- Smooth animations and transitions
- Brand identity with hover effects

#### Hero (`Hero.tsx`)
- Attention-grabbing introduction section
- Animated entrance effects
- Clear call-to-action buttons
- Decorative background grid with mask effect

#### Footer (`Footer.tsx`)
- Comprehensive footer with navigation links and social media connections
- Gradient accents and visual styling consistent with site theme

### Content Components

#### FeaturedProjects (`FeaturedProjects.tsx`)
- Carousel showcase for highlighted projects
- Built with Embla Carousel for smooth touch interactions
- Navigation controls and pagination indicators
- Click-through functionality to project details

#### ProjectGrid (`ProjectGrid.tsx`)
- Responsive grid layout for displaying all projects
- Supports filtering capabilities for project discovery
- Smooth entrance animations

#### ProjectCard (`ProjectCard.tsx`)
- Visual card representation of individual projects
- Displays key project information including:
  - Project thumbnail
  - Title and description
  - Technology stack with icons
  - Category tags
- Interactive hover effects
- Consistent styling with animation effects

#### FilterBar (`FilterBar.tsx`)
- Interactive filtering system for projects
- Category and technology filtering options
- Visual feedback for selected filters

### Page Components

#### Index (`Index.tsx`)
- Main landing page combining hero, featured projects, and project grid
- Background decorative elements
- Smooth page transitions

#### ProjectDetails (`ProjectDetails.tsx`)
- Comprehensive project showcase with:
  - Large feature images
  - Image gallery with lightbox functionality
  - Detailed project information and descriptions
  - Technology stack breakdown
  - Related projects recommendations
- Smooth animations and transitions

#### NotFound (`NotFound.tsx`)
- Friendly 404 error page
- Helpful navigation options to return to main content

## Technical Implementation

### Technology Stack

- **Framework**: React 18 with TypeScript
- **Routing**: React Router DOM v6
- **Styling**: Tailwind CSS with custom animations
- **UI Components**: shadcn/ui (based on Radix UI)
- **Carousel**: Embla Carousel
- **Build System**: Vite
- **State Management**: React Query
- **Form Handling**: React Hook Form with Zod validation

### Key Design Features

- **Custom Animations**: Hand-crafted CSS animations for smooth, performant transitions
- **Responsive Design**: Mobile-first approach ensuring compatibility across all device sizes
- **Gradient Effects**: Subtle gradient elements enhance visual appeal
- **Background Elements**: Decorative background elements add depth without cluttering the UI
- **Micro-interactions**: Small, delightful interactions throughout the interface

## Getting Started

### Prerequisites

- Node.js (v16+)
- npm or bun

### Installation

```sh
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd gallery79

# Install dependencies
npm install
# or
bun install

# Start development server
npm run dev
# or
bun dev
```

The application will be available at `http://localhost:5173`

### Building for Production

```sh
npm run build
# or
bun run build
```

## Deployment

This project can be deployed via:

1. **Lovable Platform**: Open [Lovable](https://lovable.dev/projects/87b8f47c-981d-4f77-ac2a-a6073a245167) and click on Share -> Publish.

2. **Custom Deployment**: Build the project and deploy to your preferred hosting service:
   - Netlify
   - Vercel
   - GitHub Pages
   - Any static hosting service

## Contributing

1. Clone the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Built with ❤️ using React, Tailwind CSS, and shadcn/ui

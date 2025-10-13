# 🍙 Onigiri - Japanese Learning Platform

A modern, interactive Japanese learning platform designed to make JLPT preparation addictive and effective. Currently in **frontend development phase** - built with React, TypeScript, and Tailwind CSS.

## 🌟 Current Features

- **Responsive Landing Page**: Beautiful homepage with parallax effects and modern design
- **Signup Page**: Clean, mobile-optimized registration form
- **Modern UI/UX**: Clean, intuitive interface with Japanese-inspired design
- **Mobile-First Design**: Fully responsive across all devices
- **Component Library**: Reusable React components with TypeScript

## 🚧 Development Status

**Current Phase**: Frontend Development
- ✅ Homepage with hero section and features
- ✅ Signup page with responsive design
- ✅ Component architecture and styling system
- 🔄 Backend API (planned)
- 🔄 User authentication (planned)
- 🔄 Learning content system (planned)

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Onigiri
   ```

2. **Install dependencies**
   ```bash
   cd client
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 📁 Project Structure

```
Onigiri/
├── client/                          # Frontend React application
│   ├── src/
│   │   ├── components/             # Reusable UI components
│   │   │   ├── homepage/           # Homepage-specific components
│   │   │   └── signup_page/        # Signup page components
│   │   ├── pages/                  # Page components
│   │   ├── routes/                 # Routing configuration
│   │   ├── assets/                 # Static assets (images, SVGs)
│   │   └── styles/                 # Global styles
│   ├── public/                     # Public static files
│   └── package.json               # Dependencies and scripts
└── README.md                       # Project documentation
```

## 🛠️ Tech Stack

### Frontend (Current)
- **React 19** - Modern React with latest features
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS 4** - Utility-first CSS framework
- **React Router DOM** - Client-side routing
- **Vite** - Fast build tool and dev server

### Development Tools
- **ESLint** - Code linting and formatting
- **TypeScript ESLint** - TypeScript-specific linting rules

### Planned Backend (Future)
- **Node.js/Express** - Backend API server
- **PostgreSQL** - Database for user data and content
- **JWT** - Authentication system
- **Google OAuth** - Social login integration

## 🎨 Design System

### Color Palette
- **Primary Orange**: `#E56E0C` - Main brand color for CTAs and accents
- **Dark Blue**: `#333F72` - Primary text and navigation
- **Background**: `#faf5ef` - Warm, off-white background
- **Accent Colors**: Various gradients for visual elements

### Typography
- **Headings**: Bold, scalable typography with responsive sizing
- **Body Text**: Clean, readable fonts with proper line heights
- **Japanese Text**: Proper font support for Japanese characters

### Components
- **Buttons**: Rounded corners with hover effects and smooth transitions
- **Forms**: Clean input fields with focus states and validation
- **Cards**: Subtle shadows and rounded corners for content sections

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- **Mobile**: `< 640px` - Stacked layout, compact spacing
- **Small**: `640px+` - Slightly larger elements
- **Medium**: `768px+` - Better proportions
- **Large**: `1024px+` - Side-by-side layouts
- **Extra Large**: `1280px+` - Full desktop experience

## 🧩 Component Architecture

### Homepage Components
- `Hero` - Main hero section with parallax effects
- `FeaturesSection` - Feature highlights
- `TestimonialsSection` - User testimonials
- `CTASection` - Call-to-action section
- `Navbar` - Navigation header
- `Footer` - Site footer

### Signup Page Components
- `LeftPanel` - Visual panel with background image
- `RightPanel` - Form panel
- `SignupForm` - Registration form with validation

## 🚀 Available Scripts

```bash
# Development
npm run dev          # Start development server

# Building
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
```

## 🌐 Deployment (Frontend Only)

### Build for Production
```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment to any static hosting service.

### Current Deployment Options
- **Vercel**: Connect your GitHub repository for automatic deployments
- **Netlify**: Drag and drop the `dist` folder or connect via Git
- **GitHub Pages**: Use GitHub Actions for automated deployment
- **AWS S3**: Upload the `dist` folder to an S3 bucket

### Live Demo
The current frontend is deployed at: **onigiri-project.com**

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Use meaningful component and variable names
- Write responsive CSS with Tailwind utilities
- Test on multiple screen sizes
- Follow the existing code style and patterns

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Japanese learning community for inspiration
- React and TypeScript communities for excellent tooling
- Tailwind CSS team for the amazing utility framework

## 📞 Support

For support, email support@onigiri-app.com or join our Discord community.

---

**Made with ❤️ for Japanese learners worldwide**

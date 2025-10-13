# 🚀 Setup and Installation Guide

## Prerequisites

Before setting up the Onigiri project, ensure you have the following installed:

### Required Software
- **Node.js**: Version 18.0.0 or higher
- **npm**: Version 8.0.0 or higher (comes with Node.js)
- **Git**: For version control

### Recommended Software
- **VS Code**: With TypeScript and Tailwind CSS extensions
- **Chrome DevTools**: For debugging
- **Postman**: For API testing (if backend is implemented)

## Installation Steps

### 1. Clone the Repository

```bash
# Clone the repository
git clone https://github.com/your-username/onigiri.git

# Navigate to the project directory
cd onigiri
```

### 2. Install Dependencies

```bash
# Navigate to the client directory
cd client

# Install all dependencies
npm install
```

### 3. Environment Setup

Create a `.env` file in the client directory:

```bash
# Create environment file
touch .env
```

Add the following environment variables:

```env
# API Configuration
VITE_API_BASE_URL=http://localhost:3000/api/v1
VITE_API_TIMEOUT=10000

# Authentication
VITE_JWT_SECRET=your-jwt-secret-key

# Google OAuth (if implemented)
VITE_GOOGLE_CLIENT_ID=your-google-client-id

# Analytics (optional)
VITE_GA_TRACKING_ID=your-google-analytics-id

# Feature Flags
VITE_ENABLE_ANALYTICS=false
VITE_ENABLE_DEBUG_MODE=true
```

### 4. Start Development Server

```bash
# Start the development server
npm run dev
```

The application will be available at `http://localhost:5173`

## Development Workflow

### Available Scripts

```bash
# Development
npm run dev          # Start development server with hot reload
npm run build        # Build for production
npm run preview      # Preview production build locally
npm run lint         # Run ESLint for code quality
npm run lint:fix     # Fix ESLint issues automatically
```

### Project Structure

```
onigiri/
├── client/                    # Frontend React application (Current)
│   ├── src/
│   │   ├── components/       # Reusable components
│   │   │   ├── homepage/     # Homepage-specific components
│   │   │   └── signup_page/  # Signup page components
│   │   ├── pages/            # Page components
│   │   ├── routes/           # Routing configuration
│   │   ├── assets/           # Static assets
│   │   ├── styles/           # Global styles
│   │   ├── utils/            # Utility functions
│   │   ├── hooks/            # Custom React hooks
│   │   ├── types/            # TypeScript type definitions
│   │   └── constants/         # Application constants
│   ├── public/               # Public static files
│   ├── docs/                 # Documentation
│   ├── tests/                # Test files
│   └── package.json          # Dependencies and scripts
├── server/                   # Backend API (Planned for future)
├── docs/                    # Project documentation
└── README.md               # Project overview
```

## Configuration Files

### Vite Configuration (`vite.config.ts`)

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
    host: true
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  },
  resolve: {
    alias: {
      '@': '/src',
      '@components': '/src/components',
      '@pages': '/src/pages',
      '@assets': '/src/assets',
      '@utils': '/src/utils'
    }
  }
})
```

### TypeScript Configuration (`tsconfig.json`)

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"],
      "@components/*": ["src/components/*"],
      "@pages/*": ["src/pages/*"],
      "@assets/*": ["src/assets/*"],
      "@utils/*": ["src/utils/*"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

### Tailwind Configuration (`tailwind.config.js`)

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          orange: '#E56E0C',
          blue: '#333F72',
        },
        background: '#faf5ef',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
```

### ESLint Configuration (`eslint.config.js`)

```javascript
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
)
```

## Development Tools Setup

### VS Code Extensions

Install the following VS Code extensions for optimal development experience:

```json
{
  "recommendations": [
    "bradlc.vscode-tailwindcss",
    "ms-vscode.vscode-typescript-next",
    "esbenp.prettier-vscode",
    "ms-vscode.vscode-eslint",
    "formulahendry.auto-rename-tag",
    "christian-kohler.path-intellisense",
    "ms-vscode.vscode-json"
  ]
}
```

### VS Code Settings

Create `.vscode/settings.json`:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "emmet.includeLanguages": {
    "typescript": "html",
    "typescriptreact": "html"
  },
  "tailwindCSS.includeLanguages": {
    "typescript": "html",
    "typescriptreact": "html"
  },
  "tailwindCSS.experimental.classRegex": [
    ["cva\\(([^)]*)\\)", "[\"'`]([^\"'`]*).*?[\"'`]"],
    ["cx\\(([^)]*)\\)", "(?:'|\"|`)([^']*)(?:'|\"|`)"]
  ]
}
```

## Database Setup (Future Backend Implementation)

**⚠️ Note: The backend is not yet implemented. This section is for future reference when the backend is developed.**

### PostgreSQL Setup (Planned)

```bash
# Install PostgreSQL
# macOS
brew install postgresql
brew services start postgresql

# Ubuntu/Debian
sudo apt-get install postgresql postgresql-contrib
sudo systemctl start postgresql

# Create database
createdb onigiri_dev
createdb onigiri_test
```

### Environment Variables for Database (Planned)

```env
# Database Configuration (Future)
DATABASE_URL=postgresql://username:password@localhost:5432/onigiri_dev
DATABASE_TEST_URL=postgresql://username:password@localhost:5432/onigiri_test
DATABASE_POOL_SIZE=10
```

## Testing Setup

### Install Testing Dependencies

```bash
npm install --save-dev @testing-library/react @testing-library/jest-dom @testing-library/user-event vitest jsdom
```

### Vitest Configuration (`vitest.config.ts`)

```typescript
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
  },
})
```

### Test Setup File (`src/test/setup.ts`)

```typescript
import '@testing-library/jest-dom'
```

## Deployment Setup

### Vercel Deployment

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```

3. **Environment Variables**: Set in Vercel dashboard

### Netlify Deployment

1. **Build Command**: `npm run build`
2. **Publish Directory**: `dist`
3. **Environment Variables**: Set in Netlify dashboard

### Docker Setup (Optional)

Create `Dockerfile`:

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "preview"]
```

## Troubleshooting

### Common Issues

#### 1. Port Already in Use
```bash
# Kill process on port 5173
lsof -ti:5173 | xargs kill -9

# Or use different port
npm run dev -- --port 3000
```

#### 2. Node Modules Issues
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

#### 3. TypeScript Errors
```bash
# Restart TypeScript server in VS Code
# Cmd/Ctrl + Shift + P -> "TypeScript: Restart TS Server"
```

#### 4. Tailwind CSS Not Working
```bash
# Ensure Tailwind is properly configured
# Check tailwind.config.js and ensure content paths are correct
```

### Performance Optimization

#### 1. Bundle Analysis
```bash
# Install bundle analyzer
npm install --save-dev rollup-plugin-visualizer

# Analyze bundle size
npm run build
```

#### 2. Image Optimization
- Use WebP format for images
- Implement lazy loading
- Use appropriate image sizes

#### 3. Code Splitting
- Implement route-based code splitting
- Use React.lazy() for large components

## Getting Help

- **Documentation**: Check the `/docs` folder
- **Issues**: Create GitHub issues for bugs
- **Discussions**: Use GitHub Discussions for questions
- **Email**: Contact support@onigiri-app.com

## Next Steps

After setup:

1. **Explore Components**: Check `/src/components` for available components
2. **Read Documentation**: Review component and API documentation
3. **Run Tests**: Execute `npm test` to ensure everything works
4. **Start Coding**: Begin implementing features following the established patterns
5. **Contribute**: Follow the contributing guidelines in the main README

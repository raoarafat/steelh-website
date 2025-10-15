# Steel Horizon Solutions Website

A modern, responsive website built with Next.js 15, React 19, and Tailwind CSS. This project uses the latest web technologies and follows best practices for performance and user experience.

Steel Horizon Solutions connects businesses with exceptional IT professionals worldwide, enabling remote work excellence and digital innovation.

## 🚀 Features

- Built with Next.js 15 and React 19
- Styled with Tailwind CSS
- Type-safe with TypeScript
- Modern UI components using Radix UI
- Responsive design
- Dark mode support
- Form handling with React Hook Form
- Data validation with Zod
- Beautiful animations with Tailwind CSS Animate
- Interactive charts with Recharts
- Toast notifications with Sonner
- Date handling with date-fns
- Carousel functionality with Embla Carousel
- HubSpot integration for chat and forms

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **pnpm** (Package manager) - Install globally:
  ```bash
  npm install -g pnpm
  ```

## 🛠️ Installation

1. **Clone the repository:**

```bash
git clone [your-repository-url]
cd steelh-website
```

2. **Install dependencies:**

```bash
pnpm install
```

This will install all required packages listed in `package.json`.

3. **Environment variables (optional):**

Create a `.env.local` file in the root directory if you need environment variables:

```bash
# Example environment variables
NEXT_PUBLIC_HUBSPOT_PORTAL_ID=your_portal_id
NEXT_PUBLIC_HUBSPOT_FORM_ID=your_form_id
```

## 🚀 Development

To start the development server with hot reload:

```bash
pnpm dev
```

The application will be available at **http://localhost:3000**

Changes to your code will automatically refresh the browser.

## 🏗️ Build for Production

To create an optimized production build:

```bash
pnpm build
```

This command:

- Compiles TypeScript
- Optimizes and bundles your code
- Generates static pages where possible
- Creates a `.next` folder with production-ready files

## 🚀 Run Production Build

To run the production build locally:

```bash
pnpm start
```

**Note:** You must run `pnpm build` first before using this command.

The production server will start at **http://localhost:3000**

## 📝 Available Scripts

| Command      | Description                                  |
| ------------ | -------------------------------------------- |
| `pnpm dev`   | Start development server with hot reload     |
| `pnpm build` | Create optimized production build            |
| `pnpm start` | Run production server (requires build first) |
| `pnpm lint`  | Run ESLint to check code quality             |
| `pnpm clean` | Remove build artifacts (.next folder)        |

## 🔄 Complete Workflow

```bash
# 1. Install dependencies (first time only)
pnpm install

# 2. Run development server
pnpm dev

# 3. When ready for production
pnpm build

# 4. Test production build locally
pnpm start
```

## 🐛 Troubleshooting

### Port Already in Use

If port 3000 is already in use, you can specify a different port:

```bash
pnpm dev -- -p 3001
```

### Clear Build Cache

If you encounter build issues, try cleaning the build:

```bash
pnpm clean
pnpm build
```

### Missing Dependencies

If you get dependency errors, try reinstalling:

```bash
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

## 🏗️ Project Structure

```
├── app/              # Next.js app directory
├── components/       # Reusable UI components
├── hooks/           # Custom React hooks
├── lib/             # Utility functions and configurations
├── public/          # Static assets
├── styles/          # Global styles
└── types/           # TypeScript type definitions
```

## 🛠️ Tech Stack

- **Framework:** Next.js 15
- **UI Library:** React 19
- **Styling:** Tailwind CSS
- **Type Safety:** TypeScript
- **UI Components:** Radix UI
- **Form Handling:** React Hook Form
- **Validation:** Zod
- **Charts:** Recharts
- **Date Handling:** date-fns
- **Animations:** Tailwind CSS Animate
- **Notifications:** Sonner
- **Carousel:** Embla Carousel

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Authors

- Your Name - Initial work

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Radix UI for the accessible components
- Tailwind CSS for the utility-first CSS framework

# Segurança na APS (Primary Healthcare Security)

## Overview
A Next.js web application focused on patient safety in primary healthcare settings. The app provides categories for healthcare safety topics including patient safety, patient identification, communication, surgical procedures, fall prevention, and vaccination/pharmacovigilance.

## Project Architecture
- **Framework**: Next.js 15.2.4 with App Router
- **Language**: TypeScript
- **UI**: React 19, Radix UI components, Tailwind CSS 4
- **Package Manager**: pnpm
- **Styling**: Tailwind CSS with tw-animate-css animations

## Directory Structure
- `/app` - Next.js App Router pages and layouts
  - `/app/categoria` - Category-related pages
  - `/app/recursos` - Resources pages
- `/components` - Reusable UI components (shadcn/ui based)
- `/lib` - Utility functions
- `/public` - Static assets
- `/styles` - Global styles

## Development
- **Dev Server**: `pnpm dev` (runs on port 5000)
- **Build**: `pnpm build`
- **Production**: `pnpm start`

## Configuration
- Next.js configured to allow all dev origins for Replit proxy compatibility
- Images are unoptimized for static deployment
- ESLint and TypeScript errors ignored during builds

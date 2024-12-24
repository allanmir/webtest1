# Savoria - Installation Guide

This guide provides instructions for setting up and deploying the Savoria food delivery application.

## Table of Contents
1. [Development Setup](#development-setup)
2. [Production Deployment](#production-deployment)
3. [Environment Variables](#environment-variables)
4. [Server Requirements](#server-requirements)

## Development Setup

### Prerequisites
- Node.js (v18 or higher)
- npm (v8 or higher)

### Installation Steps
1. Clone the repository:
```bash
git clone <repository-url>
cd savoria
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Production Deployment

### Building the Application
1. Create a production build:
```bash
npm run build
```

2. The build output will be in the `dist` directory

### Deployment Options

#### Option 1: Netlify (Recommended)
1. Push your code to a Git repository
2. Connect your repository to Netlify
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

#### Option 2: Static Hosting
1. Upload the contents of the `dist` directory to your web server
2. Configure your web server to serve the application:

Apache configuration example:
```apache
<VirtualHost *:80>
    ServerName yourdomain.com
    DocumentRoot /path/to/dist
    
    <Directory "/path/to/dist">
        RewriteEngine on
        RewriteCond %{REQUEST_FILENAME} !-f
        RewriteCond %{REQUEST_FILENAME} !-d
        RewriteRule . /index.html [L]
    </Directory>
</VirtualHost>
```

Nginx configuration example:
```nginx
server {
    listen 80;
    server_name yourdomain.com;
    root /path/to/dist;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

## Server Requirements
- Node.js v18+ (for development)
- Modern web server (Apache, Nginx, etc.)
- HTTPS certificate (recommended for production)
- Minimum 512MB RAM
- 1GB storage space

## Environment Variables
Create a `.env` file in the root directory with the following variables:

```env
VITE_APP_TITLE=Savoria
VITE_API_URL=your-api-url
```

## Troubleshooting
If you encounter any issues:
1. Check Node.js version compatibility
2. Clear npm cache: `npm cache clean --force`
3. Delete `node_modules` and run `npm install` again
4. Ensure all environment variables are properly set
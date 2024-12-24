# Deployment Guide

This document outlines the steps for deploying Savoria to different hosting platforms.

## Netlify Deployment

1. Push your code to GitHub/GitLab/Bitbucket
2. Log in to Netlify
3. Click "New site from Git"
4. Choose your repository
5. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

### Custom Domain Setup
1. Go to Domain Settings in Netlify
2. Add your custom domain
3. Configure DNS settings:
   - Add CNAME record pointing to your Netlify URL
   - Or use Netlify DNS for automatic configuration

## Environment Variables
Configure the following in your hosting platform:

```
VITE_APP_TITLE=Savoria
VITE_API_URL=your-api-url
```

## SSL Configuration
- Netlify provides automatic SSL certificates
- For other platforms, use Let's Encrypt or commercial SSL providers

## Performance Optimization
1. Enable caching headers
2. Configure CDN (included with Netlify)
3. Enable Brotli/Gzip compression

## Monitoring
1. Set up error tracking (e.g., Sentry)
2. Configure performance monitoring
3. Set up uptime monitoring

## Backup Strategy
1. Regular repository backups
2. Database backups (if applicable)
3. Configuration backups
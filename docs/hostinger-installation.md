# Savoria - Hostinger Installation Guide

## Table of Contents
1. [Requirements](#requirements)
2. [Installation Steps](#installation-steps)
3. [Configuration](#configuration)
4. [Troubleshooting](#troubleshooting)

## Requirements
- Hostinger hosting account (or similar web hosting)
- FTP access or File Manager access
- Basic knowledge of web hosting management

## Installation Steps

### 1. Prepare the Files
Download and organize these files in your local computer:
```
savoria/
├── index.html
├── css/
│   └── style.css
└── js/
    └── main.js
```

### 2. Upload Files to Hostinger

#### Using File Manager:
1. Log in to Hostinger Control Panel
2. Go to File Manager
3. Navigate to `public_html` directory
4. Upload the files maintaining the same structure:
   - Upload `index.html` to root directory
   - Create a `css` folder and upload `style.css`
   - Create a `js` folder and upload `main.js`

#### Using FTP:
1. Use FileZilla or similar FTP client
2. Connect using your FTP credentials:
   - Host: your-domain.com
   - Username: provided by Hostinger
   - Password: your FTP password
   - Port: 21
3. Navigate to `public_html`
4. Upload files maintaining the directory structure

### 3. Domain Configuration
1. Go to Hostinger Control Panel
2. Navigate to "Domains"
3. Point your domain to the `public_html` directory
4. Wait for DNS propagation (can take up to 24 hours)

## Configuration

### SSL Certificate
1. Go to Hostinger Control Panel
2. Find "SSL/TLS" section
3. Enable "Free SSL" (Let's Encrypt)
4. Wait for certificate installation

### Cache Configuration
1. Go to "Advanced" settings
2. Enable LiteSpeed Cache
3. Configure cache rules:
```apache
<IfModule LiteSpeed>
   CacheLookup on
   CacheEnable public /
   CacheDefaultExpire 86400
   CacheMaxExpire 604800
   CacheIgnoreNoLastMod on
</IfModule>
```

### GZIP Compression
Create `.htaccess` file in root directory:
```apache
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html text/plain text/css application/javascript
    BrowserMatch ^Mozilla/4 gzip-only-text/html
    BrowserMatch ^Mozilla/4\.0[678] no-gzip
    BrowserMatch \bMSIE !no-gzip !gzip-only-text/html
</IfModule>
```

## Troubleshooting

### Common Issues

1. **White Screen / 500 Error**
   - Check file permissions:
     - Directories: 755
     - Files: 644
   - Review error logs in Hostinger panel

2. **CSS/JS Not Loading**
   - Verify file paths are correct
   - Check if files were uploaded to correct directories
   - Clear browser cache

3. **SSL Certificate Issues**
   - Wait 24 hours after installation
   - Force HTTPS in .htaccess:
```apache
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

### Performance Optimization
1. Enable Hostinger's built-in caching
2. Optimize images before upload
3. Minify CSS and JS files
4. Use Hostinger's CDN if available

### Support
- Hostinger Support: support@hostinger.com
- Documentation: https://www.hostinger.com/tutorials/
- Community Forum: https://www.hostinger.com/forum/

## Security Recommendations
1. Keep regular backups
2. Update passwords regularly
3. Enable Two-Factor Authentication
4. Monitor error logs
5. Use latest TLS version
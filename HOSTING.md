# Hosting Guide for Unitech Social Calendar

This guide covers deployment options and configurations for hosting the Unitech Social Calendar web application.

## Quick Start: Hosting Options

### 1. **Vercel (Recommended - Free)**
The easiest option for deployment with zero configuration needed.

**Steps:**
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click "New Project" and select this repository
4. Vercel auto-detects it's a static site and deploys automatically
5. Get a live URL instantly (e.g., `unitech-calendar.vercel.app`)

**Benefits:**
- Free tier with generous limits
- Automatic HTTPS
- Global CDN distribution
- Automatic deployments on git push
- Built-in analytics

### 2. **Netlify (Free)**
Another excellent option with similar features to Vercel.

**Steps:**
1. Go to [netlify.com](https://netlify.com) and sign in with GitHub
2. Click "New site from Git"
3. Select your repository
4. Deploy settings are auto-configured via `netlify.toml`
5. Site goes live automatically

**Benefits:**
- Free tier with generous bandwidth
- Automatic HTTPS
- Form handling included
- Deploy previews for PRs
- Built-in security headers

### 3. **GitHub Pages (Free)**
Host directly from your GitHub repository.

**Steps:**
1. Go to repository Settings > Pages
2. Source: Select "Deploy from a branch"
3. Branch: Select `main` and `/root` folder
4. Click Save
5. Site available at `https://adlucasdefcon-hue.github.io/university-event-scheduler`

**Limitations:**
- Limited customization
- No analytics included
- Slightly longer builds

### 4. **Traditional Web Hosting**
For hosting on Apache, Nginx, or other servers.

**Configuration Files Included:**
- `.htaccess` - Apache server configuration
- `netlify.toml` - CDN and routing rules

**Setup:**
1. FTP your files to your hosting provider
2. Ensure server supports `.htaccess` (Apache)
3. Configure domain DNS pointing to hosting

## Deployment Checklist

### Pre-Deployment
- [ ] Update domain references in `sitemap.xml` and `robots.txt`
- [ ] Update `manifest.json` with your actual domain
- [ ] Test all links and functionality locally
- [ ] Verify responsive design on mobile devices
- [ ] Check Google Chrome Lighthouse score (target: 90+)

### Post-Deployment
- [ ] Test site on all major browsers (Chrome, Firefox, Safari, Edge)
- [ ] Verify HTTPS is enabled
- [ ] Test on mobile devices
- [ ] Set up domain name (optional)
- [ ] Configure analytics (Google Analytics, Vercel Analytics, Netlify Analytics)
- [ ] Submit to Google Search Console
- [ ] Submit to Bing Webmaster Tools

## Configuration Files Explained

### `vercel.json`
Deployment configuration for Vercel platform.
- Defines static file routing
- Sets up caching headers for performance
- Configures environment variables

### `netlify.toml`
Deployment configuration for Netlify platform.
- Redirects all routes to index.html
- Sets security headers (CSP, X-Frame-Options, etc.)
- Configures cache control policies

### `.htaccess`
Apache server configuration for traditional hosting.
- Enables GZIP compression
- Sets browser caching headers
- Routes all requests to index.html

### `manifest.json`
Web App Manifest for Progressive Web App (PWA) features.
- Enables "Add to Home Screen" on mobile
- Defines app icons and splash screens
- Configures standalone mode

### `robots.txt`
Search engine crawler instructions.
- Allows indexing of public pages
- Disallows crawling of admin sections

### `sitemap.xml`
XML sitemap for search engines.
- Lists all important pages
- Specifies update frequency
- Sets page priorities

## Performance Optimization

### Already Included:
✅ CSS variables for small CSS file size
✅ Vanilla JavaScript (no framework overhead)
✅ Optimized SVG logos (inline, no HTTP requests)
✅ Responsive images and design
✅ Minimal dependencies

### Further Optimization:
1. Enable GZIP compression (in `.htaccess` or server settings)
2. Set up CDN for global distribution
3. Implement browser caching headers
4. Consider image optimization if adding images
5. Minify CSS and JavaScript (optional):
   ```bash
   npm install -D csso-cli terser
   npx csso styles.css -o styles.min.css
   npx terser script.js -o script.min.js
   ```

## Security Considerations

### HTTPS
- ✅ All recommended platforms provide free HTTPS
- Always use HTTPS URLs in production

### Content Security Policy (CSP)
Already set in `netlify.toml`. For other hosts, add headers:
```
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
```

### CORS Headers
Add if API endpoints are needed later:
```
Access-Control-Allow-Origin: https://yourdomain.com
Access-Control-Allow-Methods: GET, POST, OPTIONS
```

## Domain Setup

### Option 1: Use Platform-Provided Domain
- Vercel: `your-project-name.vercel.app`
- Netlify: `your-site-name.netlify.app`
- GitHub Pages: `username.github.io/university-event-scheduler`

### Option 2: Custom Domain
1. Purchase domain (GoDaddy, Namecheap, Google Domains, etc.)
2. Update DNS records:
   - For Vercel: Add CNAME records as shown in Vercel dashboard
   - For Netlify: Add nameservers from Netlify
   - For GitHub Pages: Add A record pointing to GitHub IPs
3. Update references in configuration files

## Analytics & Monitoring

### Option 1: Google Analytics
Add to `index.html` `<head>`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Option 2: Platform-Built-In Analytics
- **Vercel**: Dashboard > Analytics (built-in)
- **Netlify**: Dashboard > Analytics (built-in)
- **GitHub Pages**: Google Analytics required

## Troubleshooting

### Site Shows 404 Errors
**Solution:** Ensure routing is configured correctly
- Vercel: Check `vercel.json` routing rules
- Netlify: Verify `netlify.toml` redirects
- Apache: Confirm `.htaccess` is enabled

### Styles/Scripts Not Loading
**Solution:** Check MIME types and paths
- Ensure `styles.css` and `script.js` are in root
- Verify file permissions on server
- Check browser console for 404 errors

### Site Too Slow
**Solution:** Enable caching and compression
- Verify GZIP compression is active
- Check CDN is serving files globally
- Look at file sizes in browser DevTools

### Mobile Responsiveness Issues
**Solution:** Test and verify viewport settings
- Check `index.html` has proper meta viewport tag
- Test on multiple devices
- Use Chrome DevTools device emulation

## Environment Variables

Set these in your hosting platform's settings (if needed for future backend integration):

```
SITE_NAME=Unitech Social Calendar
SITE_URL=https://yourdomain.com
API_URL=https://api.yourdomain.com (future)
NOTIFICATION_SERVICE=firebase (future)
```

## Next Steps

1. **Choose hosting platform** (Vercel recommended for simplicity)
2. **Connect repository** to hosting platform
3. **Deploy** (usually automatic)
4. **Test** deployed site thoroughly
5. **Set up custom domain** (optional)
6. **Enable analytics** for user tracking
7. **Submit to search engines** for indexing
8. **Configure email notifications** (when backend is ready)

## Support & Resources

- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com)
- [GitHub Pages Docs](https://pages.github.com)
- [Web.dev Best Practices](https://web.dev)
- [Project Repository Issues](https://github.com/adlucasdefcon-hue/university-event-scheduler/issues)

## Version History

- **v1.0.0** - Initial hosting guide (2026-09-28)
  - Vercel, Netlify, and GitHub Pages support
  - Apache/traditional hosting configuration
  - Security and performance guidelines

---

**Last Updated:** 2026-09-28  
**Status:** Ready for Production Deployment

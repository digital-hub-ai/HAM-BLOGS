const fs = require('fs');
const path = require('path');
const { globSync } = require('glob');

// Function to generate sitemap
function generateSitemap() {
  const baseUrl = 'https://ham-blogs.vercel.app';
  const pagesDir = path.join(__dirname, '..', 'pages');
  
  // Get all page files
  const pageFiles = globSync('**/*.tsx', {
    cwd: pagesDir,
    ignore: ['node_modules/**', 'legacy-blogs/**', '_*.tsx', 'api/**']
  });
  
  // Generate URLs from page routes
  const urls = [];
  
  pageFiles.forEach(file => {
    // Convert file path to URL
    let route = file
      .replace(/\.tsx$/, '') // Remove .tsx extension
      .replace(/\/index$/, '/') // Handle index files
      .replace(/\/index\/$/, '/') // Handle index files in subdirectories
      .replace(/\[.*?\]/g, '*'); // Replace dynamic route parameters with wildcard for demonstration
    
    // Convert to proper URL format
    if (route === 'index') route = '/';
    if (route.startsWith('index/')) route = route.replace('index/', '/');
    
    // Skip API routes
    if (route.startsWith('api/')) return;
    
    // Convert dynamic routes to example static routes for sitemap
    route = route
      .replace(/\[postId\]/g, 'example-post-id')
      .replace(/\[id\]/g, 'example-id')
      .replace(/\[subcategory\]/g, 'example-subcategory')
      .replace(/\[.*?\]/g, 'dynamic-segment');
    
    const url = `${baseUrl}${route === '/' ? '' : route}`;
    urls.push(url);
  });
  
  // Add blog post URLs
  const blogPagesDir = path.join(__dirname, '..', 'pages', 'blog');
  const blogFiles = globSync('**/*.tsx', {
    cwd: blogPagesDir,
    ignore: ['node_modules/**', 'index.tsx', '[*].tsx'] // Exclude index and dynamic routes
  });
  
  blogFiles.forEach(file => {
    if (file === 'index.tsx') return;
    
    let route = file.replace(/\.tsx$/, '');
    const url = `${baseUrl}/blog/${route}`;
    urls.push(url);
  });
  
  // Add legacy blog URLs
  const legacyBlogDir = path.join(__dirname, '..', 'pages', 'legacy-blogs');
  if (fs.existsSync(legacyBlogDir)) {
    const legacyBlogFiles = globSync('**/*.tsx', {
      cwd: legacyBlogDir,
      ignore: ['node_modules/**']
    });
    
    legacyBlogFiles.forEach(file => {
      let route = file.replace(/\.tsx$/, '');
      const url = `${baseUrl}/legacy-blogs/${route}`;
      urls.push(url);
    });
  }
  
  // Create sitemap XML
  let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
  sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  // Add homepage
  sitemap += '  <url>\n';
  sitemap += '    <loc>' + baseUrl + '/</loc>\n';
  sitemap += '    <lastmod>' + new Date().toISOString().split('T')[0] + '</lastmod>\n';
  sitemap += '    <changefreq>daily</changefreq>\n';
  sitemap += '    <priority>1.0</priority>\n';
  sitemap += '  </url>\n';
  
  // Add other URLs
  urls.forEach(url => {
    if (url !== baseUrl + '/') { // Skip homepage as it's already added
      sitemap += '  <url>\n';
      sitemap += '    <loc>' + url + '</loc>\n';
      sitemap += '    <lastmod>' + new Date().toISOString().split('T')[0] + '</lastmod>\n';
      sitemap += '    <changefreq>weekly</changefreq>\n';
      sitemap += '    <priority>0.8</priority>\n';
      sitemap += '  </url>\n';
    }
  });
  
  sitemap += '</urlset>';
  
  // Write sitemap to public directory
  const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
  fs.writeFileSync(sitemapPath, sitemap);
  
  console.log(`Sitemap generated with ${urls.length + 1} URLs`);
  console.log(`Sitemap saved to: ${sitemapPath}`);
}

// Run the function
generateSitemap();
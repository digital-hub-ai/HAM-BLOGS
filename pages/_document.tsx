// pages/_document.tsx
import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  const siteUrl = 'https://ham-blogs.vercel.app';
  const siteName = 'HAM BLOGS - World\'s Largest Premium Blogging Platform';
  const description = 'Explore the world\'s largest premium blogging platform featuring cutting-edge technology, AI insights, and expert knowledge.';
  const defaultImage = `${siteUrl}/images/og-default.jpg`;
  const twitterHandle = '@ham_blogs';

  // JSON-LD structured data
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: siteName,
    url: siteUrl,
    description: description,
    publisher: {
      '@type': 'Organization',
      name: 'HAM BLOGS',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/logo.jpg`
      }
    }
  };

  return (
    <Html lang="en" className="scroll-smooth">
      <Head>
        {/* Character encoding */}
        <meta charSet="utf-8" />
        
        {/* Primary Meta Tags */}
        <meta name="title" content={siteName} />
        <meta name="description" content={description} />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#111827" />
        <meta name="google-site-verification" content="LBIeQN0P9NmMDc52HgxtMo-SAhmjBB3REjrhiK6yb3k" />
        
        {/* SEO Meta Tags */}
        <meta name="author" content="HAM BLOGS" />
        <meta name="copyright" content="HAM BLOGS" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="7 days" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="MobileOptimized" content="320" />
        
        {/* Telegram Mini App Verification Code */}
        <meta name="monetag" content="5c844fb179b9a983b54573c99cd9a620" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:title" content={siteName} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={defaultImage} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={twitterHandle} />
        <meta name="twitter:creator" content={twitterHandle} />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        
        {/* Performance optimizations */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        
        {/* Accessibility */}
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        
        {/* Accessibility improvements */}
        <meta name="application-name" content="HAM BLOGS" />
        <meta name="msapplication-TileColor" content="#111827" />
        
        {/* Telegram Mini App Verification Code - Required for monetization */}
        {/* Insert your specific Telegram verification code here */}
        {/* Example: Add the actual verification meta tag when you receive it from Telegram */}
        
        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-B2XMH8BRDT"
        />
        <Script
          id="google-analytics"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-B2XMH8BRDT');
            `
          }}
        />
        
        {/* Fonts with proper loading */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        
        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/png"
          sizes="32x32"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/png"
          sizes="180x180"
        />
      </Head>
      <body className="min-h-screen bg-gray-50 text-gray-900 antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
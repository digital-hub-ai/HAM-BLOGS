import type { AppProps } from 'next/app';
import { MockAuthProvider } from '../contexts/MockAuthContext';

import Layout from '../components/Layout/Layout';
import '../styles/globals.css';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import dynamic from 'next/dynamic';
import AdSense from '../components/AdSense';

// Dynamically import the CookieConsentBanner to avoid SSR issues
const CookieConsentBanner = dynamic(
  () => import('../components/CookieConsentBanner'),
  { ssr: false }
);

function MyApp({ Component, pageProps }: AppProps) {
  // Only include AdSense in production
  const isProduction = process.env.NODE_ENV === 'production';
  
  return (
    <>
      {isProduction && <AdSense />}
      <MockAuthProvider>
          <Layout>
            <Component {...pageProps} />
            <Analytics />
            <SpeedInsights />
            <CookieConsentBanner />
          </Layout>
      </MockAuthProvider>
    </>
  );
}

export default MyApp;
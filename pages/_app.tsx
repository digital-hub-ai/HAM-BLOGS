import type { AppProps } from 'next/app';
import { MockAuthProvider } from '../contexts/MockAuthContext';
import { ComparisonProvider } from '../contexts/ComparisonContext';
import Layout from '../components/Layout/Layout';
import '../styles/globals.css';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import dynamic from 'next/dynamic';

// Dynamically import the CookieConsentBanner to avoid SSR issues
const CookieConsentBanner = dynamic(
  () => import('../components/CookieConsentBanner'),
  { ssr: false }
);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <MockAuthProvider>
        <ComparisonProvider>
          <Layout>
            <Component {...pageProps} />
            <Analytics />
            <SpeedInsights />
            <CookieConsentBanner />
          </Layout>
        </ComparisonProvider>
      </MockAuthProvider>
    </>
  );
}

export default MyApp;
import { ReactNode } from 'react';
import dynamic from 'next/dynamic';
import Navbar from '../Navbar';
import Footer from '../Footer/Footer';

import CookieConsent from '../CookieConsent';



interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Navbar />
        <main className="container mx-auto px-4 py-8 flex-grow">
          {children}
        </main>
        <Footer />
        <CookieConsent />
      </div>
  );
};

export default Layout;
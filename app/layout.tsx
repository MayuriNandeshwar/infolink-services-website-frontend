import './globals.css';
import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingButtons from '@/components/layout/FloatingButtons';
import { ToastProvider } from '@/components/ui/toast';
import { getLocalBusinessSchema, getOrganizationSchema, SITE_URL } from '@/lib/structured-data';

const inter = { variable: '' };
const jakarta = { variable: '' };

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Infolink Services | Custom Software, AI & Cloud Solutions',
    template: '%s | Infolink Services',
  },
  description: 'Infolink Services is a Nagpur-based software development company delivering custom software, web & mobile apps, ERP/CRM, AI, and cloud solutions since 2010. 13+ years of engineering trusted partnerships.',
  keywords: ['software development company India', 'custom software development', 'ERP development', 'CRM development', 'AI solutions', 'cloud solutions', 'IT consulting', 'Nagpur software company', 'mobile app development'],
  authors: [{ name: 'Infolink Services' }],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Infolink Services | Custom Software, AI & Cloud Solutions',
    description: 'Custom software, web & mobile apps, ERP/CRM, AI, and cloud solutions — engineered by a Nagpur-based team with 13+ years of experience.',
    url: SITE_URL,
    type: 'website',
    locale: 'en_IN',
    siteName: 'Infolink Services',
    images: [
      {
        url: '/images/logo.jpeg',
        width: 1200,
        height: 630,
        alt: 'Infolink Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Infolink Services | Custom Software, AI & Cloud Solutions',
    description: 'Custom software, web & mobile apps, ERP/CRM, AI, and cloud solutions — engineered by a Nagpur-based team with 13+ years of experience.',
    images: ['/images/logo.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  themeColor: '#0f172a',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = getOrganizationSchema();
  const localBusinessSchema = getLocalBusinessSchema();

  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:bg-white focus:text-blue-700 focus:px-4 focus:py-2 focus:rounded-md focus:shadow-lg"
        >
          Skip to main content
        </a>
        <ToastProvider>
          <Navbar />
          <main id="main-content" className="pt-16">{children}</main>
          <Footer />
          <FloatingButtons />
        </ToastProvider>
      </body>
    </html>
  );
}

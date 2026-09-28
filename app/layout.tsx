import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { SmoothScroll } from '@/components/layout/SmoothScroll';
import { ClientLoaderWrapper } from '@/components/loading/ClientLoaderWrapper';
import { GlobalBackground } from '@/components/background/GlobalBackground';
import { ScrollProgress } from '@/components/navigation/ScrollProgress';
import { ScrollToTop } from '@/components/ui/ScrollToTop';
import { MobileQuickNav } from '@/components/navigation/MobileQuickNav';
import { portfolioData } from '@/data/portfolio';

const sansFont = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const monoFont = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});


export const metadata: Metadata = {
  title: 'Vrushabh B | Computer Science Student & Developer',
  description:
    'Portfolio of Vrushabh B, a Computer Science Engineering student at Rural Engineering College, Hulkoti, showcasing projects, technical skills, education, and development experience.',
  keywords: [
    'Vrushabh B',
    'Computer Science Student',
    'Rural Engineering College Hulkoti',
    'REC Hulkoti',
    'Full-Stack Developer',
    'Next.js Portfolio',
    'React Developer',
    'Karnataka Developer',
    'Engineering Student Portfolio',
  ],
  authors: [{ name: 'Vrushabh B' }],
  creator: 'Vrushabh B',
  metadataBase: new URL('https://vrushabh-b.vercel.app'),
  openGraph: {
    title: 'Vrushabh B | Computer Science Student & Developer',
    description:
      'Portfolio of Vrushabh B, a Computer Science Engineering student at Rural Engineering College, Hulkoti.',
    url: 'https://vrushabh-b.vercel.app',
    siteName: 'Vrushabh B Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vrushabh B | Computer Science Student & Developer',
    description:
      'Portfolio of Vrushabh B, Computer Science student at Rural Engineering College, Hulkoti.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: portfolioData.personal.name,
    jobTitle: portfolioData.personal.role,
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: portfolioData.personal.college,
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Hulkoti',
      addressRegion: 'Karnataka',
      addressCountry: 'India',
      postalCode: '588205',
    },
    url: 'https://vrushabh-b.vercel.app',
    sameAs: [
      portfolioData.personal.socials.github,
      portfolioData.personal.socials.linkedin,
      portfolioData.personal.socials.instagram,
    ],
  };

  return (
    <html lang="en" className={`dark scroll-smooth ${sansFont.variable} ${monoFont.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#05070f] text-gray-100 font-sans antialiased selection:bg-cyan-500/30 selection:text-white relative overflow-x-hidden min-h-screen">
        <ScrollProgress />
        <GlobalBackground />
        <ClientLoaderWrapper>
          <SmoothScroll>{children}</SmoothScroll>
        </ClientLoaderWrapper>
        <ScrollToTop />
        <MobileQuickNav />
      </body>
    </html>
  );
}

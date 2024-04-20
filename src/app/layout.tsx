import { createTheme, MantineProvider } from '@mantine/core';
import { Metadata } from 'next';
import * as React from 'react';

import '@mantine/core/styles.css';
import '@/styles/globals.css';
import '@mantine/tiptap/styles.css';

import HeroHeader from '@/components/HeroHeader/HeroHeader';

import Providers from '@/app/Providers';
import { siteConfig } from '@/constant/config';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  robots: { index: true, follow: true },
  // !STARTERCONF  you can generate your favicon from https://realfavicongenerator.net/
  // ! copy to /favicon folder
  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon-16x16.png',
    apple: '/favicon/apple-touch-icon.png',
  },
  manifest: `/favicon/site.webmanifest`,
  openGraph: {
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    //!STARTERCONF add your logo
    images: [``],
    type: 'website',
    locale: 'en_US',
  },
};

const theme = createTheme({});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <Providers>
        <MantineProvider theme={theme}>
          <body>
            <HeroHeader />
            {children}
          </body>
        </MantineProvider>
      </Providers>
    </html>
  );
}

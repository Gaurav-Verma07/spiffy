import { ColorSchemeScript, createTheme, MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { Metadata } from 'next';
import * as React from 'react';

import '@mantine/notifications/styles.css';
import '@mantine/core/styles.css';
import '@/styles/globals.css';
import '@mantine/tiptap/styles.css';

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

const theme = createTheme({
  fontFamily: 'Lato, sans-serif',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <ColorSchemeScript />
      </head>
      <Providers>
        <body>
          <MantineProvider theme={theme}>
            <Notifications />
            {children}
          </MantineProvider>
        </body>
      </Providers>
    </html>
  );
}

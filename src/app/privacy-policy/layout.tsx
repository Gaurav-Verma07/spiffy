import { Metadata } from 'next';
import * as React from 'react';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Please read carefully',
};

export default function ComponentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

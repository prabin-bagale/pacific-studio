import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import React from 'react';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Pacific Studios',
  description: 'Pacific Studios is a creative studio.',
};

/**
 * Solves equations of the form a * x = b.
 *
 * @example &lt;caption>Example usage of method1.&lt;/caption>
 * // returns 2
 * globalNS.method1(5, 10);
 * @returns {Number} Returns the value of x for the equation.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-neutral-black`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import SmoothScroll from '@/components/SmoothScroll';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Apex Dental Clinic',
  description: 'Gentle, Modern Dental Care For Your Entire Family',
  icons: {
    icon: '/icon.svg', // <--- Points directly to your new src/app/icon.svg!
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body suppressHydrationWarning>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
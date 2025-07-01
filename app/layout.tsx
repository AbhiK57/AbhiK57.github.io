import './globals.css';
import type { Metadata } from 'next';
import Navbar from './Navbar';

export const metadata: Metadata = {
  title: 'Abhinav Khanduja',
  description: 'Abhinav Khanduja\'s Website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 dark:bg-darkblue dark:text-white min-h-screen">
        <Navbar />
        {children}
      </body>
    </html>
  );
}

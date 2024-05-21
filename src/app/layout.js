import { Inter } from 'next/font/google';
import './globals.css';
import React from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Option Zero',
    content: 'width=device-width, initial-scale=1',
};

export const viewport = {
    initialScale: 1,
    width: 'device-width',
    maximumScale: 1,
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}

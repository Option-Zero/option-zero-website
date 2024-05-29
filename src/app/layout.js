import { Rubik } from 'next/font/google';
import './globals.css';
import React from 'react';

const rubik = Rubik({ subsets: ['latin'] });

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
            <body className={rubik.className}>{children}</body>
        </html>
    );
}

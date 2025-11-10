/** @type {import('next').NextConfig} */

const nextConfig = {
    // Enable static HTML export for GitHub Pages
    output: 'export',

    // Disable image optimization for static export
    images: {
        unoptimized: true,
    },

    // Note: Server-side redirects don't work with static export
    // Redirects are now handled via static HTML files in the out/ directory
    // Created redirect pages for: /portfolio, /book, /opendoorclimate, /sfc
};

export default nextConfig;

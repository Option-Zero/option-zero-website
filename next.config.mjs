/** @type {import('next').NextConfig} */

const nextConfig = {
    async redirects() {
        return [
            {
                source: '/portfolio',
                destination: 'https://docs.google.com/document/d/1Tl0Ly7_f9bOCm0icSl42669aUDiksADPQClUQ-D87dg',
                permanent: false,
            },
            {
                source: '/book',
                destination: 'https://calendar.app.google/XUJC9qDaSiQZW96C9',
                permanent: false,
            },
            {
                source: '/opendoorclimate',
                destination: 'https://calendar.app.google/jjHdiNBGzv4vcriS9',
                permanent: false,
            },
            {
                source: '/sfc',
                destination: 'https://www.terra.do/climate-change-courses/software-for-climate/',
                permanent: false,
            },
        ];
    },
};

export default nextConfig;

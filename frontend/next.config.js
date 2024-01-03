const withNextIntl = require('next-intl/plugin')();

module.exports = withNextIntl({
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.sanity.io',
                pathname: '**',
            },
        ],
    },
});

//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');

// This plugin is needed until this PR is merged.
// https://github.com/vercel/next.js/pull/23185
const { withLess } = require('@nx/next/plugins/with-less');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withLess,
  withNx,
];

module.exports = composePlugins(...plugins)(nextConfig);

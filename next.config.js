const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')
module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      /* development only config options here */
      distDir: 'build',
    }
  }

  return {
    /* config options for all phases except development here */
    distDir: 'build',
    serverRuntimeConfig: {
      // Will only be available on the server side
      mySecret: 'secret',
    },
    publicRuntimeConfig: {
      // Will be available on both server and client
      staticFolder: '/static',
      mySecret: process.env.MY_SECRET, // Pass through env variables
    },
  }
}

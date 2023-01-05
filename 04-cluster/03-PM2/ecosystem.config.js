module.exports = {
  apps: [
      {
          script: 'dist/index.js',
          watch: true,
          autorestart: true,
          instances: 3
      },
  ],
};
"use strict";

module.exports = {
  apps: [{
    script: 'dist/index.js',
    watch: true,
    autorestart: true,
    instances: max
  }]
};
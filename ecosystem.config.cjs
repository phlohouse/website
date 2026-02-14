module.exports = {
  apps: [
    {
      name: 'phlo-web',
      cwd: './web',
      script: 'npx',
      args: 'vite',
      autorestart: true,
    },
  ],
}

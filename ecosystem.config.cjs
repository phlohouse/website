module.exports = {
  apps: [
    {
      name: 'phlo-web',
      cwd: './web-next',
      script: 'npx',
      args: 'vite',
      autorestart: true,
    },
  ],
}

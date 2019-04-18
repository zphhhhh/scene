module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        useBuiltIns: "usage",
        corejs: {
          version: 3,
          proposals: true
        }
      }
    ]
  ],
  plugins: [
    "@babel/plugin-syntax-dynamic-import" // 为了支持动态引入
  ]
}

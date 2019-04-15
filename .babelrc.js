module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          browsers: [
            "> 1%",
            "last 2 versions",
            "not ie <= 8"
          ]
        },
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

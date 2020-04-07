# vuepress-plugin-live2d-cat

## How to use

1. install `npm i vuepress-plugin-live2d-cat -S`

2. add in `config.js`

```js
module.exports = {
  plugins: [
    "vuepress-plugin-live2d-cat",
  ]
}
```
## component
`<Cat theme=""/>`
theme is `dark`or`light`
```vue
<Cat :theme="theme" style="position:fixed;left:0;bottom:50px" />
```
## Tip

- This plugin supports `vuepress 1.x`
- This plugin displays a white and black cat based on the theme
- This plugin is adapted from vuepress-plugin-cat
## Demo

- https://artiely.gitee.io
- https://artiely.github.io
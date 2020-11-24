### Игра крестики нолики

#### сборка webpack4.44.2 с использованием react


###.babelrc

#### Чтобы не было ошибки компиляции
``
Module build failed (from ./node_modules/babel-loader/lib/index.js):
Error: Cannot find module '@babel/preset-plugin-proposal-class-properties' from '/Users/victorkasap/Desktop/localhost/_react_webpack_x_o'
...
``

``
Add @babel/plugin-proposal-class-properties (https://git.io/vb4SL) to the 'plugins' section of your Babel config to enable transformation.
...``
---
#### Выполнить установку плагина
 ``npm install --save-dev @babel/plugin-proposal-class-properties``

В файле `.babelrc` добавить плагин
```
{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
  ],
  "plugins": [
    "@babel/plugin-proposal-class-properties"
  ]
}
```

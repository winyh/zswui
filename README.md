<p align="center">
  <a href="https://winyh.github.io/zswui/">
    <img width="200" src="https://github.com/winyh/zswui/blob/master/public/snowman.svg">
  </a>
</p>

<h1 align="center">zswui</h1>

<p align="center">React UI组件库  代号：雪人</p>

<p align="center">

![](https://img.shields.io/npm/l/zswui) ![](https://img.shields.io/npm/v/zswui) ![](https://img.shields.io/npm/dm/zswui) ![](https://img.shields.io/github/issues/winyh/zswui) ![](https://img.shields.io/github/languages/code-size/winyh/zswui) ![](https://img.shields.io/github/stars/winyh/zswui) ![](https://img.shields.io/github/last-commit/winyh/zswui)

</p>


从零开始构建的 React UI 组件库，实现了组件开发测试预览，文档撰写，并打包发布到 npm 一些列功能，教程请查看 [wiki](https://github.com/winyh/zswui/wiki)

### 安装
```
npm install zswui
```

### 打包发布

```
npm run lib

npm login

npm publish
```

### 引用示例
```
import React, { Component } from 'react';
import { Button } from "zswui";

class App extends Component {
  render(){
    return (
      <div className="main">
        <Button> Hi, Boy! </Button>
      </div>
    );
  }
}

export default App;
```

### demo(文档待完善)

[https://winyh.github.io/zswui](https://winyh.github.io/zswui/)

```
winyh: github 的 username

zswui: github 的 仓库名
```

### 目录结构说明
`config` webpack 配置文件目录

`dist` 生产环境打包后生成的目录

`lib` 发布前打包后生成的目录

`public` 公共目录

`src` 开发主目录

components 组件库目录

`.babelrc` babel配置文件

`.gitignore` git忽略配置文件

`.npmignore` npm忽略文件

`package.json` 包依赖和脚本配置文件

`README.md` 说明文档

### 贡献代码
组件都在 components 目录下，单个组件用单个目录存放，在 components 目录下的 index.js 文件中集中对外抛出

可参考 button 组件

### 组件开发测试
引入了 [storybook](https://storybook.js.org/) 这个组件开发测试工具
以 button 组件为例
开发测试文件在src/stories/button/.stories.js

storybook 工具环境搭建请查看[wiki](https://github.com/winyh/zswui/wiki)

启动storybook工具（端口随机）
```
npm run storybook
```


### Todo List

* 用 Typescript 改写
* 实现 Vue 版本
* 中台模板 Zswui Admin
* 基于这个库实现可视化拖拽构建工具   


### 参考组件库

|  组件库   | 说明  |
|  ----  | ----  |
| [Ant Design](https://ant.design/index-cn)  | 服务于企业级产品的设计体系 |
| [Fusion](https://fusion.design/)  | 构建一套产品化设计系统和物料 |
| [Element](https://element.eleme.cn/2.0/#/zh-CN)  | 基于 Vue 2.0 PC端网站快速成型工具 |
| [Element](https://www.iviewui.com/)  | 基于 Vue.js 的高质量UI 组件库 |
| [Bootstrap](https://getbootstrap.com/)  | 响应式，移动优先的组件库和规范 |
| [Material-ui](https://material-ui.com/zh/) | 基于 Material Design 设计系统 |
| [Elastic](https://elastic.github.io/eui/#/)  | ... |
| [Semantic-ui](https://react.semantic-ui.com/)  | ... |
| [Belle](http://nikgraf.github.io/belle/#/?_k=niiywd)  | ... |
| [BluePrint](https://blueprintjs.com/)  | ... |
| [Grommet](https://v2.grommet.io/) | ... |
| [Baifendian](http://ui.baifendian.com/)  | ... |
| [React-weui](http://weui.github.io/react-weui/#/) | ... |
| [React-grid](https://github.com/STRML/react-grid-layout)  | ... |


### 徽章生成

[徽章](https://shields.io/)













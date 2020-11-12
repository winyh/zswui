<p align="center">
  <a href="https://winyh.github.io/zswui/">
    <img width="200" src="https://github.com/winyh/zswui/blob/master/public/snowman.svg">
  </a>
</p>

<h1 align="center">zswui</h1>

<p align="center">React UI组件库  代号：雪人</p>

<div align="center">

![](https://img.shields.io/npm/l/zswui) ![](https://img.shields.io/npm/v/zswui) ![](https://img.shields.io/npm/dm/zswui) ![](https://img.shields.io/github/issues/winyh/zswui) ![](https://img.shields.io/github/languages/code-size/winyh/zswui) ![](https://img.shields.io/github/stars/winyh/zswui) ![](https://img.shields.io/github/last-commit/winyh/zswui)

</div>

从零开始构建的 React UI 组件库.实现了组件开发测试预览，文档撰写，从零配置 webpack@5，打包发布到 npm 一系列功能，详细教程请查看 [wiki](https://github.com/winyh/zswui/wiki)

### 安装

```
npm install zswui
```

### 引入样式

```
import "zswui/lib/zswui.css"
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

[ winyh ], [ zswui ] 分别为 github 的 username 和仓库名

### 贡献代码

组件都在 components 目录下，单个组件用单个目录存放，在 components 目录下的 index.js 文件中集中对外抛出

可参考 button 组件

贡献代码规范请查看 [wiki](https://github.com/winyh/zswui/wiki)

### Todo List

- css 提取
- 组件实现按需加载(tree shaking 摇树)
- 用 Typescript 改写
- 中台模板 Zswui Admin
- 基于这个库实现可视化拖拽构建中台 [Vuegg](https://github.com/vuegg/vuegg) | [云凤蝶](https://www.yunfengdie.com/)

### 参考组件库

| 组件库                                                   | 说明                                       |
| -------------------------------------------------------- | ------------------------------------------ |
| [Ant Design](https://ant.design/index-cn)                | 服务于企业级产品的设计体系(本项目样式参考) |
| [Rsuite](https://rsuitejs.com/)                          | UI 规范参考\* (本项目样式结构参考)         |
| [Fusion](https://fusion.design/)                         | 构建一套产品化设计系统和物料               |
| [Element](https://element.eleme.cn/2.0/#/zh-CN)          | 基于 Vue 2.0 PC 端网站快速成型工具         |
| [iview](https://www.iviewui.com/)                        | 基于 Vue.js 的高质量 UI 组件库             |
| [Vuetify](https://vuetifyjs.com/zh-Hans/)                | 偏向于扁平简洁大气风格                     |
| [Bootstrap](https://getbootstrap.com/)                   | 响应式，移动优先的组件库和规范             |
| [Material-ui](https://material-ui.com/zh/)               | 基于 Material Design 设计系统              |
| [Semantic-ui](https://react.semantic-ui.com/)            | 偏向于扁平简洁大气风格                     |
| [Grommet](https://v2.grommet.io/)                        | 风格偏圆润                                 |
| [React-weui](http://weui.github.io/react-weui/#/)        | 微信体系 UI 风格                           |
| [React-grid](https://github.com/STRML/react-grid-layout) | 布局参考样式                               |

### License

zswui is [MIT licensed](https://opensource.org/licenses/MIT).

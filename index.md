---
layout: home

hero:
  name: 手撸解释器教程
  text: Crafting Interpreters 中文译本
  tagline: 用 Java 和 C 从零实现 Lox 语言的两种解释器 —— jlox 与 clox
  actions:
    - theme: brand
      text: 开始阅读
      link: /content/I.WELCOME
    - theme: alt
      text: 原书（英文）
      link: https://craftinginterpreters.com/

features:
  - title: 一条完整的实现路线
    details: 从扫描、解析到字节码虚拟机，每章结束都有一个可运行的完整解释器版本。
  - title: 两种实现，两种视角
    details: jlox 用 Java 的树遍历解释器讲解语义；clox 用 C 手写栈式虚拟机，直面前端工程的性能取舍。
  - title: 译文 + 原文对照
    details: 每章保留英文原文段落，与中文译文逐段对照，术语争议处附译者注。
---

## 怎么读这本书

1. 从 [导读](./content/I.WELCOME.md) 开始，先看作者对全书结构和阅读方式的说明。
2. 第一部分 [前言](./content/1.前言.md)、[领土地图](./content/2.领土地图.md)、[Lox 语言](./content/3.Lox语言.md) 建立整体框架。
3. 第二部分跟着 [扫描](./content/4.扫描.md) 一路做到 [继承](./content/13.继承.md)，得到完整的 jlox。
4. 第三部分从 [字节码块](./content/14.字节码块.md) 做到 [优化](./content/30.优化.md)，得到带垃圾回收的 clox。
5. 语法与生成的语法树类在 [附录 I](./content/附录I.md)、[附录 II](./content/附录II.md)。

## 关于本站

本站是本仓库译文的在线静态版本，由 VitePress 生成，内容与 `content/` 目录下的 Markdown 完全一致。
发现错译、漏译或排版问题，可直接在 [GitHub 仓库](https://github.com/xiehanff/craftinginterpreters_zh) 提 issue 或 PR。

原书英文版可免费在线阅读：[craftinginterpreters.com](https://craftinginterpreters.com/)，作者 Bob Nystrom，代码与正文以
[MIT 许可](https://github.com/munificent/craftinginterpreters/blob/master/LICENSE) 发布。

# craftinginterpreters_zh

《Crafting Interpreters》中文译本，用 Java（jlox）和 C（clox）各实现一个 Lox 解释器。

在线读：<https://xiehanff.github.io/craftinginterpreters_zh/>
原文：<https://craftinginterpreters.com/>

## 本地运行

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # 输出到 dist/
npm run preview  # 预览构建产物
```

推送 `main` 后由 GitHub Pages 自动发布（`.github/workflows/deploy.yml`）。换自定义域名时同步改 `.vitepress/config.mts` 里的 `base`。

## 目录

```text
book.json     章节顺序，站点侧边栏据此生成
content/      各章 Markdown 与配图（译文正文，不改动）
index.md      站点首页
.vitepress/   站点配置
```

渲染层兜底（不改正文）：`*<u>…</u>*` 这类交叉嵌套标签在解析前改写为合法嵌套；脚注里的大写 `<BR>` 转成 `<br>`。

## 章节

| # | 章节 | # | 章节 |
| --- | --- | --- | --- |
| I | [WELCOME](./content/I.WELCOME.md) | III | [A BYTECODE VIRTUAL MACHINE](./content/III.A_BYTECODE_VIRTUAL_MACHINE.md) |
| 1 | [前言](./content/1.前言.md) | 14 | [字节码块](./content/14.字节码块.md) |
| 2 | [领土地图](./content/2.领土地图.md) | 15 | [虚拟机](./content/15.虚拟机.md) |
| 3 | [Lox 语言](./content/3.Lox语言.md) | 16 | [按需扫描](./content/16.按需扫描.md) |
| II | [A TREE-WALK INTERPRETER](./content/II.A_TREE-WALK_INTERPRETER.md) | 17 | [编译表达式](./content/17.编译表达式.md) |
| 4 | [扫描](./content/4.扫描.md) | 18 | [值类型](./content/18.值类型.md) |
| 5 | [表示代码](./content/5.表示代码.md) | 19 | [字符串](./content/19.字符串.md) |
| 6 | [解析表达式](./content/6.解析表达式.md) | 20 | [哈希表](./content/20.哈希表.md) |
| 7 | [表达式求值](./content/7.表达式求值.md) | 21 | [全局变量](./content/21.全局变量.md) |
| 8 | [表达式和状态](./content/8.表达式和状态.md) | 22 | [局部变量](./content/22.局部变量.md) |
| 9 | [控制流](./content/9.控制流.md) | 23 | [来回跳转](./content/23.来回跳转.md) |
| 10 | [函数](./content/10.函数.md) | 24 | [调用和函数](./content/24.调用和函数.md) |
| 11 | [解析和绑定](./content/11.解析和绑定.md) | 25 | [闭包](./content/25.闭包.md) |
| 12 | [类](./content/12.类.md) | 26 | [垃圾回收](./content/26.垃圾回收.md) |
| 13 | [继承](./content/13.继承.md) | 27 | [类与实例](./content/27.类与实例.md) |
| ❧ | [后记](./content/后记.md) | 28 | [方法和初始化器](./content/28.方法和初始化器.md) |
| A1 | [Lox 语法](./content/附录I.md) | 29 | [超类](./content/29.超类.md) |
| A2 | [语法树类](./content/附录II.md) | 30 | [优化](./content/30.优化.md) |

勘误、术语统一、排版修正：直接提 issue 或 PR。

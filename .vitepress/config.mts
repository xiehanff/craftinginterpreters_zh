import { defineConfig } from 'vitepress'
import footnote from 'markdown-it-footnote'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const book = JSON.parse(fs.readFileSync(path.join(root, 'book.json'), 'utf-8'))
const contentDir = path.join(root, book.src || 'content')

/** 读取每章的一级标题作为侧边栏文字 */
function chapterTitle(file: string) {
  const md = fs.readFileSync(path.join(contentDir, file), 'utf-8')
  const line = md.split('\n').find((row) => row.startsWith('# '))
  if (!line) return file.replace(/\.md$/, '')
  return line
    .slice(2)
    .replace(/[*`_[\]<>]/g, '')
    .trim()
}

const link = (file: string) => `/content/${encodeURI(file.replace(/\.md$/, ''))}`

const groups: { text: string, items: { text: string, link: string }[] }[] = [
  { text: '第一部分 · 导论', items: [] },
  { text: '第二部分 · 树遍历解释器（jlox）', items: [] },
  { text: '第三部分 · 字节码虚拟机（clox）', items: [] },
  { text: '附录', items: [] }
]

let current = 0
for (const file of book.contents as string[]) {
  if (/^II\./i.test(file)) current = 1
  else if (/^III\./i.test(file)) current = 2
  else if (/^(后记|附录)/.test(file)) current = 3
  const text = chapterTitle(file)
  groups[current].items.push({ text, link: link(file) })
}

/**
 * 译文中大量使用 `*<u>说明</u>*` 的写法，渲染后得到交叉嵌套的
 * `<u><em>说明</u></em>`，浏览器能自动纠正，但 Vue 模板编译会直接报错。
 * 这里在解析前把它改写成正确的嵌套顺序，避免改动正文 Markdown。
 */
function uncrossInlineTags(md: any) {
  md.use(footnote)
  md.core.ruler.before('normalize', 'uncross-inline-tags', (state: any) => {
    state.src = state.src
      .replace(/\*<u>([^<\n]*?)<\/u>\*/g, '<u><em>$1</em></u>')
      .replace(/<u>\*([^<\n]*?)<\/u>\*/g, '<u><em>$1</em></u>')
      // 译者脚注里的 `<BR>` 大写会绕过 HTML 空元素判断，导致 Vue 模板报“缺少结束标签”
      .replace(/<(BR|HR|IMG)(\b[^>]*)>/g, (_m: string, tag: string, rest: string) => `<${tag.toLowerCase()}${rest}>`)
  })
}

export default defineConfig({
  lang: 'zh-CN',
  // GitHub Pages 项目站点地址：https://xiehanff.github.io/craftinginterpreters_zh/
  base: '/craftinginterpreters_zh/',
  title: book.title,
  description: `${book.subtitle} 中文译本 · ${book.translators.join('、')} 译`,
  srcExclude: ['README.md', 'docs/**', 'node_modules/**'],
  ignoreDeadLinks: true,
  cleanUrls: false,
  outDir: 'dist',
  markdown: {
    config: (md) => md.use(uncrossInlineTags)
  },
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '开始阅读', link: link('I.WELCOME.md') },
      { text: '原书', link: 'https://craftinginterpreters.com/' }
    ],
    sidebar: groups.map((group) => ({ text: group.text, collapsed: false, items: group.items })),
    outline: { level: [2, 3], label: '本页目录' },
    search: { provider: 'local' },
    docFooter: { prev: '上一章', next: '下一章' },
    editLink: {
      pattern: 'https://github.com/xiehanff/craftinginterpreters_zh/edit/main/:path',
      text: '帮助改进此页译文'
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/xiehanff/craftinginterpreters_zh' }],
    lastUpdated: { text: '最后更新于' },
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '目录',
    darkModeSwitchLabel: '主题',
    notFound: {
      title: '页面不存在',
      quote: '这一页还没有译文，或者链接写错了。',
      linkLabel: '回到首页',
      linkText: '返回首页'
    }
  }
})

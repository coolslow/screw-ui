module.exports = {
  title: 'Screw UI',
  description: '基于Vue.js 2.0的轻量级Web UI组件库',
  logo: 'screw.png',
  base: '/screw-ui/',
  port: 3001,
  // head: [
  //   ['/', { rel: 'icon', href: './public/screw.png' }]
  // ],
  themeConfig: {
    nav: [
      { text: 'Github', link: 'https://github.com/coolslow/screw-ui' }
    ],
    sidebar: [
      {
        title: '组件',
        path: '/guide/', // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1, // 可选的, 默认值是 1
        children: [

        ]
      }
    ],
    lastUpdated: '最后更新时间', // string | boolean
    // 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
    nextLinks: false,
    // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
    prevLinks: false
  },
  markdown: {

  },
  configureWebpack: {
    resolve: {
      alias: {
        // '@alias': 'path/to/some/dir'
      }
    }
  },
  // 当你使用自定义主题的时候，需要指定它。
  theme: undefined,
  // 指定额外的需要被监听的文件，文件变动将会触发 vuepress 重新构建，并实时更新。
  extraWatchFiles: []
}

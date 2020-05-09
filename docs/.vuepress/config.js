module.exports = {
  plugins: [
    '@vuepress/medium-zoom',
    '@vuepress/back-to-top',
    '@vuepress/nprogress',
  ],
  title: 'Hongha - Docs',
  description: 'Website that manages all documents',
  themeConfig: {
    nav: [
      { text: 'Trang chủ', link: '/' },
      { text: 'Hướng dẫn', link: '/guides/' },
    ],
    sidebar: [
      {
        title: 'Trang chủ',
        collapsable: false,
        children: [
          '/',
        ]
      },
      {
        title: 'Hướng dẫn',
        collapsable: false,
        children: [
          '/guides/',
          '/guides/acs/',
        ]
      }
    ],
  }
}
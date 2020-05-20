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
      {
        text: 'Hướng dẫn', items: [
            { text: 'Phần mềm cân ACS', link: '/guides/acs/'},
            { text: 'Phần mềm DMS', link: '/guides/dms/'},
            { text: 'Phần mềm kế toán Bravo', link: '/guides/bravo/'},

        ]
    }

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
          '/guides/dms/',
          '/guides/bravo/',
        ]
      }
    ],
    sidebarDepth: 3,    // extract to h4

    /*
      sidebarDepth: 2,    // extract to h3
      sidebar: 'auto',
    */
  
    lastUpdated: 'Last Updated',
    searchMaxSuggestions: 10,
  }
}
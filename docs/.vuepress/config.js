module.exports = {
    home: true,
    title: 'Dev Study',
    description: 'dev study blog',
    base: '/devstudy/',
    themeConfig: {
        repo: 'devstudyy/devstudy',
        editLinks: true,
        docsDir: 'docs',
        lastUpdated: 'Last Updated',
        search: true,
        sidebarDepth: 3,
        nav: [{
                text: 'Home',
                link: '/'
            },
            {
                text: '김유경',
                link: '/yukyung/'
            },
            {
                text: '황주리',
                link: '/jju/'
            }
        ],
        sidebar: {
            '/yukyung/': [{
                title: 'DOCUMENT',
                collapsable: true,
                children: [
                    'vuepress',
                    'markdown'
                ]
            }],
            '/jju/': [{
                title: 'DOCUMENT',
                collapsable: true,
                children: [
                    'python'
                ]
            }]
        }
    },
}
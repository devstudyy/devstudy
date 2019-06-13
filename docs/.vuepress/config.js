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
        },
        {
            text: '마성민',
            link: '/ma/'
        },
        {
            text: '백승빈',
            link: '/been/'
        },
            {
                text: '최승원',
                link: '/swchoi/'
            }
        ,{
            text: '윤종원',
            link: '/jjong/'
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
            }],
            '/ma/': [{
                title: 'DOCUMENT',
                collapsable: true,
                children: [
                    'JS-Handlebars', 'JS-Template'
                ]
            }],
            '/been/': [{
                title: 'DOCUMENT',
                collapsable: true,
                children: [
                    'meteor'
                ]
            }],
            '/swchoi/': [{
                title: 'DOCUMENT',
                collapsable: true,
                children: [
                    'SpringBatch'
                ]
            }],
            '/jjong/': [{
                title: 'DOCUMENT',
                collapsable: true,
            }]
        }
    },
}
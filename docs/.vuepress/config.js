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
        nav: [
              {
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
              },
              {
                  text: '윤종원',
                  link: '/jjong/'
              },
              {
                text: '강은지',
                items : [
                          {
                              text: 'JAVASCRIPT',
                              link: '/oriri/javascript/'
                          },
                          {
                            text: 'JAVA',
                            link: '/oriri/java/'
                          }
                ]
              }
        ],
        sidebar: {
            '/yukyung/': [
                          {
                            title: 'DOCUMENT',
                            collapsable: true,
                            children: [
                                'vuepress',
                                'markdown'
                            ]
                          }
            ],
            '/jju/': [
                        {
                          title: 'DOCUMENT',
                          collapsable: true,
                          children: [
                              'python'
                          ]
                        }
            ],
            '/ma/': [
                      {
                        title: 'DOCUMENT',
                        collapsable: true,
                        children: [
                            'JS-Handlebars', 'JS-Template'
                        ]
                    }
            ],
            '/been/': [
                        {
                          title: 'DOCUMENT',
                          collapsable: true,
                          children: [
                              'meteor'
                          ]
                      }
            ],
            '/swchoi/': [
                          {
                            title: 'DOCUMENT',
                            collapsable: true,
                            children: [
                                'SpringBatch'
                            ]
                        }
            ],
            '/jjong/': [
                          {
                            title: 'DOCUMENT',
                            collapsable: true,
                        }
                      ],
            '/oriri/javascript/': [
                                    {
                                        'title': 'DesignPattern', 
                                        'children': [
                                            '/oriri/javascript/designPattern/',
                                            '/oriri/javascript/designPattern/module',
                                            '/oriri/javascript/designPattern/singleton',
                                            '/oriri/javascript/designPattern/observer'
                                        ]
                                    }
            ],
          '/oriri/java/': [
                            {
                                'title': 'DesignPattern', 
                                'children': [
                                    '/oriri/java/designPattern/',
                                    '/oriri/java/designPattern/singleton',
                                    '/oriri/java/designPattern/strategy'
                                ]
                            }
          ]
        }
    },
}
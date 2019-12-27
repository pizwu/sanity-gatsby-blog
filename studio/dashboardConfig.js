export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e05cb0b64a22c6bb69759c8',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-s1y9afzg',
                  apiId: '0d305598-0f74-49b7-bc2f-8579686115e4'
                },
                {
                  buildHookId: '5e05cb0b64a22c23e89759cb',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-cgesa9xh',
                  apiId: '04437042-9874-4648-9931-6d879a6300a1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/pizwu/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-cgesa9xh.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}

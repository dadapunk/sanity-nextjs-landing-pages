export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '60da4b43fca04922c962fb74',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-2e2bms95',
                  apiId: 'ae2b03a8-4b16-4689-b829-7ba34af70b6b'
                },
                {
                  buildHookId: '60da4b44e5c2b92219830579',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-fxyp1u1h',
                  apiId: '1432f0c2-968f-4d03-843e-179d0fe270f6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dadapunk/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-fxyp1u1h.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}

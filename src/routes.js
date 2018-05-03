// eslint-disable

import React from 'react';
import { Route, IndexRoute, IndexRedirect } from 'react-router';
import App from './pages/App';

const handleRouteChange = () => {
  if (!(window.pathname === '/guidelines/content/glossary')) {
    window.scrollTo(0, 0);
  }
};

const errorLoading = err => {
  console.error('Page loading failed', err);
};

const loadRoute = cb => {
  return module => cb(null, module.default);
};

const routes = {
  path: '/',
  component: App,
  onChange: handleRouteChange,
  indexRoute: {
    getComponent(location, cb) {
      import('./pages/Overview').then(loadRoute(cb)).catch(errorLoading);
    },
  },
  childRoutes: [
    {
      path: 'introduction',
      indexRoute: {
        getComponent(location, cb) {
          import('./pages/Introduction').then(loadRoute(cb)).catch(errorLoading);
        },
      }
    },
    {
      path: 'styles',
      indexRoute: {
        onEnter: (nextState, replace) => replace('/styles/overview'),
      },
      childRoutes: [
        {
          path: '/styles/copywriting',
          indexRoute: {
            onEnter: (nextState, replace) => replace('/styles/copywriting/design'),
          },
          childRoutes: [
            {
              path: '/styles/:name/:page',
              getComponent(location, cb) {
                import('./pages/styles/Style')
                  .then(loadRoute(cb))
                  .catch(errorLoading);
              },
            },
          ],
        },
        {
          path: '/styles/spacing',
          indexRoute: {
            onEnter: (nextState, replace) =>
              replace('/styles/spacing/design'),
          },
          childRoutes: [
            {
              path: '/styles:name/:page',
              getComponent(location, cb) {
                import('./pages/styles/Style')
                  .then(loadRoute(cb))
                  .catch(errorLoading);
              },
            },
          ],
        },
        {
          path: '/styles/colors',
          indexRoute: {
            onEnter: (nextState, replace) => replace('/styles/colors/palette'),
          },
          childRoutes: [
            {
              path: '/styles/:name/:page',
              getComponent(location, cb) {
                import('./pages/styles/Style')
                  .then(loadRoute(cb))
                  .catch(errorLoading);
              },
            },
          ],
        },
        {
          path: '/styles/typography',
          indexRoute: {
            onEnter: (nextState, replace) => replace('/styles/typography/design'),
          },
          childRoutes: [
            {
              path: '/styles/:name/:page',
              getComponent(location, cb) {
                import('./pages/styles/Style')
                  .then(loadRoute(cb))
                  .catch(errorLoading);
              },
            },
          ],
        },
        {
          path: '/styles/iconography',
          indexRoute: {
            onEnter: (nextState, replace) =>
              replace('/styles/iconography/library'),
          },
          childRoutes: [
            {
              path: '/styles/:name/:page',
              getComponent(location, cb) {
                import('./pages/styles/Style')
                  .then(loadRoute(cb))
                  .catch(errorLoading);
              },
            },
          ],
        },
        {
          path: '/styles/layer',
          indexRoute: {
            onEnter: (nextState, replace) => replace('/styles/layer/overview'),
          },
          childRoutes: [
            {
              path: '/styles/:name/:page',
              getComponent(location, cb) {
                import('./pages/styles/Style')
                  .then(loadRoute(cb))
                  .catch(errorLoading);
              },
            },
          ],
        },
        {
          path: '/styles/:name',
          getComponent(location, cb) {
            import('./pages/styles/Style')
              .then(loadRoute(cb))
              .catch(errorLoading);
          },
        },
      ],
    },
    {
      path: 'interactions',
      indexRoute: {
        onEnter: (nextState, replace) => replace('/interactions/overview'),
      },
      childRoutes: [
        {
          path: '/interactions/:name',
          getComponent(location, cb) {
            import('./pages/interactions/Interactions')
              .then(loadRoute(cb))
              .catch(errorLoading);
          },
        },
      ],
    },
    {
      path: 'patterns',
      indexRoute: {
        onEnter: (nextState, replace) => replace('/patterns/overview'),
      },
      childRoutes: [
        {
          path: '/patterns/:name',
          getComponent(location, cb) {
            import('./pages/patterns/Patterns')
              .then(loadRoute(cb))
              .catch(errorLoading);
          },
        },
      ],
    },
    {
      path: 'components',
      indexRoute: {
        onEnter: (nextState, replace) => replace('/components/overview'),
      },
      childRoutes: [
        {
          path: '/components/:name',
          indexRoute: {
            onEnter: (nextState, replace) => {
              if (!(nextState.params.name === 'overview')) {
                replace(`/components/${nextState.params.name}/design`)
              }
            },
          },
          getComponent(location, cb) {
            import ('./pages/components/ComponentPage')
              .then(loadRoute(cb))
              .catch(errorLoading)
          }
        },
        {
          path: '/components/:name/:page',
          getComponent(location, cb) {
            import('./pages/components/ComponentPage')
              .then(loadRoute(cb))
              .catch(errorLoading);
          },
        },
      ],
    },
    {
      path: 'coming-soon',
      indexRoute: {
        onEnter: (nextState, replace) => replace('/coming-soon/-'),
      },
      childRoutes: [
        {
          path: '/coming-soon/:group/:element',
          getComponent(location, cb) {
            import('./pages/ComingSoon')
              .then(loadRoute(cb))
              .catch(errorLoading);
          }
        }
      ]
    },
    {
      path: '*',
      getComponent(location, cb) {
        import('./pages/404').then(loadRoute(cb)).catch(errorLoading);
      },
    },
  ],
};

export default routes;

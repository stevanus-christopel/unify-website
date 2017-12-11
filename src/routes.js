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
      path: 'style',
      indexRoute: {
        onEnter: (nextState, replace) => replace('/style/overview'),
      },
      childRoutes: [
        {
          path: '/style/copywriting',
          indexRoute: {
            onEnter: (nextState, replace) => replace('/style/copywriting/design'),
          },
          childRoutes: [
            {
              path: '/style/:name/:page',
              getComponent(location, cb) {
                import('./pages/style/Style')
                  .then(loadRoute(cb))
                  .catch(errorLoading);
              },
            },
          ],
        },
        {
          path: '/style/colors',
          indexRoute: {
            onEnter: (nextState, replace) => replace('/style/colors/palette'),
          },
          childRoutes: [
            {
              path: '/style/:name/:page',
              getComponent(location, cb) {
                import('./pages/style/Style')
                  .then(loadRoute(cb))
                  .catch(errorLoading);
              },
            },
          ],
        },
        {
          path: '/style/iconography',
          indexRoute: {
            onEnter: (nextState, replace) =>
              replace('/style/iconography/library'),
          },
          childRoutes: [
            {
              path: '/style/:name/:page',
              getComponent(location, cb) {
                import('./pages/style/Style')
                  .then(loadRoute(cb))
                  .catch(errorLoading);
              },
            },
          ],
        },
        {
          path: '/style/spacing',
          indexRoute: {
            onEnter: (nextState, replace) =>
              replace('/style/spacing/design'),
          },
          childRoutes: [
            {
              path: '/style/:name/:page',
              getComponent(location, cb) {
                import('./pages/style/Style')
                  .then(loadRoute(cb))
                  .catch(errorLoading);
              },
            },
          ],
        },
        {
          path: '/style/layer',
          indexRoute: {
            onEnter: (nextState, replace) => replace('/style/layer/overview'),
          },
          childRoutes: [
            {
              path: '/style/:name/:page',
              getComponent(location, cb) {
                import('./pages/style/Style')
                  .then(loadRoute(cb))
                  .catch(errorLoading);
              },
            },
          ],
        },
        {
          path: '/style/:name',
          getComponent(location, cb) {
            import('./pages/style/Style')
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
      path: 'resources',
      getComponent(location, cb) {
        import('./pages/Resources').then(loadRoute(cb)).catch(errorLoading);
      },
    },
    {
      path: 'themes',
      getComponent(location, cb) {
        import('./pages/Themes').then(loadRoute(cb)).catch(errorLoading);
      },
    },
    {
      path: 'component-status',
      getComponent(location, cb) {
        import('./pages/ComponentStatus')
          .then(loadRoute(cb))
          .catch(errorLoading);
      },
    },

    {
      path: 'data-vis',
      indexRoute: {
        onEnter: (nextState, replace) => replace('/data-vis/overview/general'),
      },
      childRoutes: [
        {
          path: '/data-vis/:name',
          indexRoute: {
            onEnter: (nextState, replace) => {
              if (!(nextState.params.name === 'overview')) {
                replace(`/data-vis/${nextState.params.name}/code`)
              } else {
                replace(`/data-vis/overview/general`)
              }
            },
          },
          getComponent(location, cb) {
            import ('./pages/data-vis/DataVis')
              .then(loadRoute(cb))
              .catch(errorLoading)
          }
        },
        {
          path: '/data-vis/:name/:page',
          getComponent(location, cb) {
            import('./pages/data-vis/DataVis')
              .then(loadRoute(cb))
              .catch(errorLoading);
          },
        },
      ],
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

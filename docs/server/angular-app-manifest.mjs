
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/my-angular-todo-app/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/my-angular-todo-app"
  },
  {
    "renderMode": 2,
    "redirectTo": "/my-angular-todo-app",
    "route": "/my-angular-todo-app/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 493, hash: '4e8c2b9588d89d6edd7977c366d83360aeeed786e42a4419fda3ed59f10b82c8', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1006, hash: '329f24a3ae74630bcdb6a9e41a60a4e3ad1d8c24251f15bb90b10614173eca01', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 11512, hash: '1acc3b183feebefec74029323cd0739b0e7da7035cb2332b90b84c95c63e119d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};

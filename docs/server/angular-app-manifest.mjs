
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
    'index.csr.html': {size: 493, hash: '2667f5dffbd86e84d6e150a1fb40679a115b1904d658a1d55dfd9157baa51cc4', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1006, hash: 'ad683891577719b9f485588b7c7d16565b1c8ce8593fa24998fbbe1569c55ef8', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 11796, hash: '6a7f96b1d35d96eb316ad6c59b4b97f9a121dcbd549ed00938b1057d0123d4b7', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};

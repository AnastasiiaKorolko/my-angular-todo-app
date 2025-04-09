
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
    'index.csr.html': {size: 2866, hash: 'cf8a39bfc27e8fdf277136fe826bf65a4b95d064b07df142e7aa2da09ebeaaee', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 3379, hash: 'e8aa9d86c5aee0489536f03b410d9d8a6611514d13552de47874715c12f1daaf', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 13881, hash: '08b10bc672b5d26a346c14133d444bab98803f7931953f00ca8cbee183e79ab3', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};

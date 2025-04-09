
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
    'index.csr.html': {size: 2866, hash: 'daf58f79bbcbea2991dc0641feb4602d3111a999eb108f44aad9184960196ca5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 3379, hash: '8948fc7e349464a699568c8d1f30dc50075b9c502489a1a88e02533e3a097460', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 13972, hash: 'cc98c0b14ddedc68e57be96ef70a5d96fa34ed9ade4cb869a24133ce765a7903', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};

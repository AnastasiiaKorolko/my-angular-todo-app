
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
    'index.csr.html': {size: 2866, hash: 'e6952b4b380574f42b8ff5933c9f653ddb0b7e02161f4ad1a8a045da52e1e8b9', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 3379, hash: '002d4e2702f14bd691e97fc71a775448c5eec59518e3d69d1a33b00f0dd8e0db', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 13972, hash: '4d727fff3b1c248f6ee8a25074f1f2d93522524b57f801da27ec169a6a2cb080', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};

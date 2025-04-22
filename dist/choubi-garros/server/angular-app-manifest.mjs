
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/home",
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/home"
  },
  {
    "renderMode": 2,
    "route": "/bracket"
  },
  {
    "renderMode": 2,
    "route": "/sign-up"
  },
  {
    "renderMode": 2,
    "redirectTo": "/home",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 16465, hash: '1cc8a25d329d4d31ca590f43c3eab3579e9f14cd71f6f18237477396d5b173d7', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 10054, hash: '285782fe8c04058c93ea334ae3311b874a1740d69627799b570cf716fd0b3cbe', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'bracket/index.html': {size: 41262, hash: '8f22f37c13217af4ad121caffda1d4d12abbf94b4226744084c5c968ad7eb6e1', text: () => import('./assets-chunks/bracket_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 24504, hash: '942b5b0c042aeeade323ffd9e483fda195c333d9e6e867ef858a1cf796083630', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'sign-up/index.html': {size: 39515, hash: '538515e93758bc88f854f8a7b871c28661e5a129dab89230d08fe39487db0bc9', text: () => import('./assets-chunks/sign-up_index_html.mjs').then(m => m.default)},
    'styles-HXGSEMEL.css': {size: 6964, hash: 'XHkIkew/1l8', text: () => import('./assets-chunks/styles-HXGSEMEL_css.mjs').then(m => m.default)}
  },
};

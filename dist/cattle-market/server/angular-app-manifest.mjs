
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/login",
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-AKJWNJRY.js"
    ],
    "route": "/login"
  },
  {
    "renderMode": 2,
    "route": "/add-cattle"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-43MTIOZ5.js"
    ],
    "route": "/cattle"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5190, hash: 'd10ca136a93497316c1e70708a872b7e706f198f062a05e3994ef89e3015fd76', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1162, hash: '6a7632ac754cdd97adb7dbf570f33f06190aa8dc4a7702583e9d8570efd10eae', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'login/index.html': {size: 13858, hash: '4b40e5233a881e3d8d82dcb69f1c9f4b0dc8dc33b367baa1a31c993623b310ff', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'add-cattle/index.html': {size: 5367, hash: '9b9e450386bc6aaf8b1c2f13dcc597777605f2907251171577763dcf49777b07', text: () => import('./assets-chunks/add-cattle_index_html.mjs').then(m => m.default)},
    'cattle/index.html': {size: 5420, hash: '09f8c2fc4f7453598c387693b8088327694baa042dd77bf4e1316bae79637f2d', text: () => import('./assets-chunks/cattle_index_html.mjs').then(m => m.default)},
    'styles-BVJQD57C.css': {size: 230873, hash: 'YU+im7r2LDs', text: () => import('./assets-chunks/styles-BVJQD57C_css.mjs').then(m => m.default)}
  },
};

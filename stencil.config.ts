import { Config } from '@stencil/core';
import { postcss } from '@stencil/postcss';
import { stylus } from '@stencil/stylus';
import cssnext from 'postcss-preset-env';
import fs from 'fs';
import path from 'path';

/**
 * 包含哪些组件
 * @param names 组件目录名数组
 */
const excludeSrcExcept = (names: string[]) => {
  const dirs = fs.readdirSync(path.resolve('src/components'));
  const excludeDirs = dirs.filter(dir => {
    return !~names.indexOf(dir);
  });
  return excludeDirs.map(dir => {
    return `**/${dir}/**`;
  });
};

/**
 * 打包配置信息
 */
let config: Config = {
  namespace: 'nb-component',
  outputTargets: [
    {
      type: 'dist',
      // 打包目标目录
      dir: `dist/${process.env.CLIENT || ''}`
    },
    {
      type: 'www',
      dir: 'www',
      baseUrl: '/nb-component/',
      serviceWorker: null // disable service workers
    }
  ],
  enableCache: true,
  globalStyle:
    process.env.NODE_ENV === 'production' ? null : 'src/global/main.styl',
  // globalScript: 'src/global/main.ts',
  plugins: [
    stylus({
      injectGlobalPaths: [
        'src/global/variables.styl',
        'src/global/functions.styl'
      ]
    }),
    postcss({
      plugins: [
        cssnext({
          browsers: ['iOS >= 8', 'Android >= 4']
        })
      ]
    })
  ],
  nodeResolve: {
    // 支持外部 npm 引入库
    browser: true,
    preferBuiltins: true
  }
};

// 针对性打包减小目录体积
const CLIENT_COMPONENTS = {
  // 展业宝（江海经济圈）
  zyb: [
    'actionsheet',
    'affix',
    'badge',
    'button/async',
    'minirefresh',
    'tab/slide',
    'toast',
    'modal',
    'textarea/limit',
    'upload/simple-image',
    'vscroll-nav',
    'string/limit-line',
    'search-bar',
    'picker/datetime',
    'list',
    'list-item',
    'marquee',
    'switch'
  ],
  // 海通社区
  ht: ['affix', 'ht-richtext', 'list', 'list-item']
};
if (process.env.NODE_ENV === 'production' && process.env.CLIENT) {
  config.excludeSrc = excludeSrcExcept(CLIENT_COMPONENTS[process.env.CLIENT]);
}

export { config };

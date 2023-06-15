// const rollup = require('rollup');
const fs = require('node:fs');
const nodeResolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const json = require('@rollup/plugin-json');
const alias = require('@rollup/plugin-alias');
const eslint = require('@rollup/plugin-eslint')({
  include: ["*.js","*.mjs"],
  exclude: [],
  fix:true,
});

//const { resolve } = require('node:path/posix');
//const pathResolve = (prefix)=>(name) => resolve(prefix,name);
const customResolver = nodeResolve({
  // Order matters Injection happens via local /node_modules
  modulePaths: ['../','node_modules','../../node_modules'],
  extensions: ['.mjs', '.js', '.jsx', '.json', '.sass', '.scss'],
});

const entries = [
  { find: 'zlib', replacement: 'node:zlib'// path.resolve(projectRootDir, 'src')
    // OR place `customResolver` here. See explanation below.
  }
];

// Promise.resolve().then(async () =>
// [(await rollup.rollup())].map(b=>[b.write({ dir: 'lib' })]));

// .then(async ()=>(await rollup.rollup({ 
//   input: Object.fromEntries(fs.readdirSync('packages').map(pkg=>[pkg+'.browser',pkg])),
//   plugins: [
//     eslint,
//     alias({
//       customResolver, entries,
//     }),
//     nodeResolve({preferBuiltins: false, browser: true}), json(), commonjs()
//   ],
// })).write({ dir: 'lib', }));

const input = Object.fromEntries(fs.readdirSync('../../packages').map(pkg=>[pkg,pkg]).concat(
  fs.readdirSync('../../packages/pouchdb/src/plugins').map(plg=>[`pouchdb-plugin-${plg.slice(-3)}`,'../../packages/pouchdb/src/plugins/'+plg])
).concat([
  ['hash-wasm','hash-wasm']
]).filter((entrie)=>entrie[0].startsWith('pouchdb')));
module.exports = [{ 
  input,
  plugins: [
    eslint,
    {
      name: 'emit-module-package-file',
      generateBundle() {
        this.emitFile({ fileName: 'package.json', source: `{"type":"module"}`, type: 'asset' });
        this.emitFile({ fileName: 'index.js', // index.js exports lib/pouchdb-*.js
          source: `${Object.keys(input).map((key) => 
          `export * as ${key.replaceAll('-','_')} from './${key}.js';`).join('\n')}`,
           type: 'asset' 
        });
      },
    },
    alias({
      customResolver, entries,
    }),
    nodeResolve({preferBuiltins: true,
      modulePaths: ['../','node_modules','../../node_modules'],
    }), json(), commonjs()
  ],
  output: [{ dir: 'lib' }]
}];
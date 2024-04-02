import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
  entries: ['src/index.ts'],
  outDir: 'dist',
  externals: ['react'],
  failOnWarn: false,
  sourcemap: false,
  declaration: true,
  rollup: {
    emitCJS: true,
  },
});

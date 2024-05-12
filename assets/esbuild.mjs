import * as esbuild from 'esbuild'

const isWatch = process.env.WATCH
const opts = {
  entryPoints: [
    {
      out: 'main',
      in: './script/client/main.ts',
    },
    {
      out: 'aos',
      in: './node_modules/aos/dist/aos.css',
    },
  ],
  bundle: true,
  minify: true,
  target: ['es2020', 'chrome58', 'edge16', 'firefox57', 'node12', 'safari11'],
  tsconfig: '../configs/tsconfig.json',
  outdir: '../public/',
}
if (isWatch) {
  const ctx = await esbuild.context(opts)
  await ctx.watch()
  console.log('watching...')
}else{
  await esbuild.build(opts)
}

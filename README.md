# web
personal web.

## structure project
> this project use monorepo.
- apps : (for web/api)
  - web
- packages : (shared packages)
  - html : for hilight
  - configs : configuration ts,eslint,tailwind
  - ui : component/ui and storybook
  - style : compile css tailwind
- e2e : test e2e

## install
```bash
git clone https://github.com/alifprihantoro/web
cd web
pnpm i --lockfile-only
pnpm dev
```
## command
- build => build entire project
- dev => build entire project in dev mode
- test => test
- lint => ceck lint with eslint
- story => build all story
- publish => lint, test, build web with storybook then move into branch result
- publish:turbo => like publish but use turborepo
- e2e => test e2e

## branch
- master (main branch)
- publish : trigger ci to publish
- result : result compiled (rollback purpose)
- refactor/* : for refactory code changes
- feat/* : for add feature
- beta/* : for experimental

## technology
- astro js
- tailwind css with daisy ui
- vite
- storybook
- typescript/javascript
- html/css
- aos
- github action
- netlify
# vNext

## 0.6.0

- Migrated from Babel 6 to Babel 7 (`@babel/core`, `@babel/cli`, `@babel/preset-env`)
- Removed `babel-runtime` production dependency
- Removed all Babel 6 devDependencies (`babel-cli`, `babel-core`, `babel-plugin-transform-runtime`, `babel-polyfill`, `babel-preset-es2015`, `babel-preset-stage-2`)
- Removed obsolete `src/spec/helpers/runtime.js` (Babel 6 register/polyfill)
- Upgraded `deep-diff` to `^1.0.2`
- Changed publish hook from `prepublish` to `prepack`
- Added `babel.config.js` for Jest compatibility with Babel 7
- Fixed array diff ordering issue caused by `deep-diff` v1 (reverse diff application)
- Fixed all ESLint errors (no-param-reassign, consistent-return, prefer-default-export)

## 0.5.0

- Completely removed `lodash` dependency

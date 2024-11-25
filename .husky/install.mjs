/* eslint-env node */

// Skip Husky install in CI
// @see https://typicode.github.io/husky/how-to.html
if (process.env.CI === 'true') {
    process.exit(0)
}

(await import('husky')).default

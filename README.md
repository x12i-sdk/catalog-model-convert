# catalog-model-convert usage example

Convert AI model IDs between catalog vendors (OpenRouter, OfoxAI, APIMart, Haimaker, AI/ML API, AWS, Azure, Cloudflare).

This consuming application demonstrates **convert a model identifier between vendor catalogs** using the published npm package, pinned to `0.2.0`.

## Run

Requires Node.js 24 or newer and npm. The example needs no service credentials.

```sh
npm install --ignore-scripts
npm start
```

## Example

[`src/index.mjs`](src/index.mjs) contains the complete example. Assertions check the demonstrated behavior and the program prints a small result.

## When to use the package

- Translate a known model identifier from one supported catalog vendor to another.
- Detect an unavailable conversion instead of constructing a provider model ID by guesswork.

## Links

- [npm package](https://www.npmjs.com/package/catalog-model-convert)
- [Implementation monorepo](https://github.com/x12i/ai-profiles)
- [Reviewed package source](https://github.com/x12i/ai-profiles/tree/8efd4dc11dfaacab2ceef9f030a4a3fa7da00800/packages/catalog-model-convert)

The `package.json` in this repository is private to prevent accidental publication of the example application under an npm package name.

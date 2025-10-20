// Root CommonJS entry forwarding to bundled CJS build.
// This ensures consumers that use `require()` or that are not ESM can
// import the package without dealing with package "type" inference.
module.exports = require("./dist/cjs-entry.cjs");

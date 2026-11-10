// Minimal test so each Dependabot PR has a CI result to show.
const assert = require("assert");
const _ = require("lodash");
assert.deepStrictEqual(_.chunk([1, 2, 3, 4], 2), [[1, 2], [3, 4]]);
assert.strictEqual(_.get({ a: { b: 42 } }, "a.b"), 42);
console.log("lodash", _.VERSION, "- all tests passed");

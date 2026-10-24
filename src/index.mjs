import assert from 'node:assert/strict';
import { convertModel } from 'catalog-model-convert';

const converted = convertModel({ modelId: 'openai/gpt-4o', from: 'openrouter', to: 'azure' });
assert.equal(converted.ok, true);
assert.equal(converted.modelId, 'gpt-4o');
console.log(converted);

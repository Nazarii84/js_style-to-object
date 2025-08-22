'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (typeof sourceString !== 'string') {
    return {};
  }

  const str = sourceString.replace(/\t|\r/g, '').trim();

  if (!str) {
    return {};
  }

  const out = {};
  const re = /([-\w]+)\s*:\s*([\s\S]*?)(?:;|$)/g;

  let m;

  while ((m = re.exec(str)) !== null) {
    const prop = m[1];
    let value = m[2] || '';

    value = value.trim();

    if (value.includes('\n')) {
      if (!value.includes(',')) {
        value = value.replace(/\s*\n+\s*/g, ' ');
      }
    }

    out[prop] = value;
  }

  return out;
}

module.exports = convertToObject;

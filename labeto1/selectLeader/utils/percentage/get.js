"use strict";
export default function (_size, _percentage) {
  const _one = _size / 100;
  return parseInt(_percentage / _one);
};
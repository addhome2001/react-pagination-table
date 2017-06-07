'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = handleArrayOption;


/**
 * get the specify property
 * @param  {String}        [prop='']        [key]
 * @param  {String|Number} [index='all'] [index]
 * @param  {String}        [plus='']     [plus]
 * @return {Function|Boolean}
 */
function handleArrayOption(prop) {
  var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'all';
  var plus = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

  if (typeof prop === 'string' && prop.length > 0) {
    return function (single) {
      if (!single[prop]) return '';
      if (index === 'all') {
        return single[prop].join(plus);
      }
      return single[prop][index];
    };
  }
  return false;
}
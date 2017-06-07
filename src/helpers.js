/* @flow */

/**
 * get the specify property
 * @param  {String}        [prop='']        [key]
 * @param  {String|Number} [index='all'] [index]
 * @param  {String}        [plus='']     [plus]
 * @return {Function|Boolean}
 */
export default function handleArrayOption(
  prop: string,
  index?: number | string = 'all',
  plus?: string = '',
): Function | boolean {
  if (typeof prop === 'string' && prop.length > 0) {
    return (single: Object): string => {
      if (!single[prop]) return '';
      if (index === 'all') {
        return single[prop].join(plus);
      }
      return single[prop][index];
    };
  }
  return false;
}

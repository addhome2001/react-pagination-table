/**
 * get the specify property
 * @param  {String} prop                 [key]
 * @param  {String|Number} [index='all'] [index]
 * @param  {String} [plus='']            [plus]
 * @return {Function}
 */
export default function handleArrayOption(prop, index = 'all', plus = '') {
  if (!prop) return false;
  return (single) => {
    if (!single[prop]) return '';
    if (index === 'all') {
      return single[prop].join(plus);
    }
    return single[prop][index];
  };
}

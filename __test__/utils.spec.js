/* eslint-disable no-unused-expressions */
import { expect } from 'chai';
import handleArrayOption from '../src/helpers';

describe('Test Utils', () => {
  describe('handleArrayOption', () => {
    it('correct property', () => {
      const handler = handleArrayOption.apply(null, ['size', 'all', ' ']);
      expect(handler({ size: ['M', 'L', 'S'], age: 20 })).eql('M L S');
    });

    it('specify property', () => {
      const handler = handleArrayOption.apply(null, ['size', 1, ' ']);
      expect(handler({ size: ['M', 'L', 'S'], age: 20 })).eql('L');
    });

    it('dose\t provide index and plus', () => {
      const handler = handleArrayOption.apply(null, ['size']);
      expect(handler({ size: ['M', 'L', 'S'], age: 20 })).eql('MLS');
    });

    it('property dose not exist', () => {
      const handler = handleArrayOption.apply(null, ['address']);
      expect(handler({ size: ['M', 'L', 'S'], age: 20 })).eql('');
    });

    it('property is undefined', () => {
      const handler = handleArrayOption.apply(null);
      expect(handler).to.be.false;
    });
  });
});

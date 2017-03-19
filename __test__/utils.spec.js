/* eslint-disable no-unused-expressions */
import { expect } from 'chai';
import handleArrayOption from '../src/utils';

describe('Test Utils', () => {
  describe('handleArrayOption', () => {
    it('should return correct property', () => {
      const handler = handleArrayOption.apply(null, ['size', 'all', ' ']);
      expect(handler({ size: ['M', 'L', 'S'], age: 20 })).eql('M L S');
    });

    it('should return specify property', () => {
      const handler = handleArrayOption.apply(null, ['size', 1, ' ']);
      expect(handler({ size: ['M', 'L', 'S'], age: 20 })).eql('L');
    });

    it('should return all properties if dose\t provide index and plus', () => {
      const handler = handleArrayOption.apply(null, ['size']);
      expect(handler({ size: ['M', 'L', 'S'], age: 20 })).eql('MLS');
    });

    it('should return empty string if property is undefined', () => {
      const handler = handleArrayOption.apply(null, ['address']);
      expect(handler({ size: ['M', 'L', 'S'], age: 20 })).eql('');
    });

    it('should return false if property is dose\'t provide', () => {
      const handler = handleArrayOption.apply(null);
      expect(handler).to.be.false;
    });
  });
});

import { MyClass } from '../lib/myclass';

describe('YOUR TEST', () => {
    it('this is the test to check xyz', () => {
        const classe  = new MyClass('antonio', 50);

        expect(classe.isMaggiorenne()).toBe(true);
    });

    it('this is another  test to check ijk', () => {
        const n = 20;
        expect(n).toEqual(20);
    });
   
});



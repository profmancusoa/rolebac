import { Rolebac } from '../lib/rolebac';
import { readFileSync } from 'fs';

const ymlRulesInvalid = readFileSync(`${process.cwd()}/test/invalid_rules.yml`).toString();

describe('RBAC TEST SUITE', () => {

    it('check for invalid rules file', () => {
        expect(() => {let rbacInvalid = new Rolebac(ymlRulesInvalid)}).toThrow();
    });
});



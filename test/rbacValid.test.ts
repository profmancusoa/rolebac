import { Rolebac } from '../lib/rolebac';
import { readFileSync } from 'fs';

const ymlRulesValid = readFileSync(`${process.cwd()}/test/valid_rules.yml`).toString();
const rbacValid = new Rolebac(ymlRulesValid);

describe('RBAC TEST SUITE', () => {

    it('check if role1 can perform action1 on resource1', () => {
        expect(rbacValid.hasGrant('role1', 'action1', 'resource1')).toBe(true);
    });

    it('check if role2 can perform action1 on resource1', () => {
        expect(rbacValid.hasGrant('role2', 'action1','resource1')).toBe(true);
    });

    it('check if role1 can perform action2 on resource1', () => {
        expect(rbacValid.hasGrant('role1', 'action2','resource1')).toBe(true);
    });

    it('check if role1 can perform action3 on resource1', () => {
        expect(rbacValid.hasGrant('role1', 'action3','resource1')).toBe(false);
    });

    it('check if role2 can perform action2 on resource1', () => {
        expect(rbacValid.hasGrant('role2', 'action2','resource1')).toBe(false);
    });

    it('check if role4 can perform action1 on resource1', () => {
        expect(rbacValid.hasGrant('role4','action1','resource1')).toBe(false);
    });

    it('check if role4 can perform action1 on resource2', () => {
        expect(rbacValid.hasGrant('role4', 'action1','resource2')).toBe(true);
    });

    it('check if role1 can perform action2 on resource2', () => {
        expect(rbacValid.hasGrant('role1', 'action2','resource2')).toBe(true);
    });

    it('check if role2 can perform action2 on resource2', () => {
        expect(rbacValid.hasGrant('role2', 'action2','resource2')).toBe(true);
    });

    it('check if role3 can perform action2 on resource2', () => {
        expect(rbacValid.hasGrant('role3', 'action2','resource2')).toBe(true);
    });

    it('check if role4 can perform action2 on resource2', () => {
        expect(rbacValid.hasGrant('role4', 'action2','resource2')).toBe(false);
    });
   
});



import { render } from "@testing-library/react";
import { CompanyCode } from "@utils/mapping/company";
import { createMemoryHistory } from "history"
import auth, * as authActions from './index';

describe('auth', () => {
  describe('auth actions', () => {
    // it('auth actions 생성', () => {
    //   const expectedActions = [
    //     { type: 'auth/setAuthKey', payload: 'testauthkey' }
    //   ];
    //   const actions = [
    //     authActions.setAuthKey('testauthkey')
    //   ];
    //   expect(actions).toEqual(expectedActions);
    // });
    it('auth 액션을 생성해야 한다.', () => {
      expect(authActions.setAuthKey('testauthkey')).toEqual({
        type: 'auth/setAuthKey',
        payload: 'testauthkey'
      });
      expect(authActions.setEmployeeData({
        employeeId: '1234567',
        name: '임관우',
        roles: ['EMPLOYEE']
      })).toEqual({
        type: 'auth/setEmployeeData',
        payload: {
          employeeId: '1234567',
          name: '임관우',
          roles: ['EMPLOYEE']
        }
      });
      expect(authActions.setEmployeeCompanyData(0)).toEqual({
        type: 'auth/setEmployeeCompanyData',
        payload: 0
      });
      expect(authActions.clearAuth()).toEqual({
        type: 'auth/clearAuth'
      })
    });
  });
  
  describe('auth reducer', () => {
    let state = auth(undefined, {} as any);
    it('auth state의 초깃값', () => {
      expect(state).toHaveProperty('authKey', authActions.initialAuthKey());
      expect(state).toHaveProperty('employeeData', { employeeId: '', name: '', roles: '' });
      expect(state).toHaveProperty('employeeCompanyName', '');
    });

    it('auth setAuthKey', () => {
      state = auth(state, authActions.setAuthKey('testauthkey'));
      expect(state).toHaveProperty('authKey', 'testauthkey');
    });

    it('auth setEmployeeData', () => {
      state = auth(state, authActions.setEmployeeData({
        employeeId: '1234567',
        name: '임관우',
        roles: ['EMPLOYEE']
      }));
      expect(state).toHaveProperty('employeeData.employeeId', '1234567');
      expect(state).toHaveProperty('employeeData.name', '임관우');
      expect(state).toHaveProperty('employeeData.roles.0', 'EMPLOYEE');
    });

    it('auth setEmployeeCompanyData', () => {
      state = auth(state, authActions.setEmployeeCompanyData(5));
      expect(state).toHaveProperty('employeeCompanyName', CompanyCode[5]);
    });

    it('auth clearAuth', () => {
      state = auth(state, authActions.clearAuth());
      expect(state).toHaveProperty('authKey', null);
      expect(state).toHaveProperty('employeeData', null);
    })
  })
});

import * as React from 'react';
import { fireEvent, render, RenderResult, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import * as authActions from '@redux/auth';
import store from '@store/configureStore';
import Login from '..';

describe('LoginView', () => {
  let utils: RenderResult;
  const mockStore = configureMockStore();

  // 가짜 스토어
  let store = mockStore({
    auth: {
      employeeData: { employeeId: '', name: '', roles: '' }
    }
  });

  it('로그인 뷰 스냅샷', () => {
    utils = render(
      <Provider store={store}>
        <Login />
      </Provider>
    );
    expect(utils.container).toMatchSnapshot();
  });

  it('로그인 타이틀', () => {
    utils = render(
      <Provider store={store}>
        <Login />
      </Provider>
    );
    const titleElement = screen.getByText('로그인');
    expect(titleElement).toBeInTheDocument();
  });

  it('로그인 onSubmit - "비밀번호가 틀렸습니다."', () => {
    // onSubmit 함수 테스트 여기서 하는건가?
    render(
      <Provider store={store}>
        <Login />
      </Provider>
    );

    const employeeIdInput = screen.getByLabelText('employeeId');
    fireEvent.change(employeeIdInput, { target: { value: '1234567' } });
    expect((employeeIdInput as HTMLInputElement).value).toBe('1234567');

    const passwordInput = screen.getByLabelText('password');
    fireEvent.change(passwordInput, { target: { value: '2' } });
    expect((passwordInput as HTMLInputElement).value).toBe('2');

    const button = screen.getByRole('button');
    fireEvent.click(button);

    const wrongPasswordMessage = screen.getByText('비밀번호가 틀렸습니다.');
    expect(wrongPasswordMessage).toHaveTextContent('비밀번호가 틀렸습니다.');
  });

  it('로그인 onSubmit - setEmployeeData()', () => {
    render(
      <Provider store={store}>
        <Login />
      </Provider>
    );

    const employeeIdInput = screen.getByLabelText('employeeId');
    fireEvent.change(employeeIdInput, { target: { value: '1234567' } });
    expect((employeeIdInput as HTMLInputElement).value).toBe('1234567');

    const passwordInput = screen.getByLabelText('password');
    fireEvent.change(passwordInput, { target: { value: '1' } });
    expect((passwordInput as HTMLInputElement).value).toBe('1');

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(store.getActions()[0]).toEqual(
      authActions.setEmployeeData({
        employeeId: '1234567',
        name: '관우림',
        roles: 'EMPLOYEE'
      })
    );
    // store.dispatch(authActions.setEmployeeData({
    //   employeeId: '1234567',
    //   name: '관우림',
    //   roles: 'EMPLOYEE'
    // }));

    // expect(store.getActions()).toEqual([
    //   {
    //     type: 'auth/setEmployeeData',
    //     payload: {
    //       employeeId: '1234567',
    //       name: '관우림',
    //       roles: 'EMPLOYEE'
    //     }
    //   }
    // ]);
  });
});

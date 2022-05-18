import * as React from 'react';
import { fireEvent, render, RenderResult, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '@store/configureStore';
import Login from '..';

describe('LoginView', () => {
  let utils: RenderResult;
  
  it('로그인 뷰 스냅샷', () => {
    utils = render(
      <Provider store={store}>
        <Login />
      </Provider>
    )
    expect(utils.container).toMatchSnapshot();
  });

  it('로그인 타이틀', () => {
    utils = render(
      <Provider store={store}>
        <Login />
      </Provider>
    )
    const titleElement = utils.getByText('로그인');
    expect(titleElement).toBeInTheDocument();
  });

  it('로그인 onSubmit - "비밀번호가 틀렸습니다."', () => {
    // onSubmit 함수 테스트 여기서 하는건가?
    utils = render(
      <Provider store={store}>
        <Login />
      </Provider>
    )
    
    const employeeIdInput = utils.getByLabelText('employeeId');
    fireEvent.change(employeeIdInput, { target: { value: '1234567' } });
    expect((employeeIdInput as HTMLInputElement).value).toBe('1234567');
      

    const passwordInput = utils.getByLabelText('employeeId');
    fireEvent.change(passwordInput, { target: { value: '2' } });
    expect((passwordInput as HTMLInputElement).value).toBe('2');
    
    const button = utils.getByRole('button');
    fireEvent.click(button);
    
    const wrongPasswordMessage = utils.getByText('비밀번호가 틀렸습니다.');
    expect(wrongPasswordMessage).toBeInTheDocument();
  });
});
import { setEmployeeData } from '@redux/auth';
import * as React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

interface LoginState {
  employeeId: string;
  password: string;
}

const wrongPassword = '비밀번호가 틀렸습니다.';

function LoginView() {
  const dispatch = useDispatch();
  const [loginState, setLoginState] = useState<LoginState>({
    employeeId: '',
    password: ''
  });
  const [loginError, setLoginError] = useState<boolean>(false);

  const onChangeInput = (e: any) => {
    const { name, value } = e.target;
    setLoginState((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    if (loginState.password !== '1') {
      setLoginError(true);
    } else {
      dispatch(
        setEmployeeData({
          employeeId: loginState.employeeId,
          name: '관우림',
          roles: 'EMPLOYEE'
        })
      );
    }
  };

  return (
    <div>
      <div>로그인</div>
      <form onSubmit={onSubmit}>
        <div>
          <p>사원번호</p>
          <input name="employeeId" aria-label="employeeId" value={loginState?.employeeId} onChange={onChangeInput} />
        </div>
        <div>
          <p>비밀번호</p>
          <input
            type="password"
            name="password"
            aria-label="password"
            value={loginState?.password}
            onChange={onChangeInput}
          />
        </div>
        {loginError && (
          <div>
            <p>{wrongPassword}</p>
          </div>
        )}
        <button type="submit">로그인</button>
      </form>
    </div>
  );
}

export default LoginView;

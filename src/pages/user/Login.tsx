import * as React from 'react';
import { useDispatch } from 'react-redux';
// import { testAction } from '@redux/auth';
import { useState } from 'react';

interface LoginState {
  employeeId: string;
  password: string;
}

function LoginPage() {
  const dispatch = useDispatch();
  const [loginState, setLogin] = useState<LoginState>();

  const onClickButton = () => {
    // dispatch(testAction());
  };

  return (
    <div>
      <div>로그인</div>
      <form>
        <div>
          <p>사원번호</p>
          <input value={loginState?.employeeId} />
        </div>
        <div>
          <p>비밀번호</p>
          <input value={loginState?.password} />
        </div>
        <button type="submit" onClick={onClickButton}>버튼</button>
      </form>
    </div>
  )

}

export default LoginPage;
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { testAction } from '@redux/auth';

function LoginPage() {
  const dispatch = useDispatch();

  const onClickButton = () => {
    dispatch(testAction());
  }
  return (
    <div>
      <div>로그인</div>
      <button onClick={onClickButton}>버튼</button>
    </div>
  )

}

export default LoginPage;
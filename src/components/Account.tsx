import * as React from 'react';

interface AccountProps {
  id: string;
  password: string;
}

function Account ({ id, password }: AccountProps) {
  return (
    <div>
      <h2>{id}</h2>
      <h2>{password}</h2>
    </div>
  )
}

export default Account;
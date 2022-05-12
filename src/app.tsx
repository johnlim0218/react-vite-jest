import * as React from 'react';
import { Route, Routes } from 'react-router-dom';

import Login from '@pages/user/Login';

function App () {
  return (
    <Routes>
      <Route path="/" />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default App;
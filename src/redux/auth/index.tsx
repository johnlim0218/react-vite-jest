import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CompanyCode } from '@utils/mapping/company';

interface AuthState {
  authKey: string | null;
  employeeData: EmployeeData | null;
  employeeCompanyName: string;
}

interface EmployeeData {
  employeeId: string;
  name: string;
  roles: any;
}

export const initialAuthKey = () => {
  return localStorage.getItem('authKey');
};

const initialState: AuthState = {
  authKey: initialAuthKey(),
  employeeData: { employeeId: '', name: '', roles: '' },
  employeeCompanyName: ''
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthKey: (state, action: PayloadAction<string>) => {
      state.authKey = action.payload;
      localStorage.setItem('authKey', action.payload);
    },
    setEmployeeData: (state, action: PayloadAction<EmployeeData>) => {
      state.employeeData = action.payload;
    },
    setEmployeeCompanyData: (state, action: PayloadAction<number>) => {
      state.employeeCompanyName = CompanyCode[action.payload];
    },
    clearAuth: (state) => {
      state.authKey = null;
      state.employeeData = null;
      localStorage.removeItem('authKey');
    }
  }
});

export const { 
  setAuthKey,
  setEmployeeData,
  setEmployeeCompanyData,
  clearAuth 
} = authSlice.actions;

export default authSlice.reducer
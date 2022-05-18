export interface AuthState {
  authKey: string | null;
  employeeData: EmployeeData | null;
  employeeCompanyName: string;
}

export interface EmployeeData {
  employeeId: string;
  name: string;
  roles: any;
}
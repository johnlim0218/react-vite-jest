export function exceptionTest () {
  throw new Error('error');
}

export function passwordMeter(password?: string | null) {
  if (!password) {
    throw new Error('error');
  }
  return password;
}
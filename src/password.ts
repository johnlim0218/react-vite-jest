export enum PasswordStrength {
  STRONG = 'strong',
  NORMAL = 'normal'
}

export function exceptionTest () {
  throw new Error('error');
}

export function passwordMeter(password?: string | null) {
  if (!password || password === '') throw new Error('error');
  // if (password === 'abcC123' || password === '123abcC') return PasswordStrength.NORMAL;
  let lengthRull = password.length >= 8;
  if (!lengthRull) return PasswordStrength.NORMAL;
  
  let foundUppercase = /[A-Z]/.test(password);
  if (!foundUppercase) return PasswordStrength.NORMAL;

  let foundNumber = /[0-9]/.test(password);
  if (!foundNumber) return PasswordStrength.NORMAL;

  return PasswordStrength.STRONG;
}
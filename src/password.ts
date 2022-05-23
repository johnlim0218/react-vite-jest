export enum PasswordStrength {
  STRONG = 'strong',
  NORMAL = 'normal',
  WEAK = 'weak'
}

export function exceptionTest() {
  throw new Error('error');
}

function meetLength(password: string) {
  return password.length >= 8;
}

function contiansUppercase(password: string) {
  return /[A-Z]/.test(password);
}

function contiansNumber(password: string) {
  return /[0-9]/.test(password);
}

export function passwordMeter(password?: string | null) {
  if (!password || password === '') throw new Error('error');

  let metCount = 0;
  if (meetLength(password)) metCount++; // 길이 충족
  if (contiansUppercase(password)) metCount++; // 대문자 포함
  if (contiansNumber(password)) metCount++; // 숫자 포함

  if (metCount === 1 || metCount === 0) {
    return PasswordStrength.WEAK;
  }

  if (metCount === 2) {
    return PasswordStrength.NORMAL;
  }

  return PasswordStrength.STRONG;
}

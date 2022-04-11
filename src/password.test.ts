import { exceptionTest, passwordMeter, PasswordStrength } from "./password";

describe('암호검사기', () => {
  test('test(message)', async () => {
    // expect(nullInput('1')).toBe('2');
    expect(exceptionTest).toThrowError();
  });

  test('null 입력이면 익셉션 발생', () => {
    expect(() => { 
      passwordMeter(null) 
    }).toThrowError();
  });

  test('빈 값 입력이면 익셉션 발생(undefined)', () => {
    expect(() => {
      passwordMeter(undefined)
    }).toThrowError();
  });

  test('빈 값 입력이면 익셉션 발생("")', () => {
    expect(() => {
      passwordMeter('')
    }).toThrowError();
  });

  test('모든 조건을 충족하면 강함', () => {
    expect(
      passwordMeter('abcABC123')
    ).toBe(PasswordStrength.STRONG);
    expect(
      passwordMeter('123abcABC')
    ).toBe(PasswordStrength.STRONG);
  });

  test('길이가 8미만, 다른 조건 충족', () => {
    expect(
      passwordMeter('abcC123')
    ).toBe(PasswordStrength.NORMAL);
    expect(
      passwordMeter('123abcC')
    ).toBe(PasswordStrength.NORMAL);
    expect(
      passwordMeter('Cabc12')
    ).toBe(PasswordStrength.NORMAL);
  });

  test('대문자 없음, 다른 조건 충족', () => {
    expect(
      passwordMeter('abcd1234')
    ).toBe(PasswordStrength.NORMAL);
  });

  test('숫자 없음, 다른 조건 충족', () => {
    expect(
      passwordMeter('ABCDabcde')
    ).toBe(PasswordStrength.NORMAL);
    expect(
      passwordMeter('abcdeABCD')
    ).toBe(PasswordStrength.NORMAL);
  })
})
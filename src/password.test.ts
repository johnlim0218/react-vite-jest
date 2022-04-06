import { exceptionTest, passwordMeter } from "./password";

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

  test('빈 값 입력이면 익셉션 발생', () => {
    expect(() => {
      passwordMeter(undefined)
    }).toThrowError();
  });
})
import {soma,div,sub,multi} from ".";
import {expect, test}from "@jest/globals";

test("soma 1 + 2 = 3",()=>{
    expect(soma(1,2)).toBe(3)
})
test('soma 5 + 2 é igual a 7', () => { // Descrição do teste
    expect(soma(5, 2)).toBe(7) // Verifica se a função soma(1, 2) é igual a 3
  })

  test("subtrai 3- 2 = 1",()=>{
    expect(sub(3,2)).toBe(1)
})
test('subtrai 2 - 3 é igual a -1', () => { // Descrição do teste
    expect(sub(2, 3)).toBe(-1) // Verifica se a função soma(1, 2) é igual a 3
  })

  test("divide 4 / 2 = 2",()=>{
    expect(div(4,2)).toBe(2)
})
test('divide 27 / 3 é igual a 9', () => { // Descrição do teste
    expect(div(27, 3)).toBe(9) // Verifica se a função soma(1, 2) é igual a 3
  })

  test("multipica 1 * 2 = 2",()=>{
    expect(multi(1,2)).toBe(2)
})
test('multiplica 5 * 2 é igual a 10', () => { // Descrição do teste
    expect(multi(5, 2)).toBe(10) // Verifica se a função soma(1, 2) é igual a 3
  })
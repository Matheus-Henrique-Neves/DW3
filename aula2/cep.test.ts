import Verificacep from "./cep";
import{ expect,test } from "@jest/globals";

test("Verificacep 12345678 retorna true", () => {
    expect(Verificacep("12345678")).toBe(true);
});
test("Verificacep 12345-678 retorna true", () => {
    expect(Verificacep("12345-678")).toBe(true);
});
test("Verificacep 1234567 retorna false", () => {
    expect(Verificacep("1234567")).toBe(false);
});
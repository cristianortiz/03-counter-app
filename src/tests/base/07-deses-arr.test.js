import { retornaArreglo } from "../../base/07-deses-arr";

describe("Test into 07-deses-arr.js", () => {
  test("should return a number and a string ", () => {
    const arr = retornaArreglo();
    const [letras, numeros] = retornaArreglo();

    expect(arr).toEqual(["ABC", 123]);
    expect(typeof arr).toBe("object");

    expect(letras).toBe("ABC");
    expect(typeof letras).toBe("string");

    expect(numeros).toBe(123);
    expect(typeof numeros).toBe("number");
  });
});

import { getSaludo } from "../../base/02-template-string";
import "@testing-library/jest-dom";

describe("Test into 02-template-string.js", () => {
  test("getSaludo must return 'hello Fernando' ", () => {
    //1. init vars
    const nombre = "Fernando";
    //2. executes actions
    const saludo = getSaludo(nombre);
    //console.log(nombre);
    //3. watch behavior
    expect(saludo).toBe("Hello " + nombre);
  });

  //getSaludo must returs default value if is called without any param
  test("getSaludo must return default value ", () => {
    const saludo = getSaludo();
    expect(saludo).toBe("Hello " + "Carlos");
  });
});

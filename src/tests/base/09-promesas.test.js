import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";

describe("Test whit promises", () => {
  //async functions must include done() parameter in tests
  test("getHeroeByIdAsync should returns a Heroe in async mode", (done) => {
    const id = 1;
    getHeroeByIdAsync(id).then((h) => {
      expect(h).toBe(heroes[0]);
      done();
    });
  });
  //async functions must include done() parameter in tests
  test("should return and error if id does'nt exists", (done) => {
    const id = 11;
    getHeroeByIdAsync(id).catch((error) => {
      expect(error).toBe("No se pudo encontrar el héroe");
      done();
    });
  });
});

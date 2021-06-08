import { getHeroeById } from "../../base/08-imp-exp";
describe("test in heroes functions", () => {
  test("should return a hero by id", () => {
    const id = 1;
    const heroe = getHeroeById(id);
  });
});

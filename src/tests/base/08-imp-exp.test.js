import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe("Test in heroes data functions", () => {
  test("should return a heroe by id", () => {
    const id = 1;
    const heroe = getHeroeById(id);

    const heroeData = heroes.find((h) => h.id === id);

    //the id heroe that the functions returns is the same that i am testing
    expect(heroe).toEqual(heroeData);
  });

  test("should return undefined if the id does'nt exists in heroes data", () => {
    const id = 14;
    const heroe = getHeroeById(id);

    //if the id of a heroe does'nt exists, must return undefined
    expect(heroe).toBe(undefined);
  });

  test("should return an array whit DC hero", () => {
    const owner = "DC";

    const heroesTest = getHeroesByOwner(owner);

    const heroesDC = heroes.filter((h) => h.owner === owner);
    expect(heroesDC).toEqual(heroesTest);
  });

  test("should return an array whit Marvel heros, the array lenght must be equal to 2 ", () => {
    const owner = "Marvel";

    const heroesTest = getHeroesByOwner(owner);

    const heroesMarvel = heroes.filter((h) => h.owner === owner);
    expect(heroesMarvel.length).toEqual(heroesTest.length);
    expect(heroesMarvel.length).toBe(2);
  });
});

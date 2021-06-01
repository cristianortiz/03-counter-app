import { getUser, getUserActive } from "../../base/05-funciones";

describe("Test into 05-funciones", () => {
  test("getUSer should return an object", () => {
    const user_test = {
      uid: "ABC123",
      username: "El_Papi1502",
    };

    const user = getUser();
    //watch beahavior compare two objects
    expect(user).toEqual(user_test);
  });

  test("getUSerActive should return an object", () => {
    const user_name = "Jony";
    const user_test = {
      uid: "ABC567",
      username: user_name,
    };

    const user = getUserActive(user_name);
    //watch beahavior compare two objects
    expect(user).toEqual(user_test);
  });
});

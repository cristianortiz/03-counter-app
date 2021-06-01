describe("Test into demo.test.js", () => {
  test("strings must be equals", () => {
    //1. init vars
    const msg = "hello world";
    //2. action
    const msg2 = `hello world`;

    //3. watch behavior, msg is expected to be equals to msg2; msg===msg2
    expect(msg).toBe(msg2);
  });
});

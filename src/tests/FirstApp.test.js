import { shallow } from "enzyme";
import FirstApp from "../FirstApp";

describe("Test in <FirstApp component>", () => {
  /* test('should show "this is a prop value to test', () => {
    const hi2 = "this is a prop value to test";
    const { getByText } = render(<FirstApp hi2={hi2} />);
    //asses if the textt of hi2 is in the renderized component
    expect(getByText(hi2)).toBeInTheDocument(); 
  });*/

  //now using enzyme
  test("should show <FirstApp/> correctly", () => {
    const hi2 = "hello iam a greet";
    const wrapper = shallow(<FirstApp hi2={hi2} />);

    expect(wrapper).toMatchSnapshot();
  });
});

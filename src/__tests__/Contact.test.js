import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../components/Contact";

// To Group our test cases if there are enumerous tests we can use describe
describe("Contact component test cases", () => {
  // beforeAll(() => {
  //   console.log("before all");
  // });
  // beforeEach(() => {
  //   console.log("before each");
  // });

  // afterAll(() => {
  //   console.log("after all");
  // });
  // afterEach(() => {
  //   console.log("after each");
  // });

  it('Should have a heading "Contact Page" in a Contact component', () => {
    render(<Contact />);

    const heading = screen.getByText("Contact Page");

    expect(heading).toBeInTheDocument();
  });

  it("Should have inputs in the document", () => {
    render(<Contact />);

    const inputBoxes = screen.getAllByRole("textbox");

    for (let i = 0; i < inputBoxes.length; i++) {
      expect(inputBoxes[i]).toBeInTheDocument();
    }
  });

  it("Should have a button with Text 'Submit' ", () => {
    render(<Contact />);

    const button = screen.getByRole("button");

    // console.log(button);

    expect(button).toBeInTheDocument();
  });

  it("Should have 2 input tag in the Contact component", () => {
    render(<Contact />);

    const inputBoxes = screen.getAllByRole("textbox");

    expect(inputBoxes.length).toBe(2);
  });
});

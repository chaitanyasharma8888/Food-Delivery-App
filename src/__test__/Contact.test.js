import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact";
import "@testing-library/jest-dom";

describe("Contact us Page test case", () => {
  it("should load heading inside Component ", () => {
    render(<Contact />); //render in js dom

    //querying
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument(); //this will find out wether the heading was inside the document or not means inside the screen or not and install this "@testing-library/jest-dom";
  });

  it("should load button inside Component ", () => {
    render(<Contact />); //render in js dom

    //   const button = screen.getByRole("button");
    //or
    const button = screen.getByText("Submit");

    expect(button).toBeInTheDocument(); //this will find out wether the heading was inside the document or not means inside the screen or not and install this "@testing-library/jest-dom";
  });

  it("should load input name inside Component ", () => {
    render(<Contact />); //render in js dom

    const inputName = screen.getByPlaceholderText("name");

    expect(inputName).toBeInTheDocument(); //this will find out wether the heading was inside the document or not means inside the screen or not and install this "@testing-library/jest-dom";
  });

  //if you want to test all input fields in component in one go

  it("should load all inputs inside contact component", () => {
    render(<Contact />);
    const allInput = screen.getAllByRole("textbox");
    console.log(allInput.length); //it returns array length i.e 2
    expect(allInput.length).toBe(2);
  });
});

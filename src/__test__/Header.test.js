// global.TextEncoder = require('util').TextEncoder;
// global.TextDecoder = require('util').TextDecoder;

import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../components/Header";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("should render a header component with login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  ); //here redux and their terminilogies is not understand by jest so we have to pass store here

  //   const loginButton=screen.getByRole("button");//ONE WAY TO FIND LOGIN BUTTON
  const loginButton = screen.getByRole("button", { name: "Login" }); //ONE WAY TO FIND LOGIN BUTTON but having multiple button but want to test only login button
  //   const loginButton=screen.getByText("Login");//2nd way

  expect(loginButton).toBeInTheDocument();
});

it("should render a CART header component with carts items zero", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItem = screen.getByTestId("cart-count"); //important with emoji (add data-testid="cart-count" in Header component)
  expect(cartItem).toHaveTextContent("🛒(0 Items)");
});

it("should render a login button on click in component", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  ); //here redux and their terminilogies is not understand by jest so we have to pass store here

  const loginButton = screen.getByRole("button", { name: "Login" });
  fireEvent.click(loginButton); //test for click event

  expect(loginButton).toBeInTheDocument();

  const logoutButton = screen.getByRole("button", { name: /Logout/ });

  expect(logoutButton).toBeInTheDocument();
});

import RestaurantDetails from "../components/RestaurantDetails";
import { fireEvent, render, screen } from "@testing-library/react";
import MOCK_DATA from "./mocks/resCartMock.json";
import { act } from "react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import Header from "../components/Header";
import { BrowserRouter } from "react-router-dom";
import Cart from "../components/Cart";
global.fetch = jest.fn(async () => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should have the cart Restaurant Menu with accordian headers", async () => {
  await act(async () => {
    render(<RestaurantDetails />);
  });

  const accordianHeader = screen.getByText("Specialty Pizzas");

  expect(accordianHeader).toBeInTheDocument();
});

it("Should open cuisines details on click of accordian header", async () => {
  await act(async () => {
    render(
      <Provider store={appStore}>
        <RestaurantDetails />
      </Provider>
    );
  });

  const accordianHeader = screen.getByText("Specialty Pizzas");

  fireEvent.click(accordianHeader);

  const menuItems = screen.getAllByTestId("resMenuItems");

  expect(menuItems.length > 0).toBeTruthy();
});

it("Should have the menuItems with ADD + button", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantDetails />
        </Provider>
      </BrowserRouter>
    );
  });

  const accordianHeader = screen.getByText("Specialty Pizzas");

  fireEvent.click(accordianHeader);

  const addBtns = screen.getAllByText("ADD +");

  fireEvent.click(addBtns[0]);

  const cartItem = screen.getByTestId("headerCart");

  expect(cartItem).toBeInTheDocument();
});

it("Should have the cart items", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantDetails />
          <Cart />
        </Provider>
      </BrowserRouter>
    );
  });

  const cartItems = screen.getAllByTestId("resMenuItems");

  expect(cartItems.length > 0).toBeTruthy();
});

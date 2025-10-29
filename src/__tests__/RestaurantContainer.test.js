import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantContainer from "../components/RestaurantContainer";
import MOCK_RESTAURANT_DATA from "./mocks/resContainerMock.json";
import { act } from "react";
import { BrowserRouter } from "react-router";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_RESTAURANT_DATA),
  });
});

it("Should have a button named as Search", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <RestaurantContainer />
      </BrowserRouter>
    )
  );

  const cardsBeforeInput = screen.getAllByTestId("resCard");

  expect(cardsBeforeInput.length).toBe(10);

  const searchBtn = screen.getByRole("button", { name: "Search" });

  const searchInput = screen.getByTestId("searchInput");

  fireEvent.change(searchInput, { target: { value: "burger" } });

  fireEvent.click(searchBtn);

  const cardsAfterSearch = screen.getAllByTestId("resCard");
  expect(cardsAfterSearch.length).toBe(1);

  expect(searchBtn).toBeInTheDocument();
});

it("Should have 3 cards when we click top rated restaurant", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <RestaurantContainer />
      </BrowserRouter>
    )
  );
  const cardsBeforeClick = screen.getAllByTestId("resCard");
  console.log(cardsBeforeClick.length);
  const topRatedBtn = screen.getByTestId("topRatedResBtn");

  fireEvent.click(topRatedBtn);

  const cardsAfterClick = screen.getAllByTestId("resCard");
  console.log(cardsAfterClick.length);

  expect(cardsAfterClick.length).toBe(1);
});

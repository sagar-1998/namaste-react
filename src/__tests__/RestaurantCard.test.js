import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RestaurantCard from "../components/RestaurantCard";
import MOCK_DATA from "./mocks/resCardMock.json";
import withPromotion from "../hoc/withPromotion";

it("Should have the name of the restaurant", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const name = screen.getByText("Pizza Paradise");

  expect(name).toBeInTheDocument();
});

it("Should have the HOC with Promoted Label", () => {
  const RestaurantCardPage = withPromotion(RestaurantCard);
  render(<RestaurantCardPage resData={MOCK_DATA} />);

  const name = screen.getByText("VEG");

  expect(name).toBeInTheDocument();
});

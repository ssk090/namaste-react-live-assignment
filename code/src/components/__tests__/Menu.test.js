import { render, waitFor, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
import { MENU_DATA } from "../../mocks/data";
import store from "../../utils/store";
import Header from "../Header";
import "@testing-library/jest-dom";
import RestaurantMenu from "../RestaurantMenu";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MENU_DATA);
    },
  });
});

test("Add items to cart", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
        <RestaurantMenu />
      </Provider>
    </StaticRouter>
  );
  await waitFor(() => expect(body.getByTestId("menu")));
  const addBtn = body.getAllByTestId("addBtn");
  fireEvent.click(addBtn[0]);
  //   fireEvent.click(addBtn[2]);
  const cart = body.getByTestId("cart");
  expect(cart.innerHTML).toBe("Cart - 1");
});

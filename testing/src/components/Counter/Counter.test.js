import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./index";

test("increase btn", async () => {
  render(<Counter />);

  const count = screen.getByText("0");
  const increaseBtn = screen.getByText("Increase");

  await userEvent.click(increaseBtn);
  expect(count).toHaveTextContent("1");
});

test("decrease btn", async() => {
    render(<Counter />);

    const count = screen.getByText("0");
    const decreaseBtn = screen.getByText("Decrease");

    await userEvent.click(decreaseBtn);
    expect(count).toHaveTextContent("-1");
})
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Todo from "./index";

test("Todo testleri", async () => {
  render(<Todo />);

  const button = screen.getByText("Add");
  const input = screen.getByLabelText("Text");

  expect(button).toBeInTheDocument();
  expect(input).toBeInTheDocument();
});

// test("Varsayılan olarak verilen 3 nesne render edilmeli", () => {
//     const items = screen.getAllByText(/Item/i);
//     expect(items.length).toEqual(3);
// })

test("Inputa string girilip butona basılınca listeye eklenmeli", async () => {
  render(<Todo />);
  const input = screen.getByLabelText("Text");
  const button = screen.getByText("Add");

  const name = "Ali";
  await userEvent.type(input, name);

  await userEvent.click(button);

  expect(screen.getByText(name)).toBeInTheDocument();
});

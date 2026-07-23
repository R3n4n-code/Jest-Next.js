import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Formulario from "./index";

test("adiciona uma nova tarefa", async () => {
  render(<Formulario />);

  await userEvent.type(screen.getByLabelText(/título/i), "Estudar Jest");
  await userEvent.type(screen.getByLabelText(/descrição/i), "Fazer testes");

  await userEvent.click(
    screen.getByRole("button", { name: /adicionar/i })
  );

  expect(screen.getByText("Estudar Jest")).toBeInTheDocument();
  expect(screen.getByText("Fazer testes")).toBeInTheDocument();
});
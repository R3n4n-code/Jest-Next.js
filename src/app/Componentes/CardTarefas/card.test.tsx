import { render, screen } from "@testing-library/react";
import GridTarefas from "./index";

test("adiciona uma nova tarefa", async () => {
  const tarefas = [
  {
    id: 1,
    titulo: "Estudar Jest",
    descricao: "Aprender testes",
  },
  {
    id: 2,
    titulo: "Estudar Next",
    descricao: "Server Components",
  },
];
render(<GridTarefas tarefas={tarefas} />);

expect(screen.getByText("Estudar Jest")).toBeInTheDocument();
expect(screen.getByText("Aprender testes")).toBeInTheDocument();
expect(screen.getByText("Estudar Next")).toBeInTheDocument();
expect(screen.getByText("Server Components")).toBeInTheDocument();
});

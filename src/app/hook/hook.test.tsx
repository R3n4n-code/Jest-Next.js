import { useContadorTarefas } from "./HookPersonalizado";


test("Testando o hook personalizado", () => {
    const tarefasIniciais = [
      {
        id: 1,
        titulo: "Tarefa 1",
        descricao: "Descrição 1",
      },
      {
        id: 2,
        titulo: "Tarefa 2",
        descricao: "Descrição 2",
      },
    ];

    const tarefasNovas = [
      {
        id: 3,
        titulo: "Tarefa 3",
        descricao: "Descrição 3",
      },
    ];

    const resultado = useContadorTarefas(tarefasIniciais, tarefasNovas);

    expect(resultado).toBe(3);
  });



import Tarefas from "src/types/type";

export function useContadorTarefas(
  quantidadeInicial: Tarefas[],
  tarefasNovas: Tarefas[]
) {
  return quantidadeInicial.length + tarefasNovas.length;
}


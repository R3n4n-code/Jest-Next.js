import Tarefas from "src/types/type";
import Corpo from "../TarefaCorpo";

type Props = {
    tarefas: Tarefas[]
}
const GridTarefas = ({ tarefas }: Props) => {
    return (
        <section>
            {tarefas.map(tarefa => <Corpo key={tarefa.id} tarefas={tarefa} />)}
        </section>

    );
};

export default GridTarefas;
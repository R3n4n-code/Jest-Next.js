import GridTarefas from "./Componentes/CardTarefas";
import data from "src/app/data/data.json";
import Formulario from "./Componentes/Formulario";
import "src/styles/global.css";

export default function Page() {
  return (
    <div>
      <Formulario />
      <GridTarefas tarefas={data} />
    </div>
  );
}

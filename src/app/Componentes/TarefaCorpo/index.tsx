import Tarefas from "src/types/type";
import styles from "./card.module.css";
type Props = {
    tarefas: Tarefas
}

const Corpo = ({ tarefas }: Props) => {
    const { titulo, descricao } = tarefas;

    return (
        <main className={styles.container}>
            <div className={styles.card}>
                <h2>{titulo}</h2>
                <p>{descricao}</p>
            </div>
        </main>
    );

};

export default Corpo;
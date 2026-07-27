"use client";

import { useState } from "react";
import { useContadorTarefas } from "src/app/hook/HookPersonalizado";
import Tarefas from "src/types/type";
import tarefajson from "src/app/data/data.json";
import styles from "./Formulario.module.css";

const Formulario = () => {
    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [tarefas, setTarefas] = useState<Tarefas[]>([]);
    const total = useContadorTarefas(tarefas, tarefajson);
    const [erro, setErro] = useState("");
    function adicionarTarefa(e: React.FormEvent) {
        e.preventDefault();
        
        if (titulo.trim() === "" || descricao.trim() === "") {
            setErro("Preencha todos os campos antes de adicionar");
            return;
        }
        setErro("");
        const novaTarefa = {
            id: Date.now(),
            titulo,
            descricao,
        };

        setTarefas([...tarefas, novaTarefa]);
        
        setTitulo("");
        setDescricao("");

        if (titulo.trim() === "" || descricao.trim() === "") {
            setErro("Preencha todos os campos antes de adicionar");
            return;
        }
    }
    return (
        <div>
            <div className={styles.container}>
                <h3>Tarefas: {total}</h3>
                <form onSubmit={adicionarTarefa} className={styles.form}>
                    <label className={styles.label} htmlFor="titulo">Título</label>
                    <input
                        
                        className={styles.input}
                        id="titulo"
                        type="text"
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                    />

                    <label className={styles.label} htmlFor="descricao">
                        Descrição
                    </label>
                    <input
                        
                        className={styles.input}
                        id="descricao"
                        type="text"
                        value={descricao}
                        onChange={(e) => setDescricao(e.target.value)}
                    />

                    <button className={styles.button} type="submit">
                        Adicionar
                    </button>
                    <p>{erro}</p>
                </form>
            </div>


            {tarefas.map((tarefa) => (
                <div className={styles.containerCard} key={tarefa.id}>
                    <div className={styles.card}>
                        <h2>{tarefa.titulo}</h2>
                        <p>{tarefa.descricao}</p>
                    </div>
                </div>
            ))}

        </div>
    );
};

export default Formulario;
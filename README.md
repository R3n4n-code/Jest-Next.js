# 📝 Gerenciador de Tarefas

Projeto desenvolvido para criação e gerenciamento de tarefas utilizando **Next.js**, **React**, **TypeScript**, **Jest** e **ESLint**.

O objetivo do projeto é praticar a criação de componentes, organização de código, validação de formulários e garantir a qualidade da aplicação por meio de testes automatizados e análise de código.

---

## 🚀 Tecnologias utilizadas

### ⚛️ Next.js

Framework baseado em React utilizado para construção da aplicação.

Recursos utilizados:

- App Router
- Componentes React
- Organização por componentes
- Renderização otimizada

### ⚛️ React

Biblioteca utilizada para criação da interface da aplicação.

Foi utilizada para:

- Criação de componentes
- Gerenciamento de estados
- Manipulação de eventos
- Atualização dinâmica da interface

### 📘 TypeScript

Utilizado para adicionar tipagem estática ao projeto.

Principais usos:

- Tipagem de componentes
- Tipagem de estados
- Tipagem de funções
- Interfaces e objetos

---
⚙️ Instalação das dependências

Para instalar todas as dependências necessárias do projeto, execute:

npm install

Esse comando instala todas as bibliotecas presentes no arquivo package.json, incluindo:

Next.js
React
TypeScript
Jest
React Testing Library
ESLint

---

## 🧪 Testes automatizados

### Jest

O Jest é utilizado para criar e executar testes automatizados, garantindo que as funcionalidades continuem funcionando corretamente após alterações no código.

Os testes verificam:

- Renderização de componentes
- Funcionamento do formulário
- Criação de tarefas
- Interações do usuário

#### Instalação

```bash
npm install --save-dev jest
```

#### Executar os testes

```bash
npm test
```

ou

```bash
npm run test:watch
```

---

### React Testing Library

Biblioteca utilizada juntamente com o Jest para testar componentes React simulando a interação do usuário.

Permite:

- Encontrar elementos na tela
- Verificar textos
- Testar formulários
- Simular interações
- Confirmar resultados esperados

---

## 🧹 ESLint

Ferramenta utilizada para analisar e padronizar o código.

Ela ajuda a identificar:

- Erros de programação
- Código não utilizado
- Problemas de tipagem
- Más práticas
- Problemas relacionados ao React e Next.js

#### Instalação

```bash
npm install --save-dev eslint
```

#### Executar o ESLint

```bash
npm run lint
```

---
## 🔄 Integração Contínua (GitHub Actions)

O projeto utiliza GitHub Actions para automatizar processos de qualidade e entrega.

A cada atualização enviada ao repositório, o pipeline executa automaticamente:

Instalação das dependências
Verificação do código com ESLint
Execução dos testes automatizados
Build de produção
Deploy automático na Vercel

---

## ✅ Funcionalidades

- Criar tarefas
- Listar tarefas
- Validar formulário
- Impedir tarefas vazias
- Gerenciar estado das tarefas
- Testar componentes
- Garantir qualidade do código

---

## ▶️ Executando o projeto

Instale as dependências:

```bash
npm install
```

Inicie o projeto:

```bash
npm run dev
```

---

## Vercel

Este projeto esta publicado no Vercel https://jest-next-guxlfoavt-nexablog.vercel.app/

## 👨‍💻 Autor

Desenvolvido por **Renan Mezzacapa**
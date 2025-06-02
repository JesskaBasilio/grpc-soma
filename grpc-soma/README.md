````md
# 💻 Projeto RPC com Node.js + gRPC

Este projeto implementa um serviço simples de **Soma de dois números** utilizando **RPC (Remote Procedure Call)** com **gRPC em Node.js**.

---

## 🚀 Tecnologias Utilizadas

- 🟨 JavaScript (Node.js)
- ⚙️ gRPC (`@grpc/grpc-js`, `@grpc/proto-loader`)
- 📄 Protocolo `.proto` (gRPC)
- 🧪 Terminal para testes de cliente e servidor

---

## 🧠 Objetivo

Simular a comunicação remota entre dois sistemas:

- **Servidor** que oferece o serviço de soma.
- **Cliente** que consome o serviço e exibe o resultado.

---

## 📦 Instalação e Execução

### 🔧 Pré-requisitos
- Node.js instalado na máquina
- Terminal

### 📥 Clone o projeto (ou acesse sua pasta)

```bash
git clone [seu-repositório-ou-abra-a-pasta]
cd grpc-soma
````

### 📦 Instale as dependências

```bash
npm install
```

### ▶️ Execute o servidor

```bash
node server.js
```

### 💬 Em outro terminal, execute o cliente

```bash
node client.js
```

---

## 🔢 Exemplo de Resultado

```bash
🟢 Servidor gRPC rodando em http://localhost:50051
🔢 Resultado da soma: 8
```

---

## 📂 Estrutura do Projeto

```
grpc-soma/
├── calculator.proto         # Definição do serviço gRPC
├── server.js                # Servidor RPC
├── client.js                # Cliente RPC
├── package.json             # Dependências
└── README.md                # Documentação do projeto
```

---

## 👩‍💻 Desenvolvedores

* **Jessica de Lima Basilio**
* **Ricardo Ribeiro de Freitas Filho**
* **Erik Lima de Oliveira**
* 💡 Projeto realizado para obtenção de nota


---

> 📚 Projeto acadêmico – Universidade do Estado de Minas Gerais – Sistemas de Informação – 7º período

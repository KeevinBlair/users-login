# Módulo de Login

## 📌 Descrição

Função simples de autenticação que recebe **login** e **senha**, verifica em uma lista de usuários e retorna sucesso ou erro.

---

## ⚙️ Regras

* Se login e senha estiverem corretos:

  * retorna: **"Logado com sucesso."**

* Caso contrário:

  * lança erro: **"Usuário não encontrado."**

---

## ▶️ Como rodar

1. Instalar dependências:

```bash
npm install
```

2. Executar testes:

```bash
npm test
```

---

## 🧪 Testes

Cobrem dois cenários:

* ✔ Login válido
* ✔ Login inválido (deve lançar erro)

---

## 🔐 Variáveis de ambiente

As senhas são carregadas via `.env`.

Exemplo de `.env`:

```env
USER_1_PASSWORD=1234
USER_2_PASSWORD=4321
USER_3_PASSWORD=123
```

⚠️ O arquivo `.env` não deve ser versionado (já incluído no `.gitignore`).

---

## 📁 Estrutura

```text
src/
  login.js

test/
  login.test.js
```

---

## 📎 Observações

* Projeto acadêmico (sem criptografia de senha)
* Comparação direta de valores
* Uso de `throw` para tratamento de erro

---

//Preciso de uma função capaz de receber duas entradas: Login e Senha. Ela deverá navegar em um lista pre-existente, com 3 usuários e então retornar o texto “Logado com sucesso.”, caso exista um usuário com login e senha iguais aos informados. Caso não exista um usuário com login e senha informados, uma mensagem dizendo “Usuário não encontrado.” deverá ser exibida.
import 'dotenv/config';
import { error } from "node:console";

const usuarios = [
  {
    login: 'kevin.blair',
    senha: process.env.USER_1_PASSWORD
  },
  {
    login: 'marcos.matos',
    senha: process.env.USER_2_PASSWORD
  },
  {
    login: 'guilherme.andrade',
    senha: process.env.USER_3_PASSWORD
  }
];

export function appLogin(login, senha){
    for (let usuario of usuarios){
        if (usuario.login == login && usuario.senha == senha){
            return 'Logado com sucesso.';
        }
    };

      throw new Error ('Usuário não encontrado.');
};
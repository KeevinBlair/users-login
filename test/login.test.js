//Preciso de uma função capaz de receber duas entradas: Login e Senha. Ela deverá navegar em um lista pre-existente, com 3 usuários e então retornar o texto “Logado com sucesso.”, caso exista um usuário com login e senha iguais aos informados. Caso não exista um usuário com login e senha informados, uma mensagem dizendo “Usuário não encontrado.” deverá ser exibida.

import { appLogin } from '../src/login.js';
import assert from 'node:assert';

describe('Testes de Módulo de Login', () => {
    describe('Testes da função appLogin', () => {
        it('Deve retornar "Logado com sucesso." quando o usuário e senha for encontrado.', () => {
            //Act
            const resultado = appLogin('kevin.blair', '1234');

            //Assert
            assert.equal(resultado, 'Logado com sucesso.');
        });

        it('Deve retornar "Usuário não encontrado." quando o usuário for encontrado mas a senha for incorreta.', () => {
            //Act & Assert
            assert.throws(
                () => { appLogin('kevin.blair', '12345') },
                {
                    message: 'Usuário não encontrado.'
                }
            );
        });

        it('Deve retornar "Usuário não encontrado." quando o usuário não for encontrado.', () => {
            //Act & Assert
            assert.throws(
                () => { appLogin('kevin.silva', '12345') },
                {
                    message: 'Usuário não encontrado.'
                }
            );
        });
    });
})
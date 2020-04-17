Feature: Registrar novo usuário

  Background:
   Given que estaja na tela Register

Scenario: Registrar usuário com os dados obrigatórios
When usuário preencher os campos obrigatórios
And clicar no botão submit
Then o sistema deverá ir para página de listagem de usuários cadastrados

Scenario: Registrar usuário com todos os dados
When usuário preencher todos os campos
And clicar no botão submit
Then o sistema deverá ir para página de listagem de usuários cadastrados

Scenario: Limpar todos os campos
And possua campos preenchidos
When usuário clicar no botão refresh 
Then todos os campos devem ser limpos
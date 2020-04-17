import { Given, Then, When } from 'cucumber';
import { context } from '../../data/Context';
import { registerUserPage } from '../pages/RegisterUser.pages';
import { listUserPage } from '../pages/ListUser.pages';


Given(/^que estaja na tela Register$/, () => {
  registerUserPage.openRegister();
  registerUserPage.verificarTelaRegisterExibida();
});

Given(/^possua campos preenchidos$/, () => {
  registerUserPage.preencherDados(context.dadosBasicos.dadosUsuario, 'S');
  registerUserPage.validaCamposPreenchidos();
});

When(/^usuário clicar no botão refresh$/, () => {
  registerUserPage.clicarBotaoRefresh();
});

When(/^usuário preencher os campos obrigatórios$/, () => {
  registerUserPage.preencherDados(context.dadosBasicos.dadosUsuario, 'S');
});

When(/^clicar no botão submit$/, () => {
  registerUserPage.clicarBotaoSubmit();
  browser.pause(5000);
});

When(/^usuário preencher todos os campos$/, () => {
  registerUserPage.preencherDados(context.dadosBasicos.dadosUsuario, 'N');
});

Then(/^o sistema deverá ir para página de listagem de usuários cadastrados$/, () => {
  listUserPage.validarTelaListUsers();
});

Then(/^todos os campos devem ser limpos$/, () => {
    registerUserPage.validaCamposVazio();
});



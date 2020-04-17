
import { assert } from 'chai';

class RegisterUserPage {
  get formRegister() {
    return $('[id="formContextualizacao"]');
  }

  get inputFirstName() {
    return $('[ng-model="FirstName"]');
  }

  get inputLastName() {
    return $('[ng-model="LastName"]');
  }

  get inputAdress() {
    return $('[ng-model="Adress"]');
  }

  get inputEmail() {
    return $('[ng-model="EmailAdress"]');
  }

  get inputPhone() {
    return $('[ng-model="Phone"]');
  }

  get inputLanguages() {
    return $('[id="msdd"]');
  }

  get comboSkill() {
    return $('[ng-model="Skill"]');
  }

  get comboCountry() {
    return $('[id="countries"]');
  }

  get comboSelectCountry() {
    return $('[id="select2-country-container"]');
  }

  get comboYear() {
    return $('[id="yearbox"]');
  }

  get comboMonth() {
    return $('[ng-model="monthbox"]');
  }

  get comboDay() {
    return $('[id="daybox"]');
  }

  get inputPassword() {
    return $('[id="firstpassword"]');
  }

  get inputConfirmPassword() {
    return $('[id="secondpassword"]');
  }

  get radioGenderMasculino() {
    return $('[name="radiooptions"]')
  }

  get buttonSubmit(){
    return $('[id="submitbtn"]');
  }

  get buttonRefresh(){
    return $('[id="Button1"]');
  }


  preencherDados(dados, obrigatorios) {
    if(obrigatorios === 'S'){
      this.inputFirstName.setValue(dados.name);
      this.inputLastName.setValue(dados.lastName);      
      this.inputEmail.setValue(dados.email);
      this.inputPhone.setValue(dados.phone);
      this.radioGenderMasculino.click();
      this.comboCountry.scrollIntoView();
      this.comboCountry.selectByAttribute('value', dados.country);
      this.comboYear.selectByAttribute('value', dados.year);
      this.comboMonth.scrollIntoView();
      this.comboMonth.selectByAttribute('value', dados.month);
      this.comboDay.selectByAttribute('value', dados.day);
      this.inputPassword.setValue(dados.password);
      this.inputConfirmPassword.setValue(dados.passwordConfirm);
    }else {
      this.inputFirstName.setValue(dados.name);
      this.inputLastName.setValue(dados.lastName);
      this.inputAdress.setValue(dados.adress);
      this.inputEmail.setValue(dados.email);
      this.inputPhone.setValue(dados.phone);
      this.radioGenderMasculino.click();
      this.comboSkill.selectByAttribute('value', dados.skill);
      this.comboCountry.scrollIntoView();
      this.comboCountry.selectByAttribute('value', dados.country);
      this.comboYear.selectByAttribute('value', dados.year);
      this.comboMonth.scrollIntoView();
      this.comboMonth.selectByAttribute('value', dados.month);
      this.comboDay.selectByAttribute('value', dados.day);
      this.inputPassword.setValue(dados.password);
      this.inputConfirmPassword.setValue(dados.passwordConfirm);
    }
  }

  openRegister() {
    browser.url('/Register.html');
}

  verificarTelaRegisterExibida(){
    browser.pause(3000);
    this.formRegister.isExisting();
  }

  clicarBotaoSubmit(){
    this.buttonSubmit.click();
  }

  clicarBotaoRefresh(){
    this.buttonRefresh.click();
  }

  validaCamposPreenchidos(){
    assert.isTrue(this.inputFirstName.getValue().trim() !== '');
    assert.isTrue(this.inputLastName.getValue().trim() !== '');
    assert.isTrue(this.inputEmail.getValue().trim() !== '');
    assert.isTrue(this.inputPhone.getValue().trim() !== '');
    this.comboCountry.scrollIntoView();
    this.comboMonth.scrollIntoView();
    assert.isTrue(this.inputPassword.getValue().trim()   !== '');
    assert.isTrue(this.inputConfirmPassword.getValue().trim()   !== '');
  }

  validaCamposVazio(){
    assert.isTrue(this.inputFirstName.getValue().trim() === '');
    assert.isTrue(this.inputLastName.getValue().trim() === '');
    assert.isTrue(this.inputEmail.getValue().trim() === '');
    assert.isTrue(this.inputPhone.getValue().trim() === '');
    this.comboCountry.scrollIntoView();
    this.comboMonth.scrollIntoView();
    assert.isTrue(this.inputPassword.getValue().trim()   === '');
    assert.isTrue(this.inputConfirmPassword.getValue().trim()   === '');
  }
}

export const registerUserPage = new RegisterUserPage();

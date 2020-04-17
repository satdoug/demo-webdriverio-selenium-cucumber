/* eslint-disable no-magic-numbers */
import { assert } from 'chai';

class ListUserPage {
    get navegador() {
      return $('[class="ui-grid-pager-container"]');
    }

    validarTelaListUsers(){
        assert(this.navegador.isExisting(), 'Não foi possível visualizar os cadastros de usuários.');
    }

}

export const listUserPage = new ListUserPage();
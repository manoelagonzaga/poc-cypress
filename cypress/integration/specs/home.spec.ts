import { Utils, users } from '../page-obejcts/utils.po';

const utils = new Utils();

describe('Dado que estou acessando o Meu RH com perfil de Líder', () => {
  before(() => {
    utils.mobileView('iphone-x');
    utils.navigateToUrl("http://40.79.251.95:8081/#/home");
    utils.login(users.protheus);
  });

  describe('Quando a home é carregada', () => {
    it('Então o card de aniversariantes do mês é exibido com o nome dos colaboradores', () => {

    });
  });
});
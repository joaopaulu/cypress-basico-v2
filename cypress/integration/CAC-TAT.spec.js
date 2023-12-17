///<reference types="Cypress" />

describe("Central de Atendimento ao Cliente TAT", function () {
  beforeEach(function () {
    cy.visit("./src/index.html");
  });
  it("verifica o título da aplicação", function () {
    cy.title().should("be.equal", "Central de Atendimento ao Cliente TAT");
  });

  it("preenche os campos obrigatórios e envia o formulário", function () {
    const longText =
      "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.";
    cy.get("#firstName").type("João Paulo");
    cy.get("#lastName").type("Lima");
    cy.get("#email").type("jptick@gmail.com");
    cy.get("#open-text-area").type(longText, { delay: 0 });
    cy.get('button[type="submit"]').click();

    cy.get(".success").should("be.visible");
  });

  it.only("exibe mensagem de erro ao submeter o formulário com um email com formatação", function () {
    cy.get("#firstName").type("João Paulo");
    cy.get("#lastName").type("Lima");
    cy.get("#email").type("jptick@gmail,com");
    cy.get("#open-text-area").type('Teste');
    cy.get('button[type="submit"]').click();

    cy.get(".error").should("be.visible");
  });
});

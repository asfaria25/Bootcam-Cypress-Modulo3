/// <reference types="cypress" />
let faker = require('faker');

context('Validar Fluxo de Cadastro', () => {
    it('Cadastrar um novo Professor', () => {
        cy.visit('/give-classes')
        cy.url().should('contain','give-classe')

        cy.get('#name').type(faker.name.firstName() + ' ' + faker.name.lastName());
        cy.get('#avatar').type('http://2.bp.blogspot.com/-L50PltaDYw4/VSdCt3Mq2VI/AAAAAAAAbng/gPk7KgFF12s/s1600/Professor%2BXavier.jpg');
        cy.get('#whatsapp').type(faker.phone.phoneNumber());
        cy.get('#bio').type(faker.lorem.paragraph());
        cy.get('#subject').select('Física');
        cy.get('#cost').type('500');
        cy.get('#week_day').select('Segunda-feira');
        cy.get('#from').type('08:00');
        cy.get('#to').type('16:00');

        cy.server();
        cy.route('POST', '**/classes').as('cadastro');
        cy.get('button[type="submit"]').click();

        cy.wait('@cadastro').then((response) => {
            expect(response.status).to.eq(201);
        })

    });
});
/// <reference types="cypress" />

import React from 'react';
import Input from '../../src/components/Input';
import { mount } from 'cypress-react-unit-test';
import { BrowserRouter as Router } from 'react-router-dom';

context('Page Header Component', () => {
	const baseCss = '/__root/src/assets/styles/global.css';
	const indexCss = '/__root/src/components/input/styles.css';

	it('Deve ser renderizado com sucesso ', () => {
		const name = 'Bootcamp Agilizei';
		mount(
			<Router>
				<Input
					name="name"
					label="Nome Completo"
					value={name}
					onChange={e => {
						setName(e.target.value);
					}}
				/>
			</Router>,
			{
				stylesheet: [baseCss, indexCss],
			}
		);
		
		cy.get('.input-block').as('div');
		cy.get('label').as('label');
		cy.get('input#name').as('name');

		cy.get('@div').should('be.visible');
		cy.get('@label').should('have.text', 'Nome Completo');
        cy.get('@name').should('have.value', name);

		cy.get('@div').then(($elemento) => {
			cy.log($elemento.css('position'))
			expect($elemento.css('position')).to.be.equal('relative')
		})
        cy.get('body').then(($elemento) => {
			cy.log($elemento.css('background-color'))
			expect($elemento.css('background-color')).to.be.equal('rgb(240, 240, 247)')
		})
	});
});

/// <reference types="cypress" />

import React from 'react';
import PageHeader from '../../src/components/PageHeader';
import { mount } from 'cypress-react-unit-test';
import { BrowserRouter as Router } from 'react-router-dom';

context('Page Header Component', () => {
	const baseCss = '/__root/src/assets/styles/global.css';
	const indexCss = '/__root/src/components/PageHeader/styles.css';

	it('Deve ser renderizado com sucesso ', () => {
		const title = 'Que incrivel que você quer dar aulas.';
		const description = 'Bootcamp Agilizei';
		mount(
			<Router>
				<PageHeader 
				title={title} 
				description={description} 
				/>
			</Router>,
			{
				stylesheet: [baseCss, indexCss],
			}
		);
		cy.get('strong').as('title');
		cy.get('p').as('description');
		cy.get('.page-header').as('header');

		cy.get('@title').should('have.text', title);
		cy.get('@description').should('have.text', description);

		cy.get('@header').then(($elemento) => {
			cy.log($elemento.css('background-color'))
			expect($elemento.css('background-color')).to.be.equal('rgb(130, 87, 229)')
		})
	});
});
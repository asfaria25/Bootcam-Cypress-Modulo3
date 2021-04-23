/// <reference types="cypress" />
/// <reference types="@bahmutov/cy-api" />

context('Classes endpoint', () => {
	it('POST - Cadastrar um novo professor', () => {
		cy.api({
			method: 'POST',
			url: `${Cypress.config().apiUrl}/classes`,
			body: {
				name: 'Professor X',
				avatar: 'http://2.bp.blogspot.com/-L50PltaDYw4/VSdCt3Mq2VI/AAAAAAAAbng/gPk7KgFF12s/s1600/Professor%2BXavier.jpg',
				whatsapp: '51999999999',
				bio: 'Charles Francis Xavier, conhecido como Professor X',
				subject: 'História',
				cost: 1000,
				schedule: [
					{
						week_day: 0,
						from: '09:00',
						to: '20:00',
					},
				],
			},
		}).then((response) => {
			expect(response.status).to.eq(201);

            //expect(response.duration).lt(20);
            
            //Content-Type: application/javascript; charset=utf-8
            expect(response.headers)
                .to.have.property('content-type')
                .an('string')
                .equal('application/json; charset=utf-8')
        })
	});
});

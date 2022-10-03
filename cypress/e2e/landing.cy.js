describe('Should test dashboard', () => {
    it('should display landing page components', function () {
        cy.visit('http://localhost:3000');
        cy.contains('ARKutlur');

        cy.url().should('include', '/');

        /* testing if header is correct */
        cy.get('header')
            .get('div')
            .should('have.length', 15)

        /* testing main section */
        cy.get('section')
            .get('div')
            .should('have.length', 15)
            .and('contain', "Improving your cultural visits, using AR and AI")

        /* testing footer components */
        cy.get('footer')
            .get('div')
            .should('have.length', 15)
    })
});

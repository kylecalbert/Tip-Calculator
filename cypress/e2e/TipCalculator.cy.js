describe('Tip Calculator', () => {
  it('should return the correct total tip per person', () => {
    cy.visit('http://localhost:3000/');

    cy.get('[data-cy=customInput-cy-btn]').type(10);
    cy.get('input[placeholder="0"]').eq(0).type(100);
    cy.get('input[placeholder="0"]').eq(1).type(2);
    cy.get('[data-testid=tip-info-value]').eq(0).should('contain.text', '$5.0');

    cy.get('[data-testid=tip-info-value]')
      .eq(1)
      .should('contain.text', '$55.0');
  });

  it('should click on the selected tip percentage and change background', () => {
    cy.visit('http://localhost:3000/');
    const tipPercentage = 15;
    const tipPercentage2 = 25;

    cy.contains(`${tipPercentage}%`).click();

    cy.get('[data-testid=tip-buttons]');

    cy.contains(`${tipPercentage}%`).should(
      'have.css',
      'background-color',
      'rgb(127, 156, 159)'
    );

    cy.contains(`${tipPercentage2}%`).should(
      'have.css',
      'background-color',
      'rgb(0, 73, 77)'
    );
  });

  it('should reset all values to default when the Reset button is clicked', () => {
    cy.visit('http://localhost:3000/');

    cy.get('[data-cy=customInput-cy-btn]').type(10);
    cy.get('input[placeholder="0"]').eq(0).type('100');
    cy.get('input[placeholder="0"]').eq(1).type('2');

    cy.get('[data-testid=reset-button]').click();

    cy.get('[data-cy=customInput-cy-btn]').should('have.value', '');
    cy.get('input[placeholder="0"]')
      .should('have.length', 2)
      .should('have.value', '');
    cy.get('[data-testid=tip-info-value]').should('contain.text', '$0.0');
  });
});

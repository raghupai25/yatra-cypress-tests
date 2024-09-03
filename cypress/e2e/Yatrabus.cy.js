describe('Launch application', () => {
    beforeEach(() => {
        // Mock heavy resources to speed up the page load
        cy.intercept('*.jpg', { body: 'stubbed image' });
        cy.intercept('*.png', { body: 'stubbed image' });
        cy.intercept('*.css', { body: '' });
      });


    it('launch the test application', () => {
        cy.visit('https://www.yatra.com', {headers: {"Accept-Encoding": "gzip, deflate"}})

        cy.get('#booking_engine_buses').click()
        cy.wait(1000);
        cy.get('#BE_bus_from_station').click().click({delay:500}).clear({delay:500}).type("Jaip",{delay:500})
        cy.wait(1000);
        cy.get('.viewport').contains('Jaipur, Rajasthan').click();


        cy.get('#BE_bus_to_station').click().click({delay:500}).clear({delay:500}).type("Mumb",{delay:500})
        cy.wait(500)
        cy.get('.viewport').contains('Mumbai, Maharashtra').click();

        cy.get('#BE_bus_depart_date').click()
        cy.get('.month-wrapper')
        .contains('August\' 24')
        .scrollIntoView(); // Scroll to the month of June 2024
        cy.wait(500);
  
      // Select the desired day (e.g., 10th June 2024)
      cy.get('.month-wrapper')
        .contains('August\' 24',)
        .parent() // Navigate to the parent to access the dates
        .contains('15')
        .click(); // Click on the 15th day
  
      // Verify the date is correctly set in the input field
      cy.get('input#BE_bus_depart_date')
        .should('have.value', '15/08/2024')
        cy.wait(1000);

        
        cy.get('#BE_bus_search_btn').click({delay:1000})
        cy.url({ timeout: 10000 }).should('eq', 'https://ebus.yatra.com/busview/busdesktop/search?src=Jaipur&srcStnCode=YTJaipur&dest=Mumbai&destStnCode=YTMumbai&tt=O&ddate=2024-08-15&qty=1&source=fresco');

    // Wait for search results to load
    cy.wait(3000);

    // Verify and interact with search results
    cy.get(':nth-child(3) > div > div.flex.txt-r.xs2.hide-md > button', { timeout: 10000 })
      .should('be.visible')
      .click();


    })    
})
describe('Launch application', () => {
    beforeEach(() => {
        // Mock heavy resources to speed up the page load
        cy.intercept('*.jpg', { body: 'stubbed image' });
        cy.intercept('*.png', { body: 'stubbed image' });
        cy.intercept('*.css', { body: '' });
      });


    it('launch the test application', () => {
        cy.visit('https://www.yatra.com', {headers: {"Accept-Encoding": "gzip, deflate"}})

        cy.get('#booking_engine_hotels').click()
        cy.wait(500);
        cy.get('#BE_hotel_destination_city').click({delay:500}).clear({delay:500}).type("Udu",{delay:500})
        cy.wait(1000);
        cy.get('.viewport').contains('Udupi, Karnataka').click();


        cy.get('#BE_hotel_checkin_date').click()
        cy.get('.month-wrapper')
        .contains('August\' 24')
        .scrollIntoView(); // Scroll to the month of June 2024
        cy.wait(500);

        cy.get('.month-wrapper')
        .contains('August\' 24',)
        .parent() // Navigate to the parent to access the dates
        .contains('15')
        .click(); // Click on the 10th day

        cy.get('#BE_hotel_checkin_date')
        .should('have.value', '15/08/2024')

        cy.get('#BE_hotel_checkout_date').click();
        cy.get('.month-wrapper')
        .contains('August\' 24')
        .scrollIntoView(); // Scroll to the month of June 2024
        cy.wait(500);
  
      // Select the desired day (e.g., 10th June 2024)
      cy.get('.month-wrapper')
        .contains('August\' 24',)
        .parent() // Navigate to the parent to access the dates
        .contains('16')
        .click(); // Click on the 11th day
        cy.wait(500);


        cy.get('#BE_Hotel_pax_info > span').click()
        cy.wait(500);
        cy.get('#BE_Hotel_pax_box > div.iePasenger.clearfix > div.dflex.pax-vol > div:nth-child(2) > div > div > span.ddSpinnerPlus').click({delay:500}).click({delay:500})
        cy.wait(500);
        cy.get('.pax-num-adult').should('contain.text', '4');
        cy.wait(500);
        cy.get('.pax-num-child').should('contain.text', '0');
        cy.wait(500);
        cy.get('#BE_Hotel_pax_box > div.add-del-room.clearfix > a').click()
        cy.wait(500);
        cy.get('[data-hotelroom="2"] > .dflex > :nth-child(2) > .dd > .ddTitle > .ddSpinnerMinus').click()
        cy.get('[data-hotelroom="2"] > .dflex > :nth-child(2) > .pax-title > .pax-num-adult').should('contain.text', '1');



        cy.get('#BE_hotel_htsearch_btn').click({delay:500})

        cy.wait(5000);

        cy.contains('Paradise Isle Beach Resort - Udupi').click()




    })     
})

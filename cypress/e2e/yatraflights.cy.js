describe('Launch application', () => {
    it('launch the test application', () => {
        cy.visit('http://www.yatra.com/', {headers: {"Accept-Encoding": "gzip, deflate"}});

        cy.get('#BE_flight_origin_city').click().clear().type("New",{delay:200})
        cy.get('.viewport span:last-child').each(($el, index, $list) =>{
            cy.log($el.text())
            if($el.text() == 'JFK'){
                cy.wrap($el).click()
            }
        })
        cy.get('#BE_flight_arrival_city').click().clear().type("Mum",{delay:200})
        cy.get('.viewport span:last-child').each(($el, index, $list) =>{
            cy.log($el.text())
            if($el.text() == 'BOM'){
                cy.wrap($el).click()
            }
        })
        cy.get('input#BE_flight_origin_date') .click();
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
      cy.get('input#BE_flight_origin_date')
        .should('have.value', '15/08/2024')


        cy.get('input#BE_flight_arrival_date').click();
        cy.get('.month-wrapper')
        .contains('August\' 24')
        .scrollIntoView(); // Scroll to the month of June 2024
        cy.wait(5000);
  
      // Select the desired day (e.g., 10th June 2024)
      cy.get('.month-wrapper')
        .contains('August\' 24',)
        .parent() // Navigate to the parent to access the dates
        .contains('16')
        .click(); // Click on the 11th day

        cy.get('#BE_flight_paxInfoBox > span').click()
        cy.wait(2000)
        cy.get('[data-flightagegroup="adult"] > .dd > .ddTitle > .ddSpinnerPlus').click().click()
        cy.wait(2000)
        cy.get('[data-flightagegroup="child"] > .dd > .ddTitle > .ddSpinnerPlus').click()
        cy.wait(2000)
        cy.get('.mr0 > .dd > .ddTitle > .ddSpinnerPlus').click()
        cy.wait(2000)
        cy.get('#flight_class_select_child > ul > :nth-child(2)').click()
        cy.wait(2000)
        cy.get('.search-filter > :nth-child(1) > .custom-check > .ico').click()
        cy.wait(2000)
        cy.get(':nth-child(1) > #BE_flight_flsearch_btn').click()
  
})     
    })


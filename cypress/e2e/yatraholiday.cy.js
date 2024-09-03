describe('Launch application', () => {
    beforeEach(() => {
        // Mock heavy resources to speed up the page load
        cy.intercept('*.jpg', { body: 'stubbed image' });
        cy.intercept('*.png', { body: 'stubbed image' });
        cy.intercept('*.css', { body: '' });
      });


    it('launch the test application', () => {
        cy.visit('https://www.yatra.com', {headers: {"Accept-Encoding": "gzip, deflate"}})

        cy.get('#booking_engine_holidays').click()
        cy.wait(500)
        cy.get('#BE_holiday_leaving_city').click().click({delay:500}).clear({delay:500}).type("Jai",{delay:500})
        cy.wait(1000);
        cy.get('.viewport').contains('Jaipur').click();


        cy.get('#holiday_destination_city').click().click({delay:500}).clear({delay:500}).type("Dub",{delay:500})
        cy.wait(500)
        cy.get('.viewport').contains('Dubai').click();

        cy.get('.ddlabel').click()
        cy.get('.ddlabel').contains('July 2024').click();

        cy.get('#BE_holiday_search_btn').click();
        cy.wait(5000)

        cy.get(':nth-child(1) > .package-details > .package-price-container > .price-container > .btn').click();
        cy.wait(5000)
        
        
        cy.get('.offer > .red-button').click();
        cy.wait(5000)

        cy.get('[style="position:relative;"] > .yt-increase > .yt-add').click();
        cy.get('[style="position:relative;"] > .yt-increase > .yt-val').contains('3');
        cy.wait(500)

        cy.get('select.citydeoartDrop.yt-gst-select-states.ng-pristine.ng-invalid.ng-invalid-required').select('Karnataka');
        cy.get('.yt-primary-btn').click()
        




    })     
})

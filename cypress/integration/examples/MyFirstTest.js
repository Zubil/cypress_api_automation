describe('MySampleTest', () =>
 {
    it('Verify Title of the Page-Positive', () => // function is represented by '() => {}'
     {

         cy.visit('https://demo.nopcommerce.com/') // code to open the URL
         cy.title().should('eq','nopCommerce demo store') //code to verify title of the tab
    })

    it('Verify Title of the Page-Negative', () =>
    {

        cy.visit('https://demo.nopcommerce.com/')
        cy.title().should('eq','nopCommerce') 
   })




 })
const {validateHomePage, goToParabank, clickAboutUsButton} = require('../actions/home-page-actions')
const {validateAboutUsPage} = require('../actions/about-us-actions')


/* describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!')
    }) */
    describe('Parabank Website', () => {
        beforeEach('Go to parabank Home Page', async () =>{
            await goToParabank();
            await validateHomePage();
        });

        it('Go to parabank About Us Page', async () => {
           await clickAboutUsButton();
           await validateAboutUsPage();
        })

        it('Go to Services Page', async () => {
            await clickAboutUsButton();
            await validateAboutUsPage();
         })
})



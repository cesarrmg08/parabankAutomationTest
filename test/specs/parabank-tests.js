const {validateHomePage, goToParabankWebsite} = require('../actions/home-page-actions');
const {validateAboutUsPage, clickAboutUsButton} = require('../actions/about-us-actions');
const {validateServicesPage, clickServicesButton, scrollToRestFulServices} = require('../actions/services-actions');
const {validateLoginLabel, clickLogInButton, fillPasswordField, fillUserNameField, validateInvalidLoginErrorMessage, validateEmptyFieldErrorMessage} = require('../actions/login-actions');
const {clickPruductsButton, validateProductsPage, validateContactUsForm, clickContactUsButton} = require('../actions/products-actions');


    describe('Parabank Website', () => {

        /* This will maximize the browser when run the test */
        before('Maximize Window', async () => {
            await browser.maximizeWindow(); 
        });

        /* This will go to the main page before each test case */
        beforeEach('Go to parabank Home Page', async () =>{
            await goToParabankWebsite();
            await validateHomePage();
        });

        it('Go to parabank About Us Page', async () => {
           await clickAboutUsButton();
           await validateAboutUsPage();
        });

        it('Go to Services Page', async () => {
            await clickServicesButton();
            await validateServicesPage();
         });

         it('Scroll to Available Restful on Service Page', async () => {
            await clickServicesButton();
            await validateServicesPage();
            await scrollToRestFulServices();
         });

         it('Log In with Invalid Credentials', async () => {
           await validateLoginLabel();
           await fillUserNameField();
           await fillPasswordField();
           await clickLogInButton();
           await validateInvalidLoginErrorMessage();
         });

         it('Log In only with Username', async () => {
            await validateLoginLabel();
            await fillUserNameField();
            await clickLogInButton();
            await validateEmptyFieldErrorMessage();
          });

          it('Log In only with Password', async () => {
            await validateLoginLabel();
            await fillPasswordField();
            await clickLogInButton();
            await validateEmptyFieldErrorMessage();
          });

          it('Validate Contact Us Form on products Page', async () => {
            await clickPruductsButton();
            await validateProductsPage();
            await clickContactUsButton();
            await validateContactUsForm();
          });

})



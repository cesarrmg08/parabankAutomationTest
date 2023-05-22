    //
    
    
    const parabankIdentifier = () => {
        return $('//p[text()="Experience the difference"]');
    }
    //Buttons for each section of the page
    const aboutUsButton = () => {
        return $('//a[text()="About Us"]');
    }


    const homePageElements = {
        parabankIdentifier,
        aboutUsButton
    }
    module.exports = {
        homePageElements
    }
import ComponentsPage from '../pageobjects/componentsPage'

describe('React Components Testing', () => {
    
    before( async () => {
        await ComponentsPage.open();
    });
    
    it('Interact with Calendar icon Date Picker and validate the dacd ..te', async () => {
        // Click on calendar Icon and change the date to 1st.
        await ComponentsPage.calendarIcon.click();
        await ComponentsPage.selectDate.waitForClickable()
        await ComponentsPage.selectDate.click()
        
        //Get the changed date and validate the new date
        const dateValue = await ComponentsPage.dateInput.getValue();
        await expect(dateValue).toBe('08/01/2014');

    });

    it('Interact with Movie Drop Down, select and validate the movie', async () => {
        // Getting and Validating placeholder text
        const movieLabel = await ComponentsPage.movieDropDownLabel.getText();
        await expect(movieLabel).toBe('Movie');

        // Getting and Validating CSS -- We can validate any CSS property accordingly
        const animationName = await ComponentsPage.movieDropDown.getCSSProperty('animation-name');
        await expect(animationName.value).toBe('mui-auto-fill-cancel');

        // Select a movie from Drop Down and Validate
        await ComponentsPage.movieDropDown.click();
        await ComponentsPage.selectMovie.click()

        const movieSelected = await ComponentsPage.movieDropDown.getValue();
        await expect(movieSelected).toBe('The Dark Knight');
    });

    it('Interact with Checkbox and Validate default and disabled state', async () => {
        // Validate if the checkbox is checked
        const checkedState = await ComponentsPage.defaultChecked
        await expect(checkedState).toBeChecked();

        // Validate Disabled checkbox color attributes
        const disabledColor = await ComponentsPage.disabledCheckbox.getCSSProperty('color')
        await expect(disabledColor.value).toBe('rgba(84,84,84,1)')
        await expect(disabledColor.parsed.hex).toBe('#545454')
    });

    it('Interact with Filled text box and validate if css is added in the class', async () => {
        // Validate if the filled box is empty and the css is not present
        let filledBoxClass = await ComponentsPage.filledTboxCSS.getAttribute('class');
        await expect(filledBoxClass).not.toContain('MuiFormLabel-filled')

        // Add some text in Filled box
        await ComponentsPage.filledTextBox.addValue('I am a Filled Box!');

        // Validate if the css is being added dynamically
        filledBoxClass = await ComponentsPage.filledTboxCSS.getAttribute('class');
        await expect(filledBoxClass).toContain('MuiFormLabel-filled')

    });
});
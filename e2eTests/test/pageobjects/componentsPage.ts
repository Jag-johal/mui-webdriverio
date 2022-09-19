/**
 * Page Containing selectors and methods for a specific page
 */
class ComponentsPage {
    /**
     * define selectors using getter methods
     */
    get calendarIcon () {
        return $('#date-picker button');
    }

    get selectDate () {
        return $('.css-mvmu1r button')
    }

    get dateInput () {
        return $('#date-picker input')
    }

    get movieDropDown () {
        return $('#combo-box-demo')
    }

    get movieDropDownLabel () {
        return $('#combo-box-demo-label')
    }

    get selectMovie () {
        return $('#combo-box-demo-option-3')
    }

    get defaultChecked () {
        return  $('#defaultChecked')
    }

    get disabledCheckbox () {
        return $('#disabledChecked')
    }

    get filledTextBox () {
        return $('#filled-basic')
    }

    get filledTboxCSS () {
        return $('#filled-basic-label')
    }

    async open() {
        await browser.url("http://localhost:3000");
    }
}

export default new ComponentsPage();


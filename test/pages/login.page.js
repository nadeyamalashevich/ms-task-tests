import Page from './page';

export default class LoginPage extends Page {
    constructor(path) {
		super(path || '');
    }

	get $getStartedButton() {
		return $('#actionButton');
    }
    
    get $emailInput() {
        return $('input[type="email"]');
    }

    get $submitButton() {
        return $('input[type="submit"]');
    }

	login() {
        browser.waitUntil(() => this.$getStartedButton.isEnabled());
        this.$getStartedButton.click();
        browser.waitUntil(() => this.$emailInput.isEnabled());
        browser.pause(20000); // TODO login
	}
}
export default class Component {
    constructor(selectorOrElement) {
		if (!selectorOrElement) {
			throw new Error('Please specify selector or element of the component!');
		}
		this.selector = selectorOrElement;
    }
    
    get $() {
		return this.getElement(this.selector);
    }
    
    waitForIt(optTimeout) {
		this.$.waitForDisplayed({
			timeout: optTimeout,
			timeoutMsg: `${this.constructor.name} did not become visible in ${
				optTimeout || browser.config.waitforTimeout
			} ms`,
		});
		return this;
    }

    getElement(selector) {
        if (typeof selector === 'string') {
            return $(selector);
        }
        return selector;
    };
}
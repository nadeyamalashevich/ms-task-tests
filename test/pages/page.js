export default class Page {
	constructor(path = '/') {
		this.path = path;
    }

    isLoaded() {
		return browser.getUrl().includes(this.path);
    }
    
    open(path) {
		browser.url(path || this.path);
		this.waitForIt();
		return this;
    }
    
    waitForIt(optTimeout) {
		browser.waitUntil(() => this.isLoaded(), {
			timeout: optTimeout,
			timeoutMsg: `${this.constructor.name} did not load in ${optTimeout || browser.config.waitforTimeout} ms`,
		});
		return this;
	}
}
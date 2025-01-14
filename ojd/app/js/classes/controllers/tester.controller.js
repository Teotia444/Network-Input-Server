const FS = require('fs');
const OJD = window.OJD;

/*
	TesterController
	Handles the tester sidebar view and renders the currently connected joystick.
*/
class TesterController {

	constructor(rootController) {
		this.rootId = '#ojd-tester';
		this.objectIds = {
			information:'#ojd-tester-information',
			connected:'#ojd-tester-connected',
		};

		this.rootController = rootController;
		this.config = rootController.config;
		this.joystick = rootController.joystick;
		
		this.joystickConnected = false;
		this.intervalCheckJoystick = false;
	}

	/*
	 * bindEvents()
	 * @return NULL
	 * Binds events, also sets the interval to check for new joysticks.
	 */
	bindEvents() {
		if (!this.intervalCheckJoystick) {
			this.intervalCheckJoystick = setInterval(this.checkController.bind(this), 250);
		}
	}

	/*
	 * checkController()
	 * @return NULL
	 * Checks to see if a controller is connected on interval. Could be simplified in the future
	 */
	checkController() {
		if (this.joystickConnected != this.joystick.isConnected()) {
			if (this.joystick.isConnected()) {
				this.joystickConnected = true;
			} else {
				this.joystickConnected = false;
			}
			this.render();
		}
	}

	/*
	 * renderInformation()
	 * @returns NULL
	 * Renders the joystick information currently connected
	 */
	renderInformation() {

		if (!this.joystickConnected) {
			$(this.objectIds.connected).hide();
			$(this.objectIds.information).html(this.joystick.getJoystickInfo());
		} else {
			$(this.objectIds.connected).show();
			$(this.objectIds.information).html(this.joystick.getJoystickInfo());
		}

	}

	/*
	 * renderCSSOverrides()
	 * @returns NULL
	 * Renders CSS overrides for the interface based upon if the joystick is connected or not.
	 */
	renderCSSOverrides() {

		let css="";

		if (!this.joystickConnected) {
			css += `#ojd-tester-wrapper{flex: 0 0 95px !important;}`;
		}

		$("#ojd-tester-css-overrides").html(css);

	}

	/*
	 * render()
	 * @return NULL
	 * General renderer
	 */	
	render() {
		this.checkController();
		this.renderInformation();
		this.renderCSSOverrides();
		this.bindEvents();
	}

	/*
	 * renderInitial()
	 * @return NULL
	 * Initial render called by rootController
	 */	
	renderInitial() {

		const files = [
			FS.openSync(OJD.appendCwdPath('app/views/components/tester.view.html'), 'r')
		];

		$(this.rootId).html("");
		
		for (const file of files) {
			const html = FS.readFileSync(file, 'UTF-8');
			$(this.rootId).append(html);
			FS.closeSync(file);
		}

		this.render();

	}

}


module.exports.TesterController = TesterController;

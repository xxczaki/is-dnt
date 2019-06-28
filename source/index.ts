'use strict';

/**
 * @returns {(boolean|undefined)} Whether the Do Not Track (DNT) policy is enabled in user's browser or not. `undefined` means the browser does not support DNT.
 */
const isDnt = (): boolean | undefined => {
	const nav: any = navigator;
	const winext: any = window.external;

	if (window.doNotTrack || nav.doNotTrack || nav.msDoNotTrack || 'msTrackingProtectionEnabled' in window.external) {
		if (window.doNotTrack === '1' || nav.doNotTrack === 'yes' || nav.doNotTrack === '1' || nav.msDoNotTrack === '1' || (winext.msTrackingProtectionEnabled && winext.msTrackingProtectionEnabled())) {
			return true;
		}

		return false;
	}

	return undefined;
};

module.exports = isDnt;
export default isDnt;

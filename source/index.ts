'use strict';

/**
    * @returns {(boolean\|undefined)} Whether the Do not track (DNT) policy is enabled in user's browser or not. Undefined means the browser does not support DNT.
	*/
const isDnt = (): boolean | undefined => {
	const nav: any = navigator;
	const winext: any = window.external;

	if (window.doNotTrack || nav.doNotTrack || nav.msDoNotTrack || 'msTrackingProtectionEnabled' in window.external) {
		if (window.doNotTrack === '1' || nav.doNotTrack === 'yes' || nav.doNotTrack === '1' || nav.msDoNotTrack === '1' || winext.msTrackingProtectionEnabled()) {
			return true;
		}

		return false;
	}

	return undefined;
};

module.exports = isDnt;
export default isDnt;

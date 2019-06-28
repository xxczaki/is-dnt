'use strict';

const reTruthy = /^(?:1|yes|true)$/;
const reFalsey = /^(?:0|no|false)$/;

const isFunction = <T>(arg: unknown): arg is T => typeof arg === 'function';
const isUndefined = (arg: unknown): arg is undefined => arg === undefined;

const yn = (arg: unknown): boolean | undefined => {
	const str = String(arg).trim();

	if (reTruthy.test(str)) {
		return true;
	}

	if (reFalsey.test(str)) {
		return false;
	}

	return undefined;
};

type FlagFunction = () => boolean;

/**
 * @returns {(boolean|undefined)} Whether the Do Not Track (DNT) policy is enabled in user's browser or not. `undefined` means the browser does not support DNT.
 */
const isDnt = (): boolean | undefined => {
	const navigator = window.navigator as Navigator & { msDoNotTrack?: '0' | '1' };
	const external = window.external as External & { msTrackingProtectionEnabled?: FlagFunction };

	const results = [
		window.doNotTrack,
		navigator.doNotTrack,
		navigator.msDoNotTrack,
		isFunction<FlagFunction>(external.msTrackingProtectionEnabled) ?
			external.msTrackingProtectionEnabled() :
			undefined
	]
		.map(it => yn(it))
		.filter(it => !isUndefined(it));

	if (results.length <= 0) {
		return;
	}

	return results.some(Boolean);
};

module.exports = isDnt;
export default isDnt;

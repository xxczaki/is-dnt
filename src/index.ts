const reTruthy = /^(?:1|yes|true)$/;
const reFalsey = /^(?:0|no|false)$/;

const isFunction = <T>(arg: unknown): arg is T => typeof arg === 'function';
const isUndefined = (arg: unknown): arg is undefined => arg === undefined;

const yn = (arg: unknown): boolean | undefined => {
	const str = String(arg).trim();

	if (reTruthy.test(str)) {
		return true;
	}

	if (reFalsey.test(str) || str === 'unspecified' || str === 'null') {
		return false;
	}

	return undefined;
};

type BooleanFunction = () => boolean;

/**
 * @returns {(boolean|undefined)} Whether the Do Not Track (DNT) policy is enabled in user's browser or not. `undefined` means the browser does not support DNT.
 */
const isDnt = (): boolean | undefined => {
	const navigator = window.navigator as
		Navigator & { msDoNotTrack?: '0' | '1' };
	const external = window.external as
		External & { msTrackingProtectionEnabled?: BooleanFunction };

	const results = [
		yn(window.doNotTrack),
		yn(navigator.doNotTrack),
		yn(navigator.msDoNotTrack),
		yn(
			isFunction<BooleanFunction>(external.msTrackingProtectionEnabled) ?
				external.msTrackingProtectionEnabled() :
				undefined
		)
	].filter(it => !isUndefined(it));

	return results.length > 0 ?
		results.some(Boolean) :
		undefined;
};

export default isDnt;

import test from 'ava';
// @ts-ignore
import browserEnv from 'browser-env';
import isDnt from './dist';

/*
	Frequent usage of `// @ts-ignore` in this file is intentional:
	`window` in lib.dom.d.ts is defined as a readonly property.
	However, for testing purposes we need to be able to manually set that property using browser-env!
*/

browserEnv(['window', 'navigator']);

test('Do Not Track API unavailable', t => {
	t.is(isDnt(), undefined);
});

test('supports `window.doNotTrack`', t => {
	// @ts-ignore
	window.doNotTrack = '1';
	t.is(isDnt(), true);
	// @ts-ignore
	window.doNotTrack = '0';
	t.is(isDnt(), false);
	// @ts-ignore
	window.doNotTrack = 'null';
	t.is(isDnt(), false);
	// @ts-ignore
	window.doNotTrack = 'unspecified';
	t.is(isDnt(), false);
	// @ts-ignore
	window.doNotTrack = undefined;
});

test('supports `navigator.doNotTrack`', t => {
	// @ts-ignore
	navigator.doNotTrack = '1';
	t.is(isDnt(), true);
	// @ts-ignore
	navigator.doNotTrack = 'yes';
	t.is(isDnt(), true);
	// @ts-ignore
	navigator.doNotTrack = '0';
	t.is(isDnt(), false);
	// @ts-ignore
	navigator.doNotTrack = 'no';
	t.is(isDnt(), false);
	// @ts-ignore
	window.doNotTrack = 'unspecified';
	t.is(isDnt(), false);
	// @ts-ignore
	navigator.doNotTrack = undefined;
});

test('supports `navigator.msDoNotTrack`', t => {
	// @ts-ignore
	navigator.msDoNotTrack = '1';
	t.is(isDnt(), true);
	// @ts-ignore
	navigator.msDoNotTrack = '0';
	t.is(isDnt(), false);
	// @ts-ignore
	navigator.msDoNotTrack = undefined;
});

test('supports `window.external.msTrackingProtectionEnabled`', t => {
	// @ts-ignore
	window.external.msTrackingProtectionEnabled = () => true;
	t.is(isDnt(), true);
	// @ts-ignore
	window.external.msTrackingProtectionEnabled = () => false;
	t.is(isDnt(), false);
	// @ts-ignore
	window.external.msTrackingProtectionEnabled = undefined;
});

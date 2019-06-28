import test from 'ava';
import browserEnv from 'browser-env';
import isDnt from '.';

browserEnv(['window', 'navigator']);

test('Do Not Track API unavailable', t => {
	t.is(isDnt(), undefined);
});

test('supports `window.doNotTrack`', t => {
	window.doNotTrack = '1';
	t.is(isDnt(), true);
	window.doNotTrack = '0';
	t.is(isDnt(), false);
	window.doNotTrack = undefined;
});

test('supports `navigator.doNotTrack`', t => {
	navigator.doNotTrack = '1';
	t.is(isDnt(), true);
	navigator.doNotTrack = 'yes';
	t.is(isDnt(), true);
	navigator.doNotTrack = '0';
	t.is(isDnt(), false);
	navigator.doNotTrack = 'no';
	t.is(isDnt(), false);
	navigator.doNotTrack = undefined;
});

test('supports `navigator.msDoNotTrack`', t => {
	navigator.msDoNotTrack = '1';
	t.is(isDnt(), true);
	navigator.msDoNotTrack = '0';
	t.is(isDnt(), false);
	navigator.msDoNotTrack = undefined;
});

test('supports `window.external.msTrackingProtectionEnabled`', t => {
	window.external.msTrackingProtectionEnabled = () => true;
	t.is(isDnt(), true);
	window.external.msTrackingProtectionEnabled = () => false;
	t.is(isDnt(), false);
	window.external.msTrackingProtectionEnabled = undefined;
});

'use strict';

import {
	disableBodyScroll,
	enableBodyScroll,
	clearAllBodyScrollLocks,
} from 'body-scroll-lock';
import A11yDialog from 'a11y-dialog';
import * as slider from './modules/slider.js';
import * as func from './modules/functions.js';

func.isWebp();

const navigationHieght = document.querySelector('.header');
document.documentElement.style.setProperty(
	'--scroll-padding',
	navigationHieght.getBoundingClientRect().height + 'px'
);

const menuToggle = document.querySelector('.menu-button');
const menuBody = document.querySelector('.menu__body');

if (menuToggle) {
	menuToggle.addEventListener('click', function (event) {
		const isOpened = menuToggle.getAttribute('aria-expanded') === 'true';
		menuToggle.setAttribute('aria-expanded', !isOpened);
		toggleBurgerInteractionClasses();
	});
}

function toggleBurgerInteractionClasses() {
	if (!header.classList.contains('header--scrolled')) {
		header.classList.add('header--scrolled');
	}
	menuToggle.classList.toggle('menu-button--active');
	menuBody.classList.toggle('menu__body--active');
}

/// watching page scroll to remove extra padding from header
/// after scrolling a bit from the top of the page
const header = document.querySelector('.header');

var checkHeader = _.throttle(() => {
	let scrollPosition = Math.round(window.scrollY);
	if (scrollPosition > 0) {
		header.classList.add('header--scrolled');
	} else {
		header.classList.remove('header--scrolled');
	}
	// Run JavaScript stuff here
}, 300);

window.addEventListener('scroll', checkHeader);

const popupContainer = document.getElementById('call-back-popup');
const dialog = new A11yDialog(popupContainer);
const body = document.querySelector('body');

dialog
	.on('show', () => disableBodyScroll(body))
	.on('hide', () => enableBodyScroll(body));

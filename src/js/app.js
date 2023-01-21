'use strict';

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
	// disable scroll on the page while menu is open
	document.body.classList.toggle('scroll-lock');
	menuToggle.classList.toggle('menu-button--active');
	menuBody.classList.toggle('menu__body--active');
}

// const pcMenuContainer = document.getElementById('nav-other');
// const mobileContacts = document.querySelector('.menu-mobile__contacts');
// const menuItemsList = document.getElementById('other-dropdown');

// const smallDevice = window.matchMedia('(min-width: 48em)');

// smallDevice.addListener(handleDeviceChange);

// function handleDeviceChange(e) {
// 	if (e.matches) {
// 		pcMenuContainer.append(menuItemsList);
// 	} else {
// 		mobileContacts.before(menuItemsList);
// 	}
// }

// // Run it initially
// handleDeviceChange(smallDevice);

/// watching page scroll to remove extra padding from header
/// after scrolling a bit from the top of the page
const header = document.querySelector('.header');
const mainSectionAnchor = document.querySelector('.wrapper');
const heroContainer = document.querySelector('.hero__container');
// const mainSectionAnchor = document.querySelector('.hero');
const headerSectionOptions = {
	// root: mainSectionAnchor,
	// rootMargin: '-10px 0px 0px 0px',
	// rootMargin: `${header.offsetHeight * -1}px`,
	rootMargin: `${header.offsetHeight * 1}px`,
	threshold: 1,
	// threshold: 0,
};

var checkHeader = _.throttle(() => {
	let scrollPosition = Math.round(window.scrollY);
	// If we've scrolled 100px, add "sticky" class to the header
	if (scrollPosition > 0) {
		// document.querySelector('header').classList.add('sticky');
		header.classList.add('header--scrolled');
	}
	// If not, remove "sticky" class from header
	else {
		// document.querySelector('header').classList.remove('sticky');
		header.classList.remove('header--scrolled');
	}
	// Run JavaScript stuff here
}, 300);

window.addEventListener('scroll', checkHeader);

console.log(header.offsetHeight * 1);
console.log(headerSectionOptions.rootMargin);

// const headerSectionObserver = new IntersectionObserver(function (entries) {
// 	entries.forEach((entry) => {
// 		// if (entry.isIntersecting) {
// 		// console.log(mainSectionAnchor.scrollTop);
// 		console.log(entry.intersectionRatio);
// 		console.log(entry.isIntersecting);
// 		// if (entry.intersectionRatio < 1) {
// 		// if (mainSectionAnchor.scrollTop > 0) {
// 		if (entry.isIntersecting) {
// 			// header.classList.add('header--scrolled');
// 			header.classList.add('header--scrolled');
// 		} else {
// 			header.classList.remove('header--scrolled');
// 			// header.classList.remove('header--scrolled');
// 		}
// 	});
// }, headerSectionOptions);

// headerSectionObserver.observe(heroContainer);

// /// listening to intersectioning with site section
// /// to add underline to site navigation link
// const navMenuLinks = document.querySelectorAll('.menu__link');
// const navMenuObserver = new IntersectionObserver(
// 	function (entries) {
// 		entries.forEach((entry) => {
// 			// if (entry.isIntersecting && entries.intersectionRatio > 0.5) {
// 			if (entry.isIntersecting) {
// 				navMenuLinks.forEach((link) => {
// 					const targetSection = link.getAttribute('href').replace('#', '');
// 					link.classList.toggle(
// 						'menu__link--active',
// 						targetSection === entry.target.id
// 					);
// 				});
// 			}
// 		});
// 	},
// 	{
// 		threshold: 0.2,
// 	}
// );

// document
// 	.querySelectorAll('.section')
// 	.forEach((section) => navMenuObserver.observe(section));

// /// scroll to site section and clost mobile after the click on link
// navMenuLinks.forEach((link) => {
// 	link.addEventListener('click', function (event) {
// 		if (menuBody.classList.contains('menu__body--active')) {
// 			toggleBurgerInteractionClasses();
// 		}
// 	});
// });

// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination, Autoplay, EffectFade } from 'swiper';

Swiper.use([Navigation, Pagination, Autoplay, EffectFade]);

const mainSlider = new Swiper('.hero__slider', {
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	loop: true,
	effect: 'fade',
	pagination: {
		el: '.hero__slider-pagination',
	},
	fadeEffect: { crossFade: true },
});

const teamSlider = new Swiper('.team__slider', {
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	loop: true,
	effect: 'fade',
	pagination: {
		el: '.team__slider-pagination',
	},
	navigation: {
		nextEl: '.team__slider-next-btn',
		prevEl: '.team__slider-prev-btn',
	},
	fadeEffect: { crossFade: true },
});

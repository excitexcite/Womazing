// /// Dark and light theme changer

// // Select the button
// const btn = document.querySelector('.button-theme');
// // Check for dark mode preference at the OS level
// const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

// // Get the user's theme preference from local storage, if it's available
// const currentTheme = localStorage.getItem('theme');
// // If the user's preference in localStorage is dark...
// if (currentTheme == 'dark') {
// 	// ...let's toggle the .dark-theme class on the body
// 	document.documentElement.classList.toggle('dark-theme');
// 	// Otherwise, if the user's preference in localStorage is light...
// } else if (currentTheme == 'light') {
// 	// ...let's toggle the .light-theme class on the body
// 	document.documentElement.classList.toggle('light-theme');
// }

// // Listen for a click on the button
// btn.addEventListener('click', function () {
// 	// If the user's OS setting is dark and matches our .dark-theme class...
// 	if (prefersDarkScheme.matches) {
// 		// ...then toggle the light mode class
// 		document.documentElement.classList.toggle('light-theme');
// 		// ...but use .dark-theme if the .light-theme class is already on the body,
// 		var theme = document.documentElement.classList.contains('light-theme')
// 			? 'light'
// 			: 'dark';
// 	} else {
// 		// Otherwise, let's do the same thing, but for .dark-theme
// 		document.documentElement.classList.toggle('dark-theme');
// 		var theme = document.documentElement.classList.contains('dark-theme')
// 			? 'dark'
// 			: 'light';
// 	}
// 	// Finally, let's save the current preference to localStorage to keep using it
// 	localStorage.setItem('theme', theme);
// });

/// Dropdown 3 option theme switcher: system, light, dark

// // Select the dropdown
// const themeDropdown = document.querySelector('.theme-switcher__list');

// // Check for dark mode preference at the OS level
// const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

// // Get the user's theme preference from local storage, if it's available
// const currentTheme = localStorage.getItem('theme');
// // If the user's preference in localStorage is dark...
// if (currentTheme === 'dark') {
// 	// ...let's toggle the .dark-theme class on the body
// 	document.documentElement.classList.toggle('dark-theme');
// 	// Otherwise, if the user's preference in localStorage is light...
// } else if (currentTheme === 'light') {
// 	// ...let's toggle the .light-theme class on the body
// 	document.documentElement.classList.toggle('light-theme');
// }

// themeDropdown.addEventListener('click', function (event) {
// 	const targetButton = event.target.closest('button');

// 	if (!targetButton) return;

// 	switch (targetButton.id) {
// 		case 'theme-os': {
// 			console.log(prefersDarkScheme.matches);
// 			if (prefersDarkScheme.matches) {
// 				switchDarkTheme();
// 			} else {
// 				switchLightTheme();
// 			}
// 			localStorage.setItem('theme', '');
// 			break;
// 		}
// 		case 'theme-light': {
// 			switchLightTheme();
// 			localStorage.setItem('theme', 'light');
// 			break;
// 		}
// 		case 'theme-dark': {
// 			switchDarkTheme();
// 			localStorage.setItem('theme', 'dark');
// 			break;
// 		}
// 	}
// });

// function switchLightTheme() {
// 	console.log('light selected');
// 	document.documentElement.classList.add('light-theme');
// 	document.documentElement.classList.remove('dark-theme');
// }

// function switchDarkTheme() {
// 	console.log('light selected');
// 	document.documentElement.classList.add('dark-theme');
// 	document.documentElement.classList.remove('light-theme');
// }

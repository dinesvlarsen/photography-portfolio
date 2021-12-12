const header = document.querySelector('header');
const hamburgerMenu = document.querySelector('.nav__hamburger-menu');
const closeHamburgerMenu = document.querySelector('.nav__close-hamburger-menu')
const navMenu = document.querySelector('.nav__menu')
const main = document.querySelector('main');



header.addEventListener('click', navOnClick)

function navOnClick(event) {
	if (event.target.classList.contains('nav__hamburger-menu') || event.target.classList.contains('nav__close-hamburger-menu')) {
		hamburgerMenu.classList.toggle('hidden');
		closeHamburgerMenu.classList.toggle('hidden');
		navMenu.classList.toggle('hidden');
		main.classList.toggle('hidden')
	}
}





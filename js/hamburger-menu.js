const header = document.querySelector('header');
const hamburgerMenu = document.querySelector('.nav__hamburger');
const closeHamburgerMenu = document.querySelector('.nav__close-hamburger')
const navMenu = document.querySelector('.nav__menu')
const main = document.querySelector('main');

header.addEventListener('click', navOnClick)
function navOnClick(event) {
	if (event.target.classList.contains('nav__hamburger') || event.target.classList.contains('nav__close-hamburger')) {
		hamburgerMenu.classList.toggle('nav--hidden');
		closeHamburgerMenu.classList.toggle('nav--hidden');
		navMenu.classList.toggle('nav--hidden');
		main.classList.toggle('nav--hidden')
	}
}





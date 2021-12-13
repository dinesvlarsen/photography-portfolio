const scrollContainer = document.querySelector('.gallery__display-wrapper');

scrollContainer.addEventListener('wheel', event => {
	event.preventDefault();
	scrollContainer.scrollLeft += event.deltaY;
})

/* GALLERY FIGCAPTION */
const galleryImages = document.querySelectorAll(".gallery__photograph-container");

const images = [...galleryImages];
images.forEach(image => image.addEventListener('click', toggleCaption))

function toggleCaption(event) {

	if (event.target.parentElement.children[1].tagName !== "FIGCAPTION") return;
	event.target.parentElement.children[1].classList.toggle('gallery__caption--hidden');
}

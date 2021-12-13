const scrollContainer = document.querySelector('.gallery__display-wrapper');

// Was trying to figure out how to get the horizontal scroll to react to the mouse-wheel in desktop version, and found this at: https://alvarotrigo.com/blog/scroll-horizontally-with-mouse-wheel-vanilla-java/
scrollContainer.addEventListener('wheel', event => {
	event.preventDefault();
	scrollContainer.scrollLeft += event.deltaY;
})

/* GALLERY FIGCAPTION */
//Gets all the gallery image containers.
const galleryImages = document.querySelectorAll(".gallery__photograph-container");

//Turns the nodeList into an array and store sit in images.
const images = [...galleryImages];

//Loops over images and adds event listeners to all of them.
images.forEach(image => image.addEventListener('click', toggleCaption))


//Checks if the element sibling of the element clicked is a figcaption element, and toggles the class if it is.
function toggleCaption(event) {
	if (event.target.nextElementSibling.tagName !== "FIGCAPTION") return;
	event.target.nextElementSibling.classList.toggle('gallery__caption--hidden');
}


const menu_button = document.getElementById("menu_button");
const menu = document.getElementById("menu");

handleResize();

function showMenu() {
    menu.classList.toggle("hidden");
}

function handleResize() {
    if (window.innerWidth > 1000) {
        menu.classList.remove("hidden");
    }
}

function viewerTemplate(imgPath, alt) {
    return `<div class="viewer"> <button class="close-viewer">X</button><img src="${imgPath}" alt="${alt}"></div>`;
}

function closeViewer() {
    document.querySelector(".viewer").remove()
}

function viewHandler(event) {
	const clickedImage = event.target;

    const imgSource =  clickedImage.src;
    parts = imgSource.split("-")
    const baseName = parts.slice(0, parts.length - 1).join("-");
    const fullImageSrc = `${baseName}-full.jpeg`;


	document.body.insertAdjacentHTML("afterbegin", viewerTemplate(fullImageSrc, clickedImage.alt))
    const closeButton = document.querySelector('.close-viewer');
	closeButton.addEventListener('click', closeViewer)

}

menu_button.addEventListener("click", showMenu);
window.addEventListener("resize", handleResize);

const galleryImages = document.querySelectorAll('.gallery-image'); 
galleryImages.forEach(image => {
    image.addEventListener('click', viewHandler); 
});
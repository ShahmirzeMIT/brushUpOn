// JavaScript to create the continuous image list slideshow
const imageList = document.querySelector('.image-list');
const images = document.querySelectorAll('.image-list img');
const imageWidth = images[0].clientWidth; // Assuming all images have the same width
const slideDuration = 3000; // Time in milliseconds for each slide
const visibleImages = 3; // Number of images visible at a time

let currentIndex = 0;
let intervalId;

function slideImageList() {
  currentIndex++;

  // Check if we need to add more images to maintain continuity
  if (currentIndex >= images.length) {
    currentIndex = 0;
    const firstImages = Array.from(images).slice(0, visibleImages);
    for (const image of firstImages) {
      const clonedImage = image.cloneNode(true);
      imageList.appendChild(clonedImage);
    }
    imageList.style.transition = 'none';
    const translateValue = -currentIndex * (imageWidth / visibleImages);
    imageList.style.transform = `translateX(${translateValue}px)`;
    imageList.offsetHeight; // Force reflow to restart the transition
    imageList.style.transition = 'transform 0.3s ease';
  }

  const translateValue = -currentIndex * (imageWidth / visibleImages);
  imageList.style.transform = `translateX(${translateValue}px)`;
}

function startSlideshow() {
  intervalId = setInterval(slideImageList, slideDuration);
}

function pauseSlideshow() {
  clearInterval(intervalId);
}

// Start the slideshow
startSlideshow();

// Pause the slideshow on mouseover
imageList.addEventListener('mouseover', () => {
  pauseSlideshow();
});

// Resume the slideshow on mouseout
imageList.addEventListener('mouseout', () => {
  startSlideshow();
});

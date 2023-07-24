const watchList = document.getElementById("watchList");
const signIn = document.getElementById("signIn");
const close = document.querySelector(".close");
const dropdownContent2 = document.querySelector(".dropdown-content2");
const modal = document.getElementById("myModal");
const span = document.querySelector(".closeSpan");
const mySidenav = document.getElementById("mySidenav");
const content = document.querySelectorAll('.content');
const show = document.querySelector(".show");
const h70 = document.querySelectorAll('.h70');
const iconMenu = document.querySelectorAll('.iconMenu');
const nameIn = document.querySelectorAll('.nameIn');


watchList.addEventListener("click", () => {
  dropdownContent2.style.display = "block";
});

close.addEventListener("click", (event) => {
  event.stopPropagation();
  dropdownContent2.style.display = "none";
});

signIn.addEventListener('click', () => {
  modal.style.display = "block";
});

span.addEventListener('click', (event) => {
  modal.style.display = "none";
});

window.addEventListener('click', (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  if (!event.target.closest("#mySidenav") && !event.target.closest("#hambMenu")) {
    mySidenav.style.width = "0";
  }
});

function openNav() {
  mySidenav.style.width = "250px";
}

function handleMouseOver(index) {
  iconMenu[index].style.display = "flex";
  h70[index].classList.add("nameBlur");
  nameIn[index].style.display = "flex";
}

function handleMouseOut(index) {
  h70[index].classList.remove("nameBlur");
  nameIn[index].style.display = "none";
  iconMenu[index].style.display = "none";
}

content.forEach((item, index) => {
  item.addEventListener("mouseover", () => {
    handleMouseOver(index);
  });
  item.addEventListener("mouseout", () => {
    handleMouseOut(index);
  });
});

let swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 9,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "@0.75": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    "@1.00": {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    "@1.50": {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
  on: {
    setTranslate: function (swiper) {
      // Get the current translate value
      var currentTranslate = swiper.translate;
      
      // Set the maximum limit for translation
      var maxTranslate = -540;
      
      // If the current translate value exceeds the maximum limit, set it to the maximum
      if (currentTranslate < maxTranslate) {
        swiper.setTranslate(maxTranslate);
      }
    },
  },
});

// const imageList = document.querySelector('.slider-content');
// const images = document.querySelectorAll('.slider-content .content');
// const imageWidth = images[0].offsetWidth + 20;
// const slideDuration = 3000;
// const visibleImages = 3;
// const prevLink = document.getElementById('left');
// const nextLink = document.getElementById('right');
// let currentIndex = 1;
// let intervalId;

// function slideImageList() {
//   const translateValue = -currentIndex * (imageWidth / visibleImages);
//   imageList.style.transition = 'transform 0.3s ease';
//   imageList.style.transform = `translateX(${translateValue}px)`;
// }

// function startSlideshow() {
//   intervalId = setInterval(() => {
//     currentIndex++;
//     slideImageList();
//     if (currentIndex >= images.length + 1) {
//       currentIndex = 1;
//       imageList.style.transition = 'none';
//       imageList.style.transform = `translateX(${(-currentIndex * (imageWidth / visibleImages))}px)`;
//       imageList.offsetHeight; // Force reflow to reset the transition
//       imageList.style.transition = 'transform 0.3s ease';
//     }
//   }, slideDuration);
// }

// function pauseSlideshow() {
//   clearInterval(intervalId);
// }

// function goToPrevious() {
//   currentIndex--;
//   slideImageList();
//   if (currentIndex <= 0) {
//     currentIndex = images.length;
//     imageList.style.transition = 'none';
//     imageList.style.transform = `translateX(${(-currentIndex * (imageWidth / visibleImages))}px)`;
//     imageList.offsetHeight; // Force reflow to reset the transition
//     imageList.style.transition = 'transform 0.3s ease';
//   }
// }

// function goToNext() {
//   currentIndex++;
//   slideImageList();
//   if (currentIndex >= images.length + 1) {
//     currentIndex = 1;
//     imageList.style.transition = 'none';
//     imageList.style.transform = `translateX(${(-currentIndex * (imageWidth / visibleImages))}px)`;
//     imageList.offsetHeight; // Force reflow to reset the transition
//     imageList.style.transition = 'transform 0.3s ease';
//   }
// }

// if (images.length > visibleImages - 1) {
//   slideImageList(); // Initialize the position of the slider
//   startSlideshow();

//   // Pause the slideshow on mouseover
//   imageList.addEventListener('mouseover', pauseSlideshow);

//   // Resume the slideshow on mouseout
//   imageList.addEventListener('mouseout', startSlideshow);

//   // Add event listeners to the previous and next links for manual navigation
//   prevLink.addEventListener('click', (e) => {
//     e.preventDefault();
//     goToPrevious();
//   });

//   nextLink.addEventListener('click', (e) => {
//     e.preventDefault();
//     goToNext();
//   });
// } else {
//   // If there are not enough images, you can add a fallback content or hide the slider, for example:
//   imageList.style.display = 'none';
//   // Or you can add a message to inform users that there are not enough images to display the slider.
//   const noImagesMessage = document.createElement('p');
//   noImagesMessage.textContent = 'Not enough images to display the slider.';
//   // sliderContainer.appendChild(noImagesMessage); // Ensure you have a container with the "sliderContainer" ID in your HTML
// }


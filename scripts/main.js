

window.onload = function() {
  var video = document.querySelector(".hero__video");
  video.defaultPlaybackRate = .5; // Sets the default speed to 1.5x
  video.load(); // Reloads the video to apply the default speed
};

let more = document.querySelectorAll('.more__content>*');

let services = document.querySelectorAll('.services *') 

let vehicles = document.querySelectorAll('.vehicle');

let observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  })
}, {
  threshold: 0.3,
})

more.forEach((item, index) => {
  observer.observe(item);
})

vehicles.forEach((item, index) => {
  observer.observe(item);
})

// services.forEach((item, index) => {
//   observer.observe(item);
// })
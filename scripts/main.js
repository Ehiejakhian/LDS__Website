

window.onload = function() {
  var video = document.querySelector(".hero__video");
  video.defaultPlaybackRate = .5; // Sets the default speed to 1.5x
  video.load(); // Reloads the video to apply the default speed
};

let more = document.querySelectorAll('.more__content>*');
let observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    } else {
      entry.target.classList.remove('active');
    }
  })
}, {
  threshold: 0.1,
})

more.forEach((item, index) => {
  observer.observe(item)
})
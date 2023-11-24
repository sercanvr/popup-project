const watchBtn = document.querySelector('.watchBtn');
const closeIcon = document.querySelector('.closeIcon');
const videoContainer = document.querySelector('.videoContainer');
const video = document.querySelector('video');


watchBtn.addEventListener('click', () => {
    videoContainer.classList.remove('active');
});

closeIcon.addEventListener('click', () => {
    videoContainer.classList.add('active');
    video.pause();
    video.currentTime = 0;
});

video.addEventListener('play', () => {
    video.volume = 0;
});
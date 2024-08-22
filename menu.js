const videos = document.querySelectorAll('.video');
const dots = document.querySelectorAll('.dot');
let currentVideoIndex = 0;

function showVideo(index) {
    videos.forEach(video => video.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    videos[index].classList.add('active');
    dots[index].classList.add('active');
    videos[index].play();
}

function playNextVideo() {
    currentVideoIndex = (currentVideoIndex + 1) % videos.length;
    showVideo(currentVideoIndex);
}

function playPreviousVideo() {
    currentVideoIndex = (currentVideoIndex - 1 + videos.length) % videos.length;
    showVideo(currentVideoIndex);
}

function currentSlide(index) {
    currentVideoIndex = index;
    showVideo(currentVideoIndex);
}

document.getElementById('rightArrow').addEventListener('click', playNextVideo);
document.getElementById('leftArrow').addEventListener('click', playPreviousVideo);

showVideo(currentVideoIndex);

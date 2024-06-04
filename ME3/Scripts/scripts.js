document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-item');
    const indicator = document.querySelector('.indicator');
    const music = document.getElementById('background-music');
    const musicToggle = document.getElementById('music-toggle');
    let isMuted = false;

   
    function moveIndicator() {
        const activeLink = document.querySelector('.nav-item.active');
        const left = activeLink.offsetLeft;
        const width = activeLink.offsetWidth;
        indicator.style.left = `${left}px`;
        indicator.style.width = `${width}px`;
    }

   
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navLinks.forEach(item => item.classList.remove('active'));
            this.classList.add('active');
            moveIndicator();
        });
    });

    moveIndicator();

    
    music.play();

    
    function toggleMusic() {
        if (isMuted) {
            music.play();
            musicToggle.textContent = 'Mute';
        } else {
            music.pause();
            musicToggle.textContent = 'Unmute';
        }
        isMuted = !isMuted;
    }

    window.toggleMusic = toggleMusic;

   
    const hamburger = document.querySelector('.hamburger');
    const navLinksContainer = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', () => {
        navLinksContainer.classList.toggle('nav-active');
    });
});
document.addEventListener('DOMContentLoaded', () => {
    console.log('Gerald Yerro');
    
    // header scroll event
    const header = document.querySelector('.header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Menu bar toggle button
    const menu = document.querySelector('.menu');
    const hiddenNav = document.querySelector('.hidden-nav');
    const exitButton = hiddenNav.querySelector('.exit-button');
    const newNavLinks = hiddenNav.querySelectorAll('a');
    let isOpen = false;

    menu.addEventListener('click', () => {
        toggleHiddenNav();
    });

    exitButton.addEventListener('click', () => {
        slideOutHiddenNav();
    });

    newNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            toggleHiddenNav();
        });
    });

    function toggleHiddenNav() {
        isOpen = !isOpen;
        if (isOpen) {
            hiddenNav.style.display = 'block';
            hiddenNav.classList.add('slide-in');
        } else {
            slideOutHiddenNav();
        }
    };

    function slideOutHiddenNav() {
        hiddenNav.classList.add('slide-out');
        hiddenNav.addEventListener('animationend', () => {
            hiddenNav.style.display = 'none';
            hiddenNav.classList.remove('slide-out');
        }, { once: true });
        isOpen = false;
    };

    // download CV
    const downloadCv = document.querySelector('#download-cv');

    downloadCv.addEventListener('click', () => {
        const link = document.createElement('a');
        link.href = 'pdf/Allester-CV.pdf'; // path of the CV file
        link.download = 'Allester-Corton-CV.pdf'; // desired file name for download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });

    // Function to update the visitor count
    function updateVisitorCount() {
        // You can replace this with your own method of counting visitors (e.g., fetching from a database)
        // For this example, let's generate a random count
        var count = Math.floor(Math.random() * 1000); // Random count for demonstration
        document.getElementById("visitorCount").innerHTML = `<i class="fas fa-face-smile-beam"></i> ${count}`;
    }

    // Call the function to update the visitor count initially
    updateVisitorCount();

    // Update the visitor count every 5 seconds (for demonstration)
    setInterval(updateVisitorCount, 5000); // Update every 5 seconds
});
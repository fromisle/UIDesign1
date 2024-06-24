document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll('.section');
    let currentSection = 0;

    function scrollToSection(index) {
        if (index >= 0 && index < sections.length) {
            sections[index].scrollIntoView({ behavior: 'smooth' });
            currentSection = index;
        }
    }

    window.addEventListener('wheel', (event) => {
        if (event.deltaY > 0) {
            scrollToSection(currentSection + 1);
        } else {
            scrollToSection(currentSection - 1);
        }
    });

    window.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowDown') {
            scrollToSection(currentSection + 1);
        } else if (event.key === 'ArrowUp') {
            scrollToSection(currentSection - 1);
        }
    });
});

// 스크롤 다운 //
document.addEventListener("DOMContentLoaded", function() {
    const scrollButton = document.getElementById('scroll-button');
    
    scrollButton.addEventListener('mouseover', function() {
        this.src = 'assets/scroll-hover.png';
    });
    
    scrollButton.addEventListener('mouseout', function() {
        this.src = 'assets/scroll.png';
    });
    
    scrollButton.addEventListener('click', function() {
        document.getElementById('section2').scrollIntoView({ behavior: 'smooth' });
    });
});
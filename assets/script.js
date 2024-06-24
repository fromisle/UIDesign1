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
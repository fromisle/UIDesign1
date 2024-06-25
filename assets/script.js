document.addEventListener("DOMContentLoaded", () => {
    const darkModeButton = document.getElementById('darkmode');
    
    darkModeButton.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            darkModeButton.textContent = 'LIGHT MODE';
        } else {
            darkModeButton.textContent = 'DARK MODE';
        }
    });

    const sections = document.querySelectorAll('.section');
    let currentSection = 0;
    let isScrolling = false; // 스크롤 상태를 추적하기 위한 변수

    function scrollToSection(index) {
        if (index >= 0 && index < sections.length && !isScrolling) {
            isScrolling = true;
            sections[index].scrollIntoView({ behavior: 'smooth' });
            currentSection = index;

            // 스크롤이 완료된 후 isScrolling을 false로 설정
            setTimeout(() => {
                isScrolling = false;
            }, 1000); // 스크롤 애니메이션 시간에 맞춰 조정
        }
    }

    window.addEventListener('wheel', (event) => {
        if (!isScrolling) {
            if (event.deltaY > 0) {
                scrollToSection(currentSection + 1);
            } else {
                scrollToSection(currentSection - 1);
            }
        }
    });

    window.addEventListener('keydown', (event) => {
        if (!isScrolling) {
            if (event.key === 'ArrowDown') {
                scrollToSection(currentSection + 1);
            } else if (event.key === 'ArrowUp') {
                scrollToSection(currentSection - 1);
            }
        }
    });
});

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

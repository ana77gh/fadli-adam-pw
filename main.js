import './style.css'

document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const menuToggle = document.getElementById('mobile-menu');
    const navList = document.querySelector('.nav-list');

    // Note: mobile menu styling needs a bit more work in CSS to strictly toggle properly, 
    // currently we hid it with display:none in keyframes. 
    // Let's add a class toggle for basic visibility.
    // Actually, I should update CSS for the mobile menu to be more robust, 
    // but for now let's just create the logic.

    // Check if we need to add mobile menu styles dynamically or if they are in CSS
    // In the CSS provided: .nav-list { display: none } on mobile.
    // We need a .active class to show it.

    // Add active style via JS for now if not in CSS
    const style = document.createElement('style');
    style.innerHTML = `
    @media (max-width: 768px) {
      .nav-list.active {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 70px;
        left: 0;
        width: 100%;
        background: var(--surface-color);
        padding: 20px;
        border-bottom: 1px solid rgba(255,255,255,0.1);
      }
    }
  `;
    document.head.appendChild(style);

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navList.classList.toggle('active');
        });
    }

    // Scroll Animation Observer
    const scrollElements = document.querySelectorAll('[data-scroll]');

    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;
        return (elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend);
    };

    const displayScrollElement = (element) => {
        element.classList.add('in-view');
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 1.25)) {
                displayScrollElement(el);
            }
        })
    }

    window.addEventListener('scroll', () => {
        handleScrollAnimation();
    });

    // Trigger once on load
    handleScrollAnimation();
});

document.addEventListener('DOMContentLoaded', () => {

    // --- Navbar Scroll Effect ---
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // --- Mobile Menu Toggle ---
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-link');

    mobileBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Simple hamburger animation
        const spans = mobileBtn.querySelectorAll('span');
        if (navLinks.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });

    // Close mobile menu when clicking a link
    links.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                mobileBtn.click();
            }
        });
    });

    // --- Scroll Reveal Animation ---
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { 
        threshold: 0,
        rootMargin: "0px 0px -20px 0px" 
    });

    // Initial trigger for elements already in viewport
    setTimeout(() => {
        document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .zoom-in').forEach(el => {
            revealObserver.observe(el);
        });
    }, 100);

    // --- Nav Link Pop-out 04 Effect ---
    // Wrap every .nav-link with a hover wrapper and inject the 04.png image above
    document.querySelectorAll('.nav-links .nav-link').forEach(link => {
        const wrapper = document.createElement('span');
        wrapper.classList.add('nav-deco-wrapper');
        link.parentNode.insertBefore(wrapper, link);
        wrapper.appendChild(link);

        const decoImg = document.createElement('img');
        decoImg.src = 'images/04.png';
        decoImg.alt = '';
        decoImg.classList.add('nav-deco-04');
        wrapper.appendChild(decoImg);
    });

    // --- Slideshow Logic (Generic) ---
    const initSlider = (selector, interval = 5000) => {
        const sliders = document.querySelectorAll(selector);
        sliders.forEach(slider => {
            const slides = slider.querySelectorAll('.slide');
            if (slides.length <= 1) return;

            let currentSlide = 0;
            setInterval(() => {
                const prev = currentSlide;
                currentSlide = (currentSlide + 1) % slides.length;

                slides[prev].classList.remove('active');
                slides[prev].classList.add('prev');
                slides[currentSlide].classList.add('active');

                // Clean up 'prev' class after transition finishes
                setTimeout(() => {
                    slides[prev].classList.remove('prev');
                }, 900);
            }, interval);
        });
    };

    initSlider('.hero-slider');
    initSlider('.simple-slider', 4000); // Frog slideshow moves a bit faster


    // --- Smooth Scroll for Anchor Links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
                window.scrollTo({
                     top: offsetPosition,
                     behavior: "smooth"
                });
            }
        });
    });



});

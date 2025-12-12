// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 800,
    offset: 100,
    once: true,
    easing: 'ease-in-out'
});

// Section slide-up animation on scroll
const sections = document.querySelectorAll('section');

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

sections.forEach(section => {
    sectionObserver.observe(section);
});

// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileNav = document.querySelector('.mobile-nav');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileNav.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
const mobileNavLinks = document.querySelectorAll('.mobile-nav a');
mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileNav.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
    });
});

// Header scroll effect
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// Swiper Initialization for Cases Section
const casesSwiper = new Swiper('.casesSwiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', () => {
        // Close all other items
        faqItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });

        // Toggle current item
        item.classList.toggle('active');
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const headerHeight = header.offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Add scroll reveal animations for numbers/stats
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe case items for animation
const caseItems = document.querySelectorAll('.case-item');
caseItems.forEach(item => {
    observer.observe(item);
});

// Parallax effect for hero background
const heroBg = document.querySelector('.hero-bg');

if (heroBg) {
    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;
        heroBg.style.transform = `translateY(${scrollPosition * 0.5}px)`;
    });
}

// Add hover effect for feature items
const featureItems = document.querySelectorAll('.feature-item');

featureItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        const icon = item.querySelector('.feature-icon');
        icon.style.transform = 'scale(1.2) rotate(5deg)';
    });

    item.addEventListener('mouseleave', () => {
        const icon = item.querySelector('.feature-icon');
        icon.style.transform = 'scale(1) rotate(0deg)';
    });
});

// Add animation to problem cards on scroll (sequential reveal with alternating direction)
const problemCards = document.querySelectorAll('.problem-card');
const sectionText = document.querySelector('.section-text');

const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const cards = Array.from(problemCards);
            cards.forEach((card, index) => {
                setTimeout(() => {
                    card.classList.add('visible');
                }, index * 200); // 각 카드가 200ms 간격으로 나타남
            });

            // 마지막 문구는 모든 카드가 나타난 후 표시
            if (sectionText) {
                setTimeout(() => {
                    sectionText.classList.add('visible');
                }, cards.length * 200 + 400);
            }

            // 한 번만 실행되도록
            cardObserver.disconnect();
        }
    });
}, { threshold: 0.1 });

// 첫 번째 카드만 관찰하여 섹션이 보이면 모든 카드 애니메이션 시작
if (problemCards.length > 0) {
    cardObserver.observe(problemCards[0]);
}

// Add pulse animation to CTA buttons
const ctaButtons = document.querySelectorAll('.hero-cta, .beta-cta, .final-cta-btn');

setInterval(() => {
    ctaButtons.forEach(btn => {
        btn.style.animation = 'pulse 1s ease-in-out';
        setTimeout(() => {
            btn.style.animation = '';
        }, 1000);
    });
}, 5000);

// Add CSS for pulse animation
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0%, 100% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.05);
        }
    }

    .feature-icon {
        transition: transform 0.3s ease;
    }

    .case-item.animate {
        animation: slideInUp 0.6s ease forwards;
    }

    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    /* Mobile menu animation */
    .mobile-menu-btn.active span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    }

    .mobile-menu-btn.active span:nth-child(2) {
        opacity: 0;
    }

    .mobile-menu-btn.active span:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -6px);
    }

    /* Smooth transitions for all interactive elements */
    .pricing-card,
    .team-member,
    .case-card {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    /* Add glow effect on hover for important buttons */
    .cta-btn:hover,
    .hero-cta:hover,
    .beta-cta:hover,
    .final-cta-btn:hover {
        box-shadow: 0 0 20px rgba(255, 111, 0, 0.5);
    }

    /* Loading animation for page */
    body {
        animation: fadeIn 0.5s ease-in;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);

// Add number counter animation for statistics
function animateNumber(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target.toLocaleString();
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start).toLocaleString();
        }
    }, 16);
}

// Intersection Observer for counting animations
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            const improvement = entry.target.querySelector('.case-improvement');
            if (improvement) {
                entry.target.classList.add('counted');
                improvement.style.opacity = '0';
                setTimeout(() => {
                    improvement.style.transition = 'opacity 0.5s ease';
                    improvement.style.opacity = '1';
                }, 300);
            }
        }
    });
}, { threshold: 0.5 });

// Observe all case items
document.querySelectorAll('.case-item').forEach(item => {
    statsObserver.observe(item);
});

// Add typing effect for hero title (optional enhancement)
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';

    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

// Easter egg: Log a message to console
console.log('%c🚀 Optimaece - SQL 튜닝 전문 서비스', 'color: #0b3b8c; font-size: 20px; font-weight: bold;');
console.log('%c24시간 내 결과 제공 | 건당 20만원 | 100% 환불 보장', 'color: #4b5563; font-size: 14px;');
console.log('%c문의: optimaece@gmail.com', 'color: #0ea5e9; font-size: 12px;');

// Add loading state for external form
const betaLinks = document.querySelectorAll('a[href*="forms.gle"], a[href*="google.com/forms"]');
betaLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        // You can add custom analytics tracking here
        console.log('Beta form link clicked');
    });
});

// Performance optimization: Lazy load images if any are added later
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Add scroll progress indicator
function createScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 4px;
        background: linear-gradient(90deg, #0b3b8c, #c94c00);
        z-index: 9999;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

createScrollProgress();

// Add "Back to Top" button
function createBackToTop() {
    const backToTop = document.createElement('button');
    backToTop.innerHTML = '↑';
    backToTop.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: #c94c00;
        color: white;
        border: none;
        font-size: 24px;
        cursor: pointer;
        opacity: 0;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    `;

    document.body.appendChild(backToTop);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTop.style.opacity = '1';
        } else {
            backToTop.style.opacity = '0';
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    backToTop.addEventListener('mouseenter', () => {
        backToTop.style.transform = 'scale(1.1)';
        backToTop.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.15)';
    });

    backToTop.addEventListener('mouseleave', () => {
        backToTop.style.transform = 'scale(1)';
        backToTop.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    });
}

createBackToTop();

// Initialize all features when DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('Optimaece website loaded successfully!');
});

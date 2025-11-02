// Enhanced Portfolio JavaScript

// ============================================
// Loading Screen
// ============================================
window.addEventListener('load', () => {
    const loadingScreen = document.querySelector('.loading-screen');
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
        // Initialize animations after loading
        initAnimations();
    }, 2000);
});

// ============================================
// Custom Cursor
// ============================================
const cursor = document.createElement('div');
cursor.classList.add('custom-cursor');
document.body.appendChild(cursor);

let mouseX = 0, mouseY = 0;
let cursorX = 0, cursorY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateCursor() {
    const speed = 0.2;
    cursorX += (mouseX - cursorX) * speed;
    cursorY += (mouseY - cursorY) * speed;
    
    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';
    
    requestAnimationFrame(animateCursor);
}
animateCursor();

// Hover effect on interactive elements
const interactiveElements = document.querySelectorAll('a, button, .magnetic, input, textarea');
interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
});

// ============================================
// Hamburger Menu Toggle
// ============================================
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            mobileMenu.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        const menuLinks = mobileMenu.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                mobileMenu.classList.remove('active');
            });
        });
    }
}

// ============================================
// Theme Toggle
// ============================================
function initThemeToggle() {
    const themeToggle = document.querySelector('.theme-toggle');
    
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            themeToggle.classList.toggle('light');
            document.body.classList.toggle('light-theme');
            
            // Save theme preference
            const isLight = document.body.classList.contains('light-theme');
            localStorage.setItem('theme', isLight ? 'light' : 'dark');
        });
        
        // Load saved theme
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            themeToggle.classList.add('light');
            document.body.classList.add('light-theme');
        }
    }
}

// ============================================
// Scroll Progress Bar
// ============================================
function updateScrollProgress() {
    const scrollProgress = document.querySelector('.scroll-progress');
    if (!scrollProgress) return;
    
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    
    scrollProgress.style.width = scrolled + '%';
}

window.addEventListener('scroll', updateScrollProgress);

// ============================================
// Scroll-Triggered Animations
// ============================================
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                
                // Animate skill circles when in view
                if (entry.target.classList.contains('skill-circle')) {
                    animateSkillCircle(entry.target);
                }
                
                // Animate counters when in view
                if (entry.target.classList.contains('counter')) {
                    animateCounter(entry.target);
                }
                
                // Animate progress bars when in view
                const progressBar = entry.target.querySelector('.progress[data-width]');
                if (progressBar) {
                    const targetWidth = progressBar.dataset.width;
                    setTimeout(() => {
                        progressBar.style.width = targetWidth + '%';
                    }, 200);
                }
                
                // Unobserve after animation
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all elements with stagger-item class
    const animatedElements = document.querySelectorAll('.stagger-item');
    animatedElements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.1}s`;
        observer.observe(el);
    });
}

// ============================================
// Skill Circle Animation
// ============================================
const DEFAULT_SKILL_PERCENTAGE = 90;

function animateSkillCircle(circleElement) {
    const progressCircle = circleElement.querySelector('.progress-circle');
    if (!progressCircle) return;
    
    const percentage = circleElement.dataset.percentage || DEFAULT_SKILL_PERCENTAGE;
    const radius = progressCircle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;
    
    progressCircle.style.strokeDasharray = `${circumference} ${circumference}`;
    progressCircle.style.strokeDashoffset = offset;
}

// ============================================
// Counter Animation
// ============================================
const COUNTER_DURATION_MS = 2000;
const FRAME_DURATION_MS = 16; // ~60fps

function animateCounter(counterElement) {
    const target = parseInt(counterElement.dataset.target) || 100;
    const increment = target / (COUNTER_DURATION_MS / FRAME_DURATION_MS);
    let current = 0;
    
    const updateCounter = () => {
        current += increment;
        if (current < target) {
            counterElement.textContent = Math.floor(current) + '+';
            requestAnimationFrame(updateCounter);
        } else {
            counterElement.textContent = target + '+';
        }
    };
    
    updateCounter();
}

// ============================================
// Parallax Effect
// ============================================
function initParallax() {
    const parallaxElements = document.querySelectorAll('.parallax-layer');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        parallaxElements.forEach(el => {
            const speed = el.dataset.speed || 0.5;
            const yPos = -(scrolled * speed);
            el.style.transform = `translateY(${yPos}px)`;
        });
    });
}

// ============================================
// Magnetic Button Effect
// ============================================
function initMagneticButtons() {
    const magneticButtons = document.querySelectorAll('.magnetic');
    
    magneticButtons.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
        });
        
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translate(0, 0)';
        });
    });
}

// ============================================
// Form Validation
// ============================================
function initFormValidation() {
    const contactForm = document.querySelector('#contact form');
    if (!contactForm) return;
    
    const inputs = contactForm.querySelectorAll('input, textarea');
    
    inputs.forEach(input => {
        input.addEventListener('blur', () => {
            validateInput(input);
        });
        
        input.addEventListener('input', () => {
            if (input.parentElement.classList.contains('error')) {
                validateInput(input);
            }
        });
    });
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        let isValid = true;
        inputs.forEach(input => {
            if (!validateInput(input)) {
                isValid = false;
            }
        });
        
        if (isValid) {
            // Form submission is already handled by the Supabase code
            // Just add visual feedback
            showSuccessAnimation();
        }
    });
}

function validateInput(input) {
    const parent = input.parentElement;
    const value = input.value.trim();
    
    // Remove previous error state
    parent.classList.remove('error', 'success');
    let feedbackElement = parent.querySelector('.form-feedback');
    if (feedbackElement) {
        feedbackElement.remove();
    }
    
    // Validate based on input type
    let isValid = true;
    let message = '';
    
    if (input.hasAttribute('required') && value === '') {
        isValid = false;
        message = 'This field is required';
    } else if (input.type === 'email' && value !== '') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            isValid = false;
            message = 'Please enter a valid email';
        }
    }
    
    // Add feedback
    if (!isValid) {
        parent.classList.add('error');
        const feedback = document.createElement('div');
        feedback.classList.add('form-feedback');
        feedback.textContent = message;
        parent.appendChild(feedback);
    } else if (value !== '') {
        parent.classList.add('success');
    }
    
    return isValid;
}

function showSuccessAnimation() {
    // Success animation is handled by SweetAlert2 in the Supabase form submission code
    // This function can be extended for additional custom animations if needed
    console.log('Form submitted successfully');
}

// ============================================
// Horizontal Scroll
// ============================================
function initHorizontalScroll() {
    const horizontalScroll = document.querySelector('.horizontal-scroll');
    if (!horizontalScroll) return;
    
    // Smooth scroll on wheel
    horizontalScroll.addEventListener('wheel', (e) => {
        if (e.deltaY !== 0) {
            e.preventDefault();
            horizontalScroll.scrollLeft += e.deltaY;
        }
    });
}

// ============================================
// Text Reveal Animation
// ============================================
function initTextReveal() {
    const textRevealElements = document.querySelectorAll('.text-reveal');
    
    textRevealElements.forEach(element => {
        const text = element.textContent;
        element.textContent = '';
        
        // Split text into characters or words
        const isWordSplit = element.dataset.split === 'word';
        const parts = isWordSplit ? text.split(' ') : text.split('');
        
        parts.forEach((part, index) => {
            const span = document.createElement('span');
            span.textContent = part + (isWordSplit ? ' ' : '');
            span.style.animationDelay = `${index * 0.05}s`;
            element.appendChild(span);
        });
    });
}

// ============================================
// Ripple Effect
// ============================================
function initRippleEffect() {
    const rippleButtons = document.querySelectorAll('.ripple');
    
    rippleButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple-effect');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

// ============================================
// Smooth Scroll
// ============================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for fixed nav
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ============================================
// Initialize All Animations
// ============================================
function initAnimations() {
    initMobileMenu();
    initThemeToggle();
    initScrollAnimations();
    initParallax();
    initMagneticButtons();
    initFormValidation();
    initHorizontalScroll();
    initTextReveal();
    initRippleEffect();
    initSmoothScroll();
    
    // Add Three.js scene if canvas exists
    const canvas = document.getElementById('hero-canvas');
    if (canvas && typeof THREE !== 'undefined') {
        initThreeJsScene();
    }
}

// ============================================
// Three.js 3D Scene
// ============================================
const PARTICLES_COUNT = 500;
const PARTICLES_COUNT_MOBILE = 200;

function initThreeJsScene() {
    const canvas = document.getElementById('hero-canvas');
    if (!canvas) return;
    
    // Check if THREE.js is available
    if (typeof THREE === 'undefined') {
        console.warn('THREE.js library not loaded. 3D scene will not be initialized.');
        return;
    }
    
    try {
        // Scene setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
        
        renderer.setSize(canvas.clientWidth, canvas.clientHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        camera.position.z = 5;
        
        // Create particles - reduce count for mobile devices
        const particlesGeometry = new THREE.BufferGeometry();
        const isMobile = window.innerWidth < 768;
        const particlesCount = isMobile ? PARTICLES_COUNT_MOBILE : PARTICLES_COUNT;
        const posArray = new Float32Array(particlesCount * 3);
    
    for (let i = 0; i < particlesCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 10;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    
    const particlesMaterial = new THREE.PointsMaterial({
        size: 0.02,
        color: 0xA0FF00,
        transparent: true,
        opacity: 0.8
    });
    
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);
    
    // Create geometric shape
    const geometry = new THREE.TorusKnotGeometry(1, 0.3, 100, 16);
    const material = new THREE.MeshBasicMaterial({
        color: 0xA0FF00,
        wireframe: true,
        transparent: true,
        opacity: 0.2
    });
    const torusKnot = new THREE.Mesh(geometry, material);
    scene.add(torusKnot);
    
    // Mouse interaction
    let mouseX = 0;
    let mouseY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = (e.clientX / window.innerWidth) * 2 - 1;
        mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    });
    
    // Animation loop
    function animate() {
        requestAnimationFrame(animate);
        
        // Rotate shapes
        torusKnot.rotation.x += 0.005;
        torusKnot.rotation.y += 0.005;
        
        // Move particles
        particlesMesh.rotation.y += 0.001;
        particlesMesh.rotation.x = mouseY * 0.1;
        particlesMesh.rotation.z = mouseX * 0.1;
        
        // Move camera based on mouse
        camera.position.x = mouseX * 0.5;
        camera.position.y = mouseY * 0.5;
        camera.lookAt(scene.position);
        
        renderer.render(scene, camera);
    }
    
    animate();
    
        // Handle resize
        window.addEventListener('resize', () => {
            camera.aspect = canvas.clientWidth / canvas.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(canvas.clientWidth, canvas.clientHeight);
        });
    } catch (error) {
        console.error('Error initializing Three.js scene:', error);
    }
}

// ============================================
// Initialize on DOM Ready
// ============================================
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        // Initialization happens after loading screen
    });
} else {
    // DOM already loaded
    setTimeout(initAnimations, 2000);
}

        // Mobile menu toggle
        const menuToggle = document.getElementById('menu-toggle');
        const mobileMenu = document.getElementById('mobile-menu');
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Animate elements on scroll
        const animateOnScroll = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in');
                    observer.unobserve(entry.target);
                }
            });
        };

        const observer = new IntersectionObserver(animateOnScroll, {
            root: null,
            threshold: 0.1
        });

        document.querySelectorAll('.animate-fade-in, .animate-slide-in').forEach(item => {
            observer.observe(item);
        });
        // Show loader when navigating away from the page
        window.addEventListener("beforeunload", function() {
            document.getElementById("loader").style.display = "block";
        });
        
        // Optionally, hide loader after page has fully loaded (on initial load)
        window.addEventListener("load", function() {
            document.getElementById("loader").style.display = "none";
        });
        
        
    const testimonials = document.querySelectorAll('.testimonial');
    let currentIndex = 0;

    function showNextTestimonial() {
        testimonials[currentIndex].classList.remove('active'); // Hide current testimonial
        currentIndex = (currentIndex + 1) % testimonials.length; // Move to the next
        testimonials[currentIndex].classList.add('active'); // Show next testimonial
    }

    // Show the first testimonial initially
    testimonials[currentIndex].classList.add('active');

    // Change testimonial every 2 seconds
    setInterval(showNextTestimonial, 2000);


        
        
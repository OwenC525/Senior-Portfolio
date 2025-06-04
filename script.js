// Initialize Vue app
const { createApp } = Vue;

createApp({
    data() {
        return {
            menuActive: false,
            hoveredProject: null,
            navItems: [
                { text: 'About', link: '#about' },
                { text: 'Work', link: '#work' },
                { text: 'Contact', link: '#contact' }
            ],
            aboutData: {
                bio: "I'm a passionate web designer and developer with 3 years of experience creating beautiful, functional websites. I specialize in <strong>responsive design</strong>, <strong>user experience</strong>, and <strong>front-end development</strong>.",
                image: "images/selfpic.jpg",
                skills: {
                    'Design': ['UI/UX Design', 'Wireframing', 'Prototyping', 'Adobe Creative Suite'],
                    'Development': ['HTML/CSS', 'JavaScript', 'Vue.js', 'Responsive Design'],
                    'Tools': ['Figma', 'Git', 'VS Code', 'Webpack']
                }
            },
            projects: [
                {
                    title: "Client Website",
                    description: "A personal portfolio website for a nursing student",
                    image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                    learn: "https://owenc525.github.io/Client-Website/",
                    code: "https://github.com/OwenC525/Client-Website"
                },
                {
                    title: "Video Editing Website",
                    description: "A client website for the Video Editing Class",
                    image: "images/werntzschoolpic.jpg",
                    learn: "https://aaronm524.github.io/Mr-Werntz-s-Website/",
                    code: "https://github.com/AaronM524/Mr-Werntz-s-Website/tree/main"
                },
                {
                    title: "NJIT Movie Site",
                    description: "Fitness tracking application interface design",
                    image: "images/topmovies.png",
                    learn: "https://owenc525.github.io/NJIT-MovieSite-Project/",
                    code: "https://github.com/OwenC525/NJIT-MovieSite-Project"
                },
                {
                    title: "NJIT Slideshow Project",
                    description: "A personal portfolio website for a nursing student",
                    image: "images/slideshow.png",
                    learn: "https://owenc525.github.io/NJIT-Slideshow-Project/",
                    code: "https://github.com/OwenC525/NJIT-Slideshow-Project"
                },
                {
                    title: "College Recruitment Site",
                    description: "A client website for the Video Editing Class",
                    image: "images/RU-logo1.png",
                    learn: "https://owenc525.github.io/College-Recruitment-Site/",
                    code: "https://github.com/OwenC525/College-Recruitment-Site"
                },
                {
                    title: "NJIT Movie Site",
                    description: "Fitness tracking application interface design",
                    image: "images/topmovies.png",
                    learn: "https://owenc525.github.io/NJIT-MovieSite-Project/",
                    code: "https://github.com/OwenC525/NJIT-MovieSite-Project"
                },
            ],
            contactInfo: [
                { icon: "fas fa-envelope", title: "Email", value: "525ochiu@frhsd.com" },
                { icon: "fas fa-phone", title: "Phone", value: "+1 (555) 123-4567" },
                { icon: "fas fa-map-marker-alt", title: "Location", value: "New Jersey, United States" }
            ],
            socialLinks: [
                { icon: "fab fa-github", link: "https://github.com/OwenC525" },
            ],
            form: {
                name: "",
                email: "",
                message: ""
            }
        }
    },
    methods: {
        toggleMenu() {
            this.menuActive = !this.menuActive;
            document.body.classList.toggle('nav-active');
        },
        closeMenu() {
            this.menuActive = false;
            document.body.classList.remove('nav-active');
        },
        submitForm() {
            // Form submission logic would go here
            alert(`Thanks for your message, ${this.form.name}! I'll get back to you soon.`);
            this.form = {
                name: "",
                email: "",
                message: ""
            };
        }
    },
    mounted() {
        // Header scroll effect
        window.addEventListener('scroll', () => {
            const header = document.querySelector("[data-header]");
            if (window.scrollY > 100) {
                header.classList.add("active");
            } else {
                header.classList.remove("active");
            }
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    }
}).mount('#app');
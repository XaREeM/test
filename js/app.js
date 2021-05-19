/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */
const sections = document.querySelectorAll('section');
const ul = document.getElementById('navbar__list')
const fragment = document.createDocumentFragment();

/**
 * End Global Variables
 * Start Helper Functions
 *
 */
function navBar() {
    sections.forEach(section => {
        // Creating li Element
        const li = document.createElement('li');
        const data = section.dataset.nav;
        li.classList.add('nav-item');
        const id = section.getAttribute('id');
        li.innerHTML = `<a class='menu__link' href='#${id}' onclick='goToSection(event, "${id}")'> ${data} </a>`
        fragment.appendChild(li);
    });
    ul.appendChild(fragment);
}


/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
navBar();

// Add class 'your-active-class' to section when near top of viewport
if (window.IntersectionObserver) {
    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('your-active-class')
            } else {
                entry.target.classList.remove('your-active-class')
            }
        });
    });
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section)
    });
}

// Scroll to anchor ID using scrollTO event
function goToSection(event, id) {
    event.preventDefault()
    let element = document.getElementById(id)
    element.scrollIntoView({
        behavior: "smooth"
    })
    closeMenu();
    
}

/**
 * End Main Functions
 * Begin Events
 *
 */
// let timeOutCounter = null;
// document.addEventListener('scroll', () => {
//     ul.style.display = 'block';
//     if (timeOutCounter != null) {
//         clearTimeout(timeOutCounter)
//     }
//     timeOutCounter = setTimeout(hideNav, 3000);
// });
// function hideNav() {
//   ul.style.display = 'none';
// }



// Build menu

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}


function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}


// Scroll to section on link click
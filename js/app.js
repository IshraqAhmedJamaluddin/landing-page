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
const fragment = document.createDocumentFragment();
const sections = document.querySelectorAll('section');
const mybutton = document.getElementById("myBtn");


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function add_nav() {
    sections.forEach(section => {
        const a = document.createElement('a');
        a.innerHTML = section.getAttribute('data-nav');
        a.href = '#' + section.id;
        a.classList.add('menu__link')
        const li = document.createElement('li');
        li.id = 'li'+section.id;
        li.appendChild(a);
        fragment.appendChild(li)
    });
    document.getElementById('navbar__list').appendChild(fragment)
}


// Add class 'active' to section when near top of viewport
function highlight_section() {
    sections.forEach(section => {
        var top = section.getBoundingClientRect().top;
        if (top >= -250 && top <=200) {
            section.classList.add("your-active-class");
            const li = document.getElementById('li'+section.id)
            li.style.backgroundColor = "grey";
        } else {
            section.classList.remove("your-active-class");
            const li = document.getElementById('li'+section.id)
            li.style.backgroundColor = "";
        }
    });

    const nav = document.querySelector('.navbar__menu')
    nav.style.display = "block";
    setTimeout(() => {
        nav.style.display = "none";
    }, 10000);

    if (window.scrollY > 3000) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
mybutton.addEventListener('click', () => {document.documentElement.scrollTop = 0;})

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
add_nav()

// Scroll to section on link click
// (Already applied above)

// Set sections as active
document.addEventListener("scroll", highlight_section)



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
let sections;
const mybutton = document.getElementById("myBtn");


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
(function add_sections() {
    for (let i = 0; i < 7 ; i++) {
        const div = document.createElement('div')
        div.classList.add('landing__container')
        const h2 = document.createElement('h2')
        h2.innerText = "Section " + (i+1)
        div.appendChild(h2)
        const p = document.createElement('p')
        p.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod."
        div.appendChild(p)
        const p2 = document.createElement('p')
        p2.innerText = "Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.";
        div.appendChild(p2)
        const section = document.createElement('section')
        section.id = "section" + (i+1)
        section.setAttribute('data-nav', "Section " + (i+1))
        section.appendChild(div)
        const fragment2 = document.createDocumentFragment();
        fragment2.appendChild(section)
        document.querySelector('main').appendChild(fragment2)
        sections = document.querySelectorAll('section');
    }
})();


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
(function add_nav() {
    sections.forEach(section => {
        const a = document.createElement('a');
        a.innerHTML = section.getAttribute('data-nav');
        a.classList.add('menu__link')
        a.addEventListener('click', scrolling)
        a.style.cursor = "pointer"
        const li = document.createElement('li');
        li.id = 'li'+section.id;
        li.appendChild(a);
        fragment.appendChild(li)
    });
    document.getElementById('navbar__list').appendChild(fragment)
})();


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

    if (window.scrollY > 2000) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
mybutton.addEventListener('click', () => {document.documentElement.scrollTop = 0;})

// Scroll to anchor ID using scrollTO event
function scrolling(event) {
    event.preventDefault()
    const id = event.target.parentElement.id.substring(2)
    const section = document.getElementById(id)
    section.scrollIntoView()
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu
// (Invoked above as IIFE)

// Scroll to section on link click
// (Already applied above in the add_nav())

// Set sections as active
document.addEventListener("scroll", highlight_section)



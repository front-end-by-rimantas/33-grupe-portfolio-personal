// IMPORTS


// CODE EXECUTION BELOW THIS COMMENT LINE

/* header start */

/*~~~~~~~~~Sidebar toggle~~~~~~~~~*/
function openSideMenu() {
    /* variables */
    const toggleOn = document.getElementById(`sidebar-main-on`);
    const toggleOff = document.getElementById(`sidebar-main-off`);
    const sidebar = document.getElementById(`main-navigation`).cloneNode(true);
    /* logic */
    toggleOn.style.display = `none`;
    toggleOff.style.display = `block`;
    sidebar.id = `sidebar-main-navigation`;
    sidebar.removeAttribute(`class`);
    sidebar.getElementsByClassName(
        `navigation-bar`
    )[0].className = `sidebar-navigation`;
    while (sidebar.getElementsByClassName(`top-menu-hidden`).length > 0) {
        sidebar.getElementsByClassName(
            `top-menu-hidden`
        )[0].className = `sidebar-navigation-hidden`;
    }
    while (sidebar.getElementsByClassName(`top-menu-inner`).length > 0) {
        sidebar.getElementsByClassName(
            `top-menu-inner`
        )[0].className = `sidebar-navigation-inner`;
    }
    sidebar.getElementsByClassName(
        `top-menu-hidden-nested`
    )[0].className = `sidebar-navigation-hidden-nested`;
    document.getElementsByTagName('body')[0].appendChild(sidebar);
}

function closeSideMenu() {
    /* variables */
    const toggleOn = document.getElementById(`sidebar-main-on`);
    const toggleOff = document.getElementById(`sidebar-main-off`);
    const sidebarRemoval = document.getElementById(`sidebar-main-navigation`);
    /* logic */
    toggleOn.style.display = `block`;
    toggleOff.style.display = `none`;
    sidebarRemoval.remove();
}
// function sidebarExpand () {
// }
/* header end */

/* hero start */
/* hero end */

/* top logos start */
/* top logos end */

/* about cards start */
/* about cards end */

/* about progress-bars start */
/* about progress-bars end */

/* services start */
/* services end */

/* why choose us start */
const counters = document.querySelectorAll('.counter');

counters.forEach((counter) =>{
    counter.innerText = '0'; 


    const updateCounter = () => {
        const target = +counter.getAttribute
        ('data-target');
        const c = +counter.innerText;

        const increment = target / 5000;   

        if (c < target) {
            counter.innerText = `${Math.ceil(c 
            + increment)}`; 
            setTimeout(updateCounter, 1);
            }
            };
            updateCounter();
});
/* why choose us end */

/* contact start */
/* contact end */

/* blog start */
/* blog end */

/* testimonials start */
/* testimonials end */

/* bottom logos start */

const logosMainCotainer = function () {
    const cont = document.getElementsByClassName(`logos-main-container`)[0];
    cont.style.left = `0px`;
    cont.style.transitionDuration = `.5s`;
    // cont.classList.add(`left-0`);
    for (let i = 0; i < 2 * 5; i++) {
        const div = document.createElement(`div`);
        const img = document.createElement(`img`);
        img.src = `./img/png/l${(i % 5) + 1}.png.webp`;
        div.appendChild(img);
        div.classList.add(`logos-slides`);
        cont.appendChild(div);
    }
};
logosMainCotainer();

// let k = -230;
// const iconSlider = function () {
//     k = k + 230;
//     const slides = document.getElementsByClassName(`logos-main-container`)[0];
//     slides.transitionDuration = `250ms`;
//     if (k === 0) {
//         slides.classList.remove(`left-${1150}`);
//     } else {
//         slides.classList.remove(`left-${k - 230}`);
//     }
//     slides.classList.add(`left-${k}`);
//     if (k === 1150) {
//         slides.transitionDuration = `0`;
//         k = -230;
//     }
// };
const iconSlider = function () {
    const slides = document.getElementsByClassName(`logos-main-container`)[0];
    if (Number(slides.style.left.replace(`px`, ``)) === -230 * 5) {
        slides.style.transitionDuration = `0ms`;
        slides.style.left = `${
            Number(slides.style.left.replace(`px`, ``)) + 5 * 230
        }px`;
    // }
    } else {
        slides.style.transitionDuration = `250ms`;
        slides.style.left = `${
            Number(slides.style.left.replace(`px`, ``)) - 230
        }px`;
    }
};

setInterval(iconSlider, 3000);

/* bottom logos end */

/* footer start */
/* footer end */
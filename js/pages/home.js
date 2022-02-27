/* eslint-disable no-unused-vars */
// IMPORTS
// CODE EXECUTION BELOW THIS COMMENT LINE

/* header start */
/**
 * @description scroll down --> adds shadow box to the main menu.
 */
const headerShadow = function () {
    const header = document.getElementById(`nav-header`);
    if (window.scrollY > 100) {
        header.classList.add(`header-scrolled`);
    } else if (header.classList.contains(`header-scrolled`)) {
        header.classList.remove(`header-scrolled`);
    }
};
document.addEventListener('scroll', headerShadow);

/*~~~~~~~~~Sidebar toggle~~~~~~~~~*/
function openSideMenu() {
    const toggleOn = document.getElementById(`sidebar-main-on`);
    const toggleOff = document.getElementById(`sidebar-main-off`);
    toggleOn.style.display = `none`;
    toggleOff.style.display = `block`;
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    const sidebar = document.getElementById(`nav-main`).cloneNode(true);
    sidebar.id = `sidebar-container`;
    sidebar.removeAttribute(`class`);
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    const arrow = sidebar.getElementsByClassName(`fa-chevron-right`)[0];
    arrow.removeAttribute(`class`);
    arrow.setAttribute(`class`, `fa fa-chevron-down`);
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    while (sidebar.getElementsByClassName(`nav-flyout`).length > 0) {
        const dropdown = sidebar.getElementsByClassName(`nav-flyout`)[0];
        dropdown.className = `sidebar-dropdown`;
    }
    while (sidebar.getElementsByClassName(`nav-submenu`).length > 0) {
        const submenu = sidebar.getElementsByClassName(`nav-submenu`)[0];
        submenu.className = `sidebar-submenu`;
        submenu.style.display = `none`;
        submenu.style.transitionDuration = `2s`;
    }
    while (sidebar.getElementsByClassName(`nav-subtitle`).length > 0) {
        const subtitle = sidebar.getElementsByClassName(`nav-subtitle`)[0];
        subtitle.className = `sidebar-subtitle`;
        /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
        const icon = subtitle.getElementsByClassName(`fa`)[0];
        const button = document.createElement(`button`);
        button.className = icon.className;
        button.addEventListener(`click`, sidebarExpander);
        icon.parentNode.replaceChild(button, icon);
    }
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    document.getElementsByTagName('body')[0].appendChild(sidebar);
}
function closeSideMenu() {
    /* variables */
    const toggleOn = document.getElementById(`sidebar-main-on`);
    const toggleOff = document.getElementById(`sidebar-main-off`);
    toggleOn.style.display = `block`;
    toggleOff.style.display = `none`;
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    const sidebarRemoval = document.getElementById(`sidebar-container`);
    sidebarRemoval.remove();
}
function sidebarExpander(event) {
    const element = event.target;
    const result = element.parentNode.parentNode.nextElementSibling;
    if (result.style.display === `none`) {
        result.style.display = `block`;
        result.classList.add(`sidebar-submenu-open`);
        element.classList.add(`sidebar-arrow-trans`);
    } else {
        result.classList.remove(`sidebar-submenu-open`);
        element.classList.remove(`sidebar-arrow-trans`);
        result.style.display = `none`;
    }
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

counters.forEach((counter) => {
    counter.innerText = '0';

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const c = +counter.innerText;

        const increment = target / 200;
        if (c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`;
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

const iconOffset = function (slides) {
    slides.style.transitionDuration = `250ms`;
    slides.style.left = `${
        Number(slides.style.left.replace(`px`, ``)) - 230
    }px`;
};
const iconOffsetReset = function (slides) {
    slides.style.transitionDuration = `0ms`;
    slides.style.left = `${
        Number(slides.style.left.replace(`px`, ``)) + 5 * 230
    }px`;
};
const iconSlider = function () {
    const slides = document.getElementsByClassName(`logos-main-container`)[0];
    if (Number(slides.style.left.replace(`px`, ``)) === -230 * 5) {
        iconOffsetReset(slides);
        setTimeout(iconSlider, 0);
    } else {
        iconOffset(slides);
        setTimeout(iconSlider, 5000);
    }
};

iconSlider();

/* bottom logos end */

/* footer start */
/* footer end */

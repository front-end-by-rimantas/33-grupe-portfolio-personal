// IMPORTS

// CODE EXECUTION BELOW THIS COMMENT LINE

/* header start */


/*~~~~~~~~~Responsive meniu 1000-1199px~~~~~~~~~*/
const resizeTopMenu1199 = function () {
    const mediaQuery = window.matchMedia('(min-width: 1199px)');
    const nav = document.getElementsByTagName(`nav`);
    const header = document.getElementsByTagName(`header`);
    if (mediaQuery.matches) {
        nav[0].className = `col-7 ml-3`;
        header[0].className = `container`;
    } else {
        nav[0].className = `col-8 ml-2`;
        header[0].className = `container-fluid`;
    }
};
/*~~~~~~~~~Hide menu~~~~~~~~~*/
const hideNavigation = function () {
    const maxWidth990 = window.matchMedia('(max-width: 990px)');
    const navBar = document.getElementsByClassName(`navigation-bar`);
    if (maxWidth990.matches || window.innerWidth < 990) {
        navBar[0].className = `hidden navigation-bar`;
    } else {
        navBar[0].className = `visible-flex navigation-bar`;
    }
};
/*~~~~~~~~~Load functions after reload~~~~~~~~~*/
window.onload = function () {
    resizeTopMenu1199();
    hideNavigation();
};
/*~~~~~~~~~Respond to resizing~~~~~~~~~*/
window.addEventListener('resize', resizeTopMenu1199);
window.addEventListener('resize', hideNavigation);
/*~~~~~~~~~Sidebar Menu~~~~~~~~~*/

// eslint-disable-next-line no-unused-vars
function openSideMenu() {
    const nav = document.getElementsByTagName(`nav`);
    const navBar = document.getElementsByClassName(`navigation-bar`);
    const hid = document.getElementsByClassName(`top-menu-hidden`);
    const inner = document.getElementsByClassName(`top-menu-inner`);
    const menuOn = document.getElementsByClassName(`top-side-menu-on`);
    const menuOff = document.getElementsByClassName(`top-side-menu-off`);
    nav[0].className = `nav-side`;
    navBar[0].classList.add(`navigation-bar-side`);
    navBar[0].classList.remove(`hidden`);
    navBar[0].classList.remove(`navigation-bar`);
    console.log(hid)
    for (let i = 0; i < 2; i++) {
        hid[0].classList.add(`top-menu-hidden-side`);
        hid[0].classList.remove(`top-menu-hidden`);
        inner[0].classList.add(`top-menu-inner-side`);
        inner[0].classList.remove(`top-menu-inner`);
    }
    menuOn[0].classList.add(`hidden`);
    menuOff[0].classList.remove(`hidden`);
}
// eslint-disable-next-line no-unused-vars
function closeSideMenu() {
    const nav = document.getElementsByTagName(`nav`);
    const navBar = document.getElementsByClassName(`navigation-bar-side`);
    const hid = document.getElementsByClassName(`top-menu-hidden-side`);
    const inner = document.getElementsByClassName(`top-menu-inner-side`);
    const menuOn = document.getElementsByClassName(`top-side-menu-on`);
    const menuOff = document.getElementsByClassName(`top-side-menu-off`);

    nav[0].className = `col-8 ml-2`;
    nav[0].classList.remove(`nav-side`);
    navBar[0].classList.add(`navigation-bar`);
    navBar[0].classList.add(`hidden`);
    navBar[0].classList.remove(`navigation-bar-side`);
    for (let i = 0; i < hid[0].classList.length; i++) {
        hid[0].classList.add(`top-menu-hidden`);
        hid[0].classList.remove(`top-menu-hidden-side`);
        inner[0].classList.add(`top-menu-inner`);
        inner[0].classList.remove(`top-menu-inner-side`);
    }
    menuOff[0].classList.add(`hidden`);
    menuOn[0].classList.remove(`hidden`);
}
// openSideMenu();

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
/* why choose us end */

/* contact start */
/* contact end */

/* blog start */
/* blog end */

/* testimonials start */
/* testimonials end */

/* bottom logos start */
/* bottom logos end */

/* footer start */
/* footer end */

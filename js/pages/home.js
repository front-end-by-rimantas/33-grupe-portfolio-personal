// IMPORTS

// CODE EXECUTION BELOW THIS COMMENT LINE

/* header start */

/*~~~~~~~~~Hide menu~~~~~~~~~*/

// /*~~~~~~~~~Load functions after reload~~~~~~~~~*/
// window.onload = function () {
//     hideNavigation();
// };

// // window.addEventListener('resize', hideNavigation);
// /*~~~~~~~~~Respond to resizing~~~~~~~~~*/
// /*~~~~~~~~~Sidebar Menu~~~~~~~~~*/

function openSideMenu() {
    /* variables */
    const toggleOn = document.getElementById(`top-side-on`);
    const toggleOff = document.getElementById(`top-side-off`);
    const nav = document.getElementById(`main-navigation`);
    const navBar = document.getElementsByClassName(
        `visible-flex navigation-bar`
    );
    const hid = document.getElementsByClassName(`top-menu-hidden`);
    const inner = document.getElementsByClassName(`top-menu-inner`);
    /* logic */
    toggleOn.style.display = `none`;
    toggleOff.style.display = `block`;
    nav.classList[`value`] = `top-main-nav-side`;
    navBar[0].classList[`value`] = `navigation-bar-side`;
    while (hid.length > 0) {
        hid[0].classList[`value`] = `top-menu-hidden-side`;
    }
    while (inner.length > 0) {
        inner[0].classList[`value`] = `top-menu-inner-side`;
    }
}
function closeSideMenu() {
    /* variables */
    const toggleOn = document.getElementById(`top-side-on`);
    const toggleOff = document.getElementById(`top-side-off`);
    const nav = document.getElementById(`main-navigation`);
    const navBar = document.getElementsByClassName(`navigation-bar-side`);
    const hid = document.getElementsByClassName(`top-menu-hidden-side`);
    const inner = document.getElementsByClassName(`top-menu-inner-side`);
    /* logic */
    toggleOn.style.display = `block`;
    toggleOff.style.display = `none`;
    nav.classList[
        `value`
    ] = `col-9 ml-1 col-lg-7 ml-lg-3 hidden visible-lg top-main-nav`;
    navBar[0].classList[`value`] = `visible-flex navigation-bar`;
    while (hid.length > 0) {
        hid[0].classList[`value`] = `top-menu-hidden`;
    }
    while (inner.length > 0) {
        inner[0].classList[`value`] = `top-menu-inner`;
    }
}
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

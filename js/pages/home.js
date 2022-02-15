// IMPORTS

// CODE EXECUTION BELOW THIS COMMENT LINE

/* header start */

/*~~~~~~~~~Hide menu~~~~~~~~~*/
// const hideNavigation = function () {
//     const maxWidth990 = window.matchMedia('(max-width: 990px)');
//     const nav = document.getElementsByClassName(
//         `col-9 ml-1 col-lg-7 ml-lg-3 top-main-nav`
//     );
//     const navBar = document.getElementsByClassName(`navigation-bar`);
//     console.log(nav[0]);
//     if (maxWidth990.matches || window.innerWidth < 990) {
//         navBar[0].className = `hidden navigation-bar`;
//         nav[0].className = `ml-10 top-main-nav`;
//     } else {
//         navBar[0].className = `visible-flex navigation-bar`;
//         nav[0].className = `col-9 ml-1 col-lg-7 ml-lg-3 top-main-nav`;
//     }
// };
// /*~~~~~~~~~Load functions after reload~~~~~~~~~*/
// window.onload = function () {
//     hideNavigation();
// };

// /*~~~~~~~~~Respond to resizing~~~~~~~~~*/
// // window.addEventListener('resize', hideNavigation);
// /*~~~~~~~~~Sidebar Menu~~~~~~~~~*/

eslint-disable-next-line no-unused-vars
function openSideMenu() {
    const nav = document.getElementById(`main-navigation`);
    const navBar = document.getElementsByClassName(
        `visible-flex navigation-bar`
    );
    const hid = document.getElementsByClassName(`top-menu-hidden`);
    const inner = document.getElementsByClassName(`top-menu-inner`);

    if (
        nav.classList[`value`] ===
        `col-9 ml-1 col-lg-7 ml-lg-3 hidden visible-lg top-main-nav`
    ) {
        nav.classList[`value`] = `top-main-nav-side`;
        navBar[0].classList[`value`] = `navigation-bar-side`;
        hid[0].classList[`value`] = `top-menu-hidden-side`;
        hid[0].classList[`value`] = `top-menu-hidden-side`;
        inner[0].classList[`value`] = `top-menu-inner-side`;
        inner[0].classList[`value`] = `top-menu-inner-side`;
    }
}

// menuOn[0].classList.add(`hidden`);
// menuOff[0].classList.remove(`hidden`);
eslint-disable-next-line no-unused-vars
function closeSideMenu() {
    const nav = document.getElementById(`main-navigation`);
    const navBar = document.getElementsByClassName(
        `visible-flex navigation-bar`
    );
    const hid = document.getElementsByClassName(`top-menu-hidden`);
    const inner = document.getElementsByClassName(`top-menu-inner`);

    if (nav.classList[`value`] === `top-main-nav-side`) {
        nav.classList[
            `value`
        ] = `col-9 ml-1 col-lg-7 ml-lg-3 hidden visible-lg top-main-nav`;
        navBar[0].classList[`value`] = `visible-flex navigation-bar`;
        hid[0].classList[`value`] = `top-menu-hidden`;
        hid[0].classList[`value`] = `top-menu-hidden`;
        inner[0].classList[`value`] = `top-menu-inner`;
        inner[0].classList[`value`] = `top-menu-inner`;
    }
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

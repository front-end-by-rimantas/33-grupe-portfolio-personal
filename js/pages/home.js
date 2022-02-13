// IMPORTS

// CODE EXECUTION BELOW THIS COMMENT LINE

/* header start */
/*~~~~~~~~~Responsive meniu 1000-1199px~~~~~~~~~*/
const resizeTopMenu1199 = function () {
    const mediaQuery = window.matchMedia('(min-width: 1199px)');
    const e = document.getElementsByTagName(`nav`);
    if (mediaQuery.matches) {
        e[0].className = `col-7 ml-3`;
    } else {
        e[0].className = `col-8 ml-2`;
    }
};
/*~~~~~~~~~Hide menu~~~~~~~~~*/
const hideNavigation = function () {
    const maxWidth990 = window.matchMedia('(max-width: 990px)');
    const e = document.getElementsByClassName(`navigation-bar`);
    if (maxWidth990.matches|| window.innerWidth < 990) {
        e[0].className = `hidden navigation-bar`;
    } else {
        e[0].className = `visible-flex navigation-bar`;
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

// function openSideMenu() {
//     const navTag = document.getElementsByTagName(`nav`);
//     navTag[0].className = `col-5 menu-top-sidebar`;
//     console.log("valio")
//     // document.getElementsByTagName(`nav`).style.width = `250px`;
// }
// function closeSideMenu() {
//     document.getElementsByTagName(`nav`).style.width = `0`;
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

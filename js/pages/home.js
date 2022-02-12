// IMPORTS

// CODE EXECUTION BELOW THIS COMMENT LINE

/* header start */
/*~~~~~~~~~Responsive meniu 1000-1199px~~~~~~~~~*/
const mediaQuery = window.matchMedia('(min-width: 1199px)');
const resizeTopMenu = function () {
    if (mediaQuery.matches) {
        document.getElementsByTagName(`nav`)[0].className = `col-7 ml-3`;
    } else {
        document.getElementsByTagName(`nav`)[0].className = `col-8 ml-2`;
    }
};
window.addEventListener('resize', resizeTopMenu);
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

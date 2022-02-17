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
function sidebarExpand () {
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

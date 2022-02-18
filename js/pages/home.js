// IMPORTS

// CODE EXECUTION BELOW THIS COMMENT LINE

/* header start */

/*~~~~~~~~~Sidebar toggle~~~~~~~~~*/
function openSideMenu() {
    /* variables */
    const toggleOn = document.getElementById(`sidebar-main-on`);
    const toggleOff = document.getElementById(`sidebar-main-off`);
    const sidebar = document.getElementById(`nav-main`).cloneNode(true);
    /* logic */
    toggleOn.style.display = `none`;
    toggleOff.style.display = `block`;
    sidebar.id = `sidebar-nav-main`;
    sidebar.removeAttribute(`class`);
    sidebar.getElementsByClassName(`nav-main`)[0].className = `sidebar-nav`;
    while (sidebar.getElementsByClassName(`nav-flyout`).length > 0) {
        sidebar.getElementsByClassName(
            `nav-flyout`
        )[0].className = `sidebar-nav-flyout`;
    }
    while (sidebar.getElementsByClassName(`nav-submenu`).length > 0) {
        sidebar.getElementsByClassName(
            `nav-submenu`
        )[0].className = `sidebar-nav-submenu`;
    }
    document.getElementsByTagName('body')[0].appendChild(sidebar);
}

function closeSideMenu() {
    /* variables */
    const toggleOn = document.getElementById(`sidebar-main-on`);
    const toggleOff = document.getElementById(`sidebar-main-off`);
    const sidebarRemoval = document.getElementById(`sidebar-nav-main`);
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

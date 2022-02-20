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
// const counters = document.querySelectorAll('.counter');

// counters.forEach((counter) => {
//     counter.innerText = '0';
//     const updateCounter = () => {
//         const target = +counter.getAttribute('data-target');
//         const c = +counter.innerText;

//         const increment = target / 5000;
//         if (c < target) {
//             counter.innerText = `${Math.ceil(c + increment)}`;
//             setTimeout(updateCounter, 1);
//             updateCounter();
//         }
//     }
// }
/* why choose us end */

/* contact start */
/* contact end */

/* blog start */
/* blog end */

/* testimonials start */
/* testimonials end */

/* bottom logos start */


// let slideIndex = 0;
// showSlides();

// const showSlides = function() {
//     const slides = document.getElementsByClassName(`logos-slides`);
//     for (let i = 0; i < slides.length; i++) {
//         // slides[i].style.display = `none`;
//     }
//     slideIndex++;
//     if (slideIndex > slides.length) {
//         slideIndex = 1;
//     }
//     // slides[slideIndex - 1].style.display = `block`;
//     setTimeout(showSlides, 2000); // Change image every 2 seconds
// }

// for (let i = 0; i < 5; i++) {
//     const slide = document.getElementsByClassName(`logos-main-container`);
//     // console.log(slide);
//     // <div class="logos-slides" style="grid-column: 4 / 6;">
//     // <img src="./img/png/l3.png.webp">
// // </div>
// }

// const iconSlider = function () {
//     for (let i = 0; i < 7; i++) {
//         const e = document.getElementById(`logos-icon-box${i}`);
//         e.id = `logos-icon-box${
//             e.id[e.id.length - 1] > 0 ? e.id[e.id.length - 1] - 1 : 6
//         }`;
//     }
// };

const iconSlider = function () {
    const slides = document.getElementsByClassName(`logos-slides`);
    // console.log(slides.length)
    for (let slide of slides) {
        // console.log(`offset ~> `, slide.offsetLeft)
        if (slide.offsetLeft < 242) {
            console.log(`offset ~> `, slide.offsetLeft)
            slide.style.left = `${Number(slide.style.left.replace(`px`, ``)) + 6 * 242}px`;
            slide.style.transitionDuration = `0s`;
        } else {
            slide.style.left = `${Number(slide.style.left.replace(`px`, ``)) - 242}px`;
            slide.style.transitionDuration = `3s`;
        }
        // console.log(slide.offsetLeft)
    }
    console.log(`<~~~~>`);
};
// iconSlider();
// iconSlider();
// iconSlider();
// iconSlider();
// iconSlider();
// iconSlider();
// iconSlider();
// iconSlider();
// iconSlider();
// iconSlider();
setInterval(iconSlider, 4000);
console.log(`<~~~~>`);

// if (k === 0) {
//     e.style.left = `${k * 242}px`;
//     e.style.transitionDuration = `1s`;
// }
// if (k === 1) {
//     e.style.left = `${k * 242}px`;
// }
// if (k === 2) {
//     e.style.left = `${k * 242}px`;
// }
// if (k === 3) {
//     e.style.left = `${k * 242}px`;
// }
// if (k === 4) {
//     e.style.left = `${k * 242}px`;
// }
// if (k === 5) {
//     e.style.left = `${k * 242}px`;
// }
// if (k === 6) {
//     e.style.left = `${k * 242}px`;
// }


// e.style.gridRowStart = `${k}`;
// slides[0].classList.replace(`c${0}`, `c${6}`);
// for (let i = 1; i < 7; i++) {
//     slides[i].classList.replace(`c${i}`, `c${i - 1}`);
//     console.log(slides[i].classList)
    // slides[i].classList.add(`c${i}`);
    // slides[i].classList.remove(`c${i - 1}`);
// }
    // if(k === 0) {e.style.left = `-${k*242}px`}
    // if(k === 1) {e.style.left = `-${k*242}px`}
    // if(k === 2) {e.style.left = `-${k*242}px`}
    // if(k === 3) {e.style.left = `-${k*242}px`}
    // if(k === 4) {e.style.left = `-${k*242}px`}
    // if(k === 5) {e.style.left = `-${k*242}px`}



    // console.log(value[0].classList[value[0].classList.length - 1]);
    // console.log(value[0].style.transform());
    // value[0].style.transform = `translate(-242px)`;
    // for (let i = 1; i < 5; i++) {
        //     // slides[i].style.gridColumnStart = i - 1;
        
        // }
    // console.log(slides[0])
    // slides[0].style.gridColumnStart = 1 - 1;
    // slides[0].style.gridColumnStart = -1;
    // slides[1].style.gridColumnStart = 1;
    // slides[0].style.transform = `translate(-242px)`;
    // slides[1].style.transform = `translate(-242px)`;
    // console.log(slides[0])
    // setInterval(iconSlider, 2000);

// let slideIndex = 0;
// showSlides();

// function showSlides() {
//     const slides = document.getElementsByClassName(`logos-slides`);
//     for (let i = 0; i < slides.length; i++) {
//         slides[i].style.display = `none`;
//     }
//     slideIndex++;
//     if (slideIndex > slides.length) {
//         slideIndex = 1;
//     }
//     slides[slideIndex - 1].style.display = `block`;
//     setTimeout(showSlides, 2000); // Change image every 2 seconds
// }
// let slideIndex = 0;
// showSlides();

// function showSlides() {
//     let i;
//     const slides = document.getElementsByClassName(`mySlides`);
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = `none`;
//     }
//     slideIndex++;
//     if (slideIndex > slides.length) {
//         slideIndex = 1;
//     }
//     slides[slideIndex - 1].style.display = `block`;
//     setTimeout(showSlides, 2000); // Change image every 2 seconds
// }
/* bottom logos end */

/* footer start */
/* footer end */

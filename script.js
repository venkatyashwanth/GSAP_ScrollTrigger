gsap.registerPlugin(ScrollTrigger);

gsap.to(".square", {
    // x: 700,
    duration: 2,
    scrollTrigger: {
        trigger: ".square",
        start: "top 30%", 
        end: () => `+=${document.querySelector(".square").offsetHeight}`,
        markers: true,
        toggleClass: "red"
    }
})




/* 
using function for end in scroll trigger, to get height of target element. 

The HTMLElement.offsetHeight read-only property returns the height of the element, including vertical paddings and borders, as an integer. 
*/
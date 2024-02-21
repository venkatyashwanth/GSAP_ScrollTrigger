gsap.registerPlugin(ScrollTrigger);

gsap.to(".square", {
    // x: 700,
    duration: 3,
    scrollTrigger: {
        trigger: ".square2",
        start: "top 60%", 
        end: "top 40%",
        scrub: true,
        toggleActions: 'restart pause resume complete',
        pin: ".square",
        pinSpacing: true,
        markers: {
            startColor: "purple",
            endColor: "fuchsia",
            fontSize: "2rem"
        },
    }
})




/* 
tutorial- 5: 
https://www.youtube.com/watch?v=FH0B3Gdm0P0&list=PLMPgoZdlPumexxtvuPUB3TY7LExI1N_Xp&index=5

pin property: 
Target element sticks at the start.

        pinSpacing: false/true,

*/
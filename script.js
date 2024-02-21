gsap.registerPlugin(ScrollTrigger);

gsap.to(".square", {
    x: 700,
    duration: 3,
    scrollTrigger: {
        trigger: ".square",
        start: "top 60%", 
        end: "top 40%",
        scrub: 4,
        toggleActions: 'restart pause resume complete',
        markers: {
            startColor: "purple",
            endColor: "fuchsia",
            fontSize: "2rem"
        },
    }
})




/* 
tutorial- 4: 
https://www.youtube.com/watch?v=SCfZBtedicw&list=PLMPgoZdlPumexxtvuPUB3TY7LExI1N_Xp&index=4

Scrub

scrub: true;
scrub: 4 //time for smoothing
*/
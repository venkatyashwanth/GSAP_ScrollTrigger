gsap.registerPlugin(ScrollTrigger);

// gsap.to(".box",{
//     x: 500, duration: 2
// })

// gsap.to(".box",{
//     y: 200, duration: 3, delay: 2
// })

// gsap.to(".box",{
//     x: 0, duration: 2, delay: 5
// })


const tl = gsap.timeline();

tl.to(".box", { x: 500, duration: 2 })
    .to(".box", { y: 200, duration: 3 })
    .to(".box", { x: 0, duration: 2 })




/* 
tutorial- 6: 
https://www.youtube.com/watch?v=-qQhTxTtpeQ&list=PLMPgoZdlPumexxtvuPUB3TY7LExI1N_Xp&index=6

GSAP TimeLine: 
if we change the duration of one animation, then we have to change the delay of every animation. 

using gsap timeline we can resovle the issue. 

*/
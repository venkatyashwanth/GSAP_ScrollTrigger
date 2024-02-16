gsap.registerPlugin(ScrollTrigger);

gsap.to(".square",{
    x: 700,
    duration: 2,
    scrollTrigger: {
        trigger: ".square2"
    }
})



/* 
gsap.to(".target",{
    x: val,
    duration: durationTime
})


.target: Element that we want to animate
x: translation in x direction, val: how much to be moved
duration: Animation duration time

scrollTrigger: Trigger for animation. 
.square2 when came into view port starts to animate .square1. 
*/
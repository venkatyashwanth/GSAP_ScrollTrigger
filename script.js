gsap.registerPlugin(ScrollTrigger);

gsap.to(".square", {
    x: 700,
    duration: 2,
    scrollTrigger: {
        trigger: ".square",
        start: "top 30%",
        markers: true
    }
})




/* 
Trigger the animation when element comes halfway in the viewport. 

start and end properties. 

start: 400: 400px from bottom of view port
when square element crosses 400px from bottom starts animation. 

start: "top center"
Means when top portion of element reaches the center of view port starts to animate

start: "top 30%",
Means when top portion of element reaches the 30% of view port from upside, starts to animate


markers: true; 
markers: {
            startColor: 'purple',
            endColor: 'fuchsia',
            fontSize: '4rem',
            indent: 100 //Moves the markers position from right
        }
        
*/
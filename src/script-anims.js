gsap.fromTo("#bigtextdiv", {
    y: -50,
    opacity: 0
},
{
    duration: 0.5,
    y: 0,
    opacity: 1,
    ease: "quad"
});

gsap.fromTo("#subtext", {
    opacity: 0,
    y: -50
},
{
    delay: 0.25,
    duration: 1,
    opacity: 1,
    y: 0,
    ease: "quad"
});

gsap.fromTo("#image", {
    opacity: 0,
    scale: 0.5
},
{
    duration: 1,
    opacity: 1,
    scale: 1,
    ease: "quad"
});

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("copy-to-clip").addEventListener("click", () => {
        gsap.to(".thing", {
            duration: 0.25,
            morphSVG: ".check",
            color: "#22c55e"
        });

        gsap.to(".thing", {
            delay: 1,
            duration: 0.25,
            morphSVG: ".thing",
            color: "#fff"
        });
    });
    
    gsap.fromTo(".box-1", { y: 25, opacity: 0 },
    {
        scrollTrigger: '#biigtext',
        duration: 0.5,
        y: 0,
        opacity: 1
    });

    gsap.fromTo(".box-2", { y: 25, opacity: 0 },
    {
        scrollTrigger: '#biigtext',
        duration: 0.5,
        delay: 0.25,
        y: 0,
        opacity: 1
    });


    gsap.fromTo(".box-3", { y: 25, opacity: 0 },
    {
        scrollTrigger: '#biigtext',
        duration: 0.5,
        delay: 0.5,
        y: 0,
        opacity: 1
    });

    gsap.fromTo(".box-4", { y: 25, opacity: 0 },
    {
        scrollTrigger: '.big-text',
        duration: 0.5,
        y: 0,
        opacity: 1
    });

    gsap.fromTo(".box-5", { y: 25, opacity: 0 },
    {
        scrollTrigger: '.big-text',
        duration: 0.5,
        delay: 0.25,
        y: 0,
        opacity: 1
    });


    gsap.fromTo(".box-6", { y: 25, opacity: 0 },
    {
        scrollTrigger: '.big-text',
        duration: 0.5,
        delay: 0.5,
        y: 0,
        opacity: 1
    });

    gsap.fromTo(".box-7", { opacity: 0 }, { duration: 0.5, opacity: 1 });

    gsap.fromTo("#biigtext", {
        y: -50,
        opacity: 0
    },
    {
        scrollTrigger: '#biigtext',
        duration: 0.5,
        y: 0,
        opacity: 1
    });

    gsap.fromTo("#smalltext", {
        x: -50,
        opacity: 0
    },
    {
        scrollTrigger: '#smalltext',
        duration: 0.5,
        x: 0,
        opacity: 1
    });
});
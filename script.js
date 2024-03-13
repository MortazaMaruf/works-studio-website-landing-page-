function loading() {
    // gsap 

    var tl = gsap.timeline();
    tl.to("#loading",{
        y: "-100%",
        duration:.5,
        delay : .5,
        ease: "expo.in"

    })
    tl.to(" #loading video",{
        y: "100%",
        duration: .5,
        delay : .4,
        ease :"expo.in "
    })
}
loading();
function smoothScroll () {
    const scroll = new LocomotiveScroll({
        el: document.querySelector('main'),
        smooth: true
    });
}
smoothScroll()
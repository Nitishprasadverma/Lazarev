


// page-2-Animation
var elements = document.querySelectorAll(".right-elem");

elements.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
       
       
       
        gsap.to(elem.childNodes[3],{
        opacity:1,
        scale:1
       })
    })

    elem.addEventListener("mouseleave", function(){
        gsap.to(elem.childNodes[3],{
            opacity:0,
            scale:0
           })
    })

    elem.addEventListener("mousemove",function(dets){
        console.log(elem.getBoundingClientRect());

        gsap.to(elem.childNodes[3],{
            x:dets.x - elem.getBoundingClientRect().x -50,
            y:dets.y - elem.getBoundingClientRect().y - 120
            
        })
    })
})
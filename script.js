


// page-2-Animation

function page2Animation(){
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
    
}

function page3Animation(){
    var page3Center = document.querySelector(".page3-center")
    var video = document.querySelector("#page3 video")
    
    page3Center.addEventListener("click", function () {
        video.play()
        gsap.to(video, {
            transform: "scaleX(1) scaleY(1)",
            opacity: 1,
            borderRadius: 0
        })
    })
    video.addEventListener("click", function () {
        video.pause()
        gsap.to(video, {
            transform: "scaleX(0.7) scaleY(0)",
            opacity: 0,
            borderRadius: "30px"
        })
    })
}


page2Animation();
page3Animation();
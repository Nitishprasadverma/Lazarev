


// page-2-Animation

function page2Animation() {
    var elements = document.querySelectorAll(".right-elem");

    elements.forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {



            gsap.to(elem.childNodes[3], {
                opacity: 1,
                scale: 1
            })
        })

        elem.addEventListener("mouseleave", function () {
            gsap.to(elem.childNodes[3], {
                opacity: 0,
                scale: 0
            })
        })

        elem.addEventListener("mousemove", function (dets) {
            console.log(elem.getBoundingClientRect());

            gsap.to(elem.childNodes[3], {
                x: dets.x - elem.getBoundingClientRect().x - 50,
                y: dets.y - elem.getBoundingClientRect().y - 120

            })
        })
    })

}

function page3Animation() {
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

    var sections = document.querySelectorAll(".section-right")

    sections.forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {
            elem.childNodes[3].style.opacity = 1
            elem.childNodes[3].play()

        })

        elem.addEventListener("mouseleave", function () {
            elem.childNodes[3].style.opacity = 0;
            elem.childNodes[3].load()
        })
    })
}

//product drop-down
function page6() {

    //ui-ux section
    var drop = document.querySelector(".ui-ux");

    drop.addEventListener("click", function (elem) {
        var arrowIcon = document.querySelector("#arrow-icon");

        if (arrowIcon.classList.contains('ri-arrow-up-s-line')) {
            // Change to down arrow
            arrowIcon.classList.remove('ri-arrow-up-s-line');
            arrowIcon.classList.add('ri-arrow-down-s-line');
        } else {
            // Change to up arrow
            arrowIcon.classList.remove('ri-arrow-down-s-line');
            arrowIcon.classList.add('ri-arrow-up-s-line');
        }

    })


    //product section

    var product = document.querySelector(".product");
    product.addEventListener("click", function () {
        var arrowIcone = document.querySelector("#arrow-icons");
        if (arrowIcone.classList.contains("ri-arrow-down-s-line")) {
            arrowIcone.classList.remove("ri-arrow-down-s-line")
            arrowIcone.classList.add("ri-arrow-up-s-line")
        }
        else {
            arrowIcone.classList.remove("ri-arrow-up-s-line")
            arrowIcone.classList.add("ri-arrow-down-s-line")
        }
    })
}


function page7() {
    // part-2++++++++++++++++++++++++++++++++++
    gsap.from("#btm7-part2 h4 ", {
        x: 0,
        duration: 1,
        scrollTrigger: {
            trigger: "#btm7-part2",
            scroller: "body",
            // markers:true
            start: "top 80%",
            end: "top 10%"
            , scrub: true
        }
    }

    )
    // part3+++++++++++++++++++++++++++++++
    gsap.from("#btm7-part3 h4", {
        x: 0,
        duration: 1,
        scrollTrigger: {
            trigger: "#btm7-part3",
            scroller: "body",
            // markers:true
            start: "top 80%",
            end: "top 10%"
            , scrub: true
        }
    }

    )
    // part-4+++++++++++++++++++++++++++++++
    gsap.from("#btm7-part4 h4", {
        x: 0,
        duration: 1,
        scrollTrigger: {
            trigger: "#btm7-part4",
            scroller: "body",
            // markers:true
            start: "top 80%",
            end: "top 10%"
            , scrub: true
        }
    }

    )
}

page2Animation();
page3Animation();
page6();
page7();
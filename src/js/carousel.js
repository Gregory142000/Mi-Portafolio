const d = document

export default function carousel(){
    const $slide = d.querySelectorAll(".works__workBox"),
        $circles = d.querySelectorAll(".works__circles"),
        classNameSlide = "works__workBox--visible",
        classNameCircles = "works__circles--red"

    let i = 0
    let nextSliderTimeInterval = setInterval(nextSlide, 5000)

    function nextSlide(){
        $slide[i].classList.remove(classNameSlide)
        $circles[i].classList.remove(classNameCircles)

        if(i < $slide.length -1){
            i++
        }else{
            i = 0
        }

        $slide[i].classList.add(classNameSlide)
        $circles[i].classList.add(classNameCircles)
    }

    function circleButtons(index){
        clearInterval(nextSliderTimeInterval)

        $slide[i].classList.remove(classNameSlide)
        $circles[i].classList.remove(classNameCircles)
        $slide[index].classList.add(classNameSlide)
        $circles[index].classList.add(classNameCircles) 
                        
        i = index

        nextSliderTimeInterval = setInterval(nextSlide, 5000)
    }

    d.addEventListener("click", (e) => {
        $circles.forEach((el, index) => {
            if(e.target === el){
                e.preventDefault()

                switch(el.getAttribute("data-slide")){
                    case "luxury-cars":
                        circleButtons(index)
                        break

                    case "myBriefcase":
                        circleButtons(index)
                        break

                    default:
                        break
                }
            }
        })
    })
}
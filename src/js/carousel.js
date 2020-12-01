const d = document

export default function carousel(){
    const $slide = d.querySelectorAll(".carousel__slide"),
        $button = d.querySelectorAll(".carousel__buttons"),
        $circles = d.querySelectorAll(".carousel__circles"),
        classNameSlide = "carousel__slide--visible",
        classNameCircles = "carousel__circles--red"

    let i = 0
    let nextSliderTimeInterval = setInterval(nextSlide, 5000)

    function nextSlide(arrow){
        $slide[i].classList.remove(classNameSlide)
        $circles[i].classList.remove(classNameCircles)

        if(arrow === $button[0]){
            i--
            if(i < 0) i = $slide.length - 1
        } else{
            i++
            if(i >= $slide.length) i = 0
        }

        $slide[i].classList.add(classNameSlide)
        $circles[i].classList.add(classNameCircles)
    }

    d.addEventListener("click", (e) => {
        if(e.target === $button[0]){
            clearInterval(nextSliderTimeInterval)
            e.preventDefault()
            nextSlide(e.target)
            nextSliderTimeInterval = setInterval(nextSlide, 5000)
        } 
        if(e.target === $button[1]){
            clearInterval(nextSliderTimeInterval)
            e.preventDefault()
            nextSlide(e.target)
            nextSliderTimeInterval = setInterval(nextSlide, 5000)
        } 
    })
}
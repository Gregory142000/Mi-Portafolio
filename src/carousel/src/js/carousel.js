export default function carousel() {
    const carousels = document.querySelectorAll(".carousel")

    carousels.forEach((el) => {
        let balls = el.querySelectorAll(".carousel__ball"),
            slides = el.querySelectorAll(".carousel__slide"),
            count = 0

        const myInterval = setInterval(() => {
            balls[count].classList.remove("carousel__ball--red")
            slides[count].classList.remove("carousel__slide--visible")

            if(count < balls.length - 1){
                count++
            } else{
                count = 0
            }

            balls[count].classList.add("carousel__ball--red")
            slides[count].classList.add("carousel__slide--visible")
        }, 3000)
    })
}

// carousel()
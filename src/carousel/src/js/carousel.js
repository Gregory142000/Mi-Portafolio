export default function carousel() {
    const carousels = document.querySelectorAll(".carousel");

    carousels.forEach((el) => {
        let balls = el.querySelectorAll(".carousel__ball"),
            slides = el.querySelectorAll(".carousel__slide"),
            count = 0;

        const intervalSliders = () => {
            balls[count].classList.remove("carousel__ball--red");
            slides[count].classList.remove("carousel__slide--visible");

            if (count < balls.length - 1) {
                count++;
            } else {
                count = 0;
            }

            balls[count].classList.add("carousel__ball--red");
            slides[count].classList.add("carousel__slide--visible");
        };

        let setIntervalSlide = setInterval(intervalSliders, 4000);

        el.addEventListener("pointerenter", (e) => {
            let $carouselId = document.getElementById(`${e.target.id}`),
                $balls = $carouselId.querySelectorAll(".carousel__ball")

            document.addEventListener("click", (eve) => {
                if (eve.target.classList.contains("carousel__ball")) {
                    eve.preventDefault();

                    $balls.forEach((element, index) => {
                        if (
                            eve.target.getAttribute("data-id") ===
                            element.getAttribute("data-id")
                        ) {
                            clearInterval(setIntervalSlide);

                            balls[count].classList.remove(
                                "carousel__ball--red"
                            );
                            slides[count].classList.remove(
                                "carousel__slide--visible"
                            );

                            count = index;

                            balls[count].classList.add("carousel__ball--red");
                            slides[count].classList.add(
                                "carousel__slide--visible"
                            );

                            setIntervalSlide = setInterval(
                                intervalSliders,
                                4000
                            );
                        }
                    });
                }
            });
        });
    });
}
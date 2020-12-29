export default function scrollUp(){
    const $scrollUp = document.getElementById("scrollUp")

    window.addEventListener("scroll", () => {
        if(window.scrollY >= 200){
            $scrollUp.classList.add("scrollUp__button--visible")
        } else if(window.scrollY <= 119){
            $scrollUp.classList.remove("scrollUp__button--visible")
        }
    })

    $scrollUp.addEventListener("click", () => window.scrollTo(0,0))
}
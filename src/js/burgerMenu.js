const d = document

export default function burgerMenu(){
    const $burgerMenu = d.querySelector(".header__menuIcon"), 
          $nav = d.getElementById("mobileNav"),
          $closed = d.querySelector(".mobileNav__closed"),
          $burgerButton = d.getElementById("burgerMenu");

    $burgerButton.addEventListener("click", (e) => e.preventDefault());

    d.addEventListener("click", (e) => {
        if(e.target === $burgerMenu){
            e.preventDefault()

            $nav.classList.toggle("mobileNav--visibility")
        }
        if(e.target === $closed){
            e.preventDefault()

            $nav.classList.remove("mobileNav--visibility")
        }
    })
}
import burgerMenu from "./burgerMenu.js"
import carousel from "./carousel.js"
import getPosts from "./getPosts.js"

document.addEventListener("DOMContentLoaded", () => {
  let pathName = window.location.pathname,
    pathNameSplit = pathName.split("/"),
    totalIndex = pathNameSplit.length,
    fileUrl = pathNameSplit[totalIndex - 1]

  switch(fileUrl){
    case "index.html":
			burgerMenu()
			carousel()
		break;

		case "blog.html":
			burgerMenu()
			getPosts()
		break;

		case "aboutMe.html":
			burgerMenu()
		break;

		case "contact.html":
			burgerMenu()
		break;
		
		case "cv.html":
			burgerMenu()
		break;
  }
})
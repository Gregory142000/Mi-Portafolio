export default async function getPosts() {
  const $cardZone = document.querySelector(".Global__cardsZone"),
    $template = document.getElementById("template-card-blog").content,
    $fragment = document.createDocumentFragment(),
    $loader = document.getElementById("loader")

  try{
    const myFetch = await fetch("https://gregcode.000webhostapp.com/wp-json/wp/v2/posts?_embed"),
      json = await myFetch.json()
  
    console.log(json)
  
    json.forEach(el => {
      $template.getElementById("link-image").setAttribute("href", el.link)
      $template.getElementById("link-card").setAttribute("href", el.link)
      $template.getElementById("link-card").textContent = el.title.rendered
      $template.querySelector("img").setAttribute("src", el._embedded["wp:featuredmedia"][0].source_url)
      $template.querySelector("img").setAttribute("alt", "Imagen del Post")
      $template.querySelector("p").textContent = el.excerpt.rendered.replace(/<[\/p]>/gi, "")
  
      let clone = document.importNode($template, true)
  
      $fragment.appendChild(clone)
    })
    
    $loader.style.display = "none"
    $cardZone.appendChild($fragment)
  } catch(Error){
    console.log("Error: " + Error.message)
    $cardZone.innerHTML = `<mark><p class="Global__error">Lo sentimos, a ocurrido un error de conexión: ${Error.message}</p></mark>`
  }
}
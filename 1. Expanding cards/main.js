const cards = document.querySelectorAll(".card")

for (let i = 0; i < cards.length; i++) {

  cards[i].addEventListener("click", function(e){
    const active = document.querySelector("#active")

    if (active)
      active.removeAttribute("id")

    if (cards[i] !== active)
      cards[i].setAttribute("id", "active")
  })

}

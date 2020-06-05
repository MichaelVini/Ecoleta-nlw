const openSearch = document.querySelector("#page-home main a")
const modal = document.querySelector("#modal")
const closeSearch = document.querySelector("#modal .header a")

openSearch.addEventListener("click", function(){
    modal.classList.remove("hide")
})
closeSearch.addEventListener("click", function(){
    modal.classList.add("hide")
})
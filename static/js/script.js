let btn = document.querySelector("#start")
let inner = document.querySelector("#inner")
let url = ""
let immagine = document.querySelector(".image1")
let previous = "image1"
function random(min, max) {
    let n = Math.random() * (max - min) + min
    n = parseInt(n)
    console.log(n)
    return n
    }

btn.addEventListener("click", (e) => {
    let classe = "image"
    let rnd = random(1,4)
    console.log(rnd)
    rnd = rnd.toString()
    classe = classe + rnd
    console.log(classe)
    e.preventDefault()
    let scelta = document.querySelector("#scelta").value.toLowerCase()
    console.log(scelta)
    if(scelta !== "none"){
        url = "https://api.chucknorris.io/jokes/random?category=" + scelta
        console.log(url)
        let p = fetch(url).then(
            function (response) {
                return response.json()
            }
        ).then(
            function (data) {
                console.log(data)
                inner.innerHTML = data.value
            }
        ).catch(
            function (error) {
                console.log(error)
            }
        )
        immagine.classList.add(classe)
        immagine.classList.remove(previous)
    }else{
        inner.innerHTML = "Seleziona una categoria"
    }
})
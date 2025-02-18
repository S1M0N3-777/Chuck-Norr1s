let btn = document.querySelector("#start")
let inner = document.querySelector("#inner")
let url = ""
btn.addEventListener("click", (e) => {
    e.preventDefault()
    let scelta = document.querySelector("#scelta").value.toLowerCase()
    console.log(scelta)
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

})
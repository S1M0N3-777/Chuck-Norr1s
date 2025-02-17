let btn = document.querySelector("#start")
let inner = document.querySelector("#inner")
let url = ""
btn.addEventListener("click", (e) => {
    e.preventDefault()
    let scelta = document.querySelector("#scelta").value
    console.log(scelta)
    switch (scelta) {
        case "1":
            url = "https://api.chucknorris.io/jokes/random?category=animal"
            break;
        case "2":
            url = "https://api.chucknorris.io/jokes/random?category=career"
            break;
        case "3":
            url = "https://api.chucknorris.io/jokes/random?category=celebrity"
            break;
        case "4":
            url = "https://api.chucknorris.io/jokes/random?category=dev"
            break;
        case "5":
            url = "https://api.chucknorris.io/jokes/random?category=explicit"
            break;
        case "6":
            url = "https://api.chucknorris.io/jokes/random?category=fashion"
            break;
        case "7":
            url = "https://api.chucknorris.io/jokes/random?category=food"
            break;
        case "8":
            url = "https://api.chucknorris.io/jokes/random?category=history"
            break;
        case "9":
            url = "https://api.chucknorris.io/jokes/random?category=money"
            break;
        case "10":
            url = "https://api.chucknorris.io/jokes/random?category=movie"
            break;
        case "11":
            url = "https://api.chucknorris.io/jokes/random?category=political"
            break;
        case "12":
            url = "https://api.chucknorris.io/jokes/random?category=religion"
            break;
        case "13":
            url = "https://api.chucknorris.io/jokes/random?category=science"
            break;
        case "14":
            url = "https://api.chucknorris.io/jokes/random?category=sport"
            break;
        case "15":
            url = "https://api.chucknorris.io/jokes/random?category=travel"
            break;
        case "16":
            url = "https://api.chucknorris.io/jokes/random?category=music"
            break;
    }
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
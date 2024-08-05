let instructions = true
const joke = document.getElementById("joke")

if (localStorage.getItem("instructions") != null) {
    instructions = localStorage.getItem(instructions)
    document.getElementById("instructions").remove()
}
async function GetJoke() {
    await fetch("https://icanhazdadjoke.com/slack")
        .then((response) => {
            return response.json()
        }).then((data) => {
            joke.innerHTML = data.attachments[0].fallback
        }).catch((error) => {
            joke.innerHTML = "404 Not Found"
            console.log(error)
        })
}

GetJoke()

function NextJoke() {
    GetJoke()
    if (instructions == true) {
        document.getElementById("instructions").remove()
        instructions = false
        localStorage.setItem("instructions", "false")
    }
}

addEventListener("keyup", (e) => {
    if (e.keyCode == 32) {
        NextJoke()
    }
})




let lis = document.querySelectorAll("ul > li")
let box = document.querySelector(".box")


if (window.localStorage.getItem("color")) {
    box.style.backgroundColor = window.localStorage.getItem("color")

    lis.forEach((li) => {
        li.classList.remove("active")
    })

    document.querySelector(`[data-color= "${window.localStorage.getItem("color")}"]`).classList.add("active")

}

lis.forEach((li) => {
    li.addEventListener("click", function (event) {
        lis.forEach((subLi) => {
            subLi.classList.remove("active")
        })
        event.target.classList.add('active')
        box.style.backgroundColor = event.target.dataset.color;

        window.localStorage.setItem("color", event.target.dataset.color)
    })
})

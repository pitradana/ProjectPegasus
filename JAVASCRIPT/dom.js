// let el = document.getElementById("div-1")
// let el = document.getElementsByTagName("div")
// let el = document.getElementsByClassName("div-2")

// let el = document.querySelector("#div-1")
// let el = document.querySelector(".div-2")
// console.log(el)

// Set HTML Content
// el.innerHTML = "<p>Hello World</p>"


// Change Attribute
// let input = document.getElementById("input")
// console.log(input)

// input.setAttribute("text", "checkbox")

// let input = document.getElementById("input")
// input.style.borderColor = "red"
// input.style.color = "blue"

const pElement = document.createElement("p")
const divEl = document.getElementById("div-1")

divEl.appendChild(pElement)
pElement.innerHTML = "Hello this is P"

divEl.removeChild(pElement)
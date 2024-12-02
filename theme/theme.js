let colors = document.getElementById("colors")
let green = document.getElementById("green")
let blue = document.getElementById("blue")
let red = document.getElementById("red")
let grey = document.getElementById("grey")
let orange = document.getElementById("orange")


green.onclick= () => {
    colors.style.backgroundColor = localStorage.setItem('theme','green')
    colors.style.backgroundColor = localStorage.getItem('theme',colors.style.backgroundColor)
}
blue.onclick= () => {
    colors.style.backgroundColor = localStorage.setItem('theme','blue')
    colors.style.backgroundColor = localStorage.getItem('theme',colors.style.backgroundColor)
}
red.onclick= () => {
    colors.style.backgroundColor = localStorage.setItem('theme','red')
    colors.style.backgroundColor = localStorage.getItem('theme',colors.style.backgroundColor)
}
grey.onclick= () => {
    colors.style.backgroundColor = localStorage.setItem('theme','grey')
    colors.style.backgroundColor = localStorage.getItem('theme',colors.style.backgroundColor)
}
orange.onclick= () => {
    colors.style.backgroundColor = localStorage.setItem('theme','orange')
    colors.style.backgroundColor = localStorage.getItem('theme',colors.style.backgroundColor)
}

colors.style.backgroundColor = localStorage.getItem('theme',colors.style.backgroundColor)


console.log(colors.id)






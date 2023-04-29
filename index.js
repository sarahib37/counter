let countEr = document.getElementById("counter")
let saveEr = document.getElementById("entries")
let totalEr = document.getElementById("total")

let count = 0
let total = 0

function increment() {
    count += 1
    countEr.textContent = count
}

function save() {
    let save = count
    let countStr = " " + count + " - "
    saveEr.textContent += countStr
    count=0
}
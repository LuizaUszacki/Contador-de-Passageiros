let count = 0
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let total = 0
let totalEl = document.getElementById("total-el")
let limitSaved = 1
let limitEl = document.getElementById("limit-el")

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    if (limitSaved <= 10) {
        increaseTotal() 
        saveEl.textContent += count
        if (limitSaved < 10) {
            saveEl.textContent += " - "
        }
        limitSaved +=1
        count = 0
        countEl.textContent = 0
    } else {
        alert("You've reached the limit of saved values!!\nPlease reset the counter!")
    }
}

function reset() {
    count = 0
    countEl.textContent = 0
    total = 0
    totalEl.textContent = "TOTAL: "
    saveEl.textContent = ""
    limitSaved = 1
}

function increaseTotal() {
    total += count
    totalEl.textContent = "TOTAL: " + total
}
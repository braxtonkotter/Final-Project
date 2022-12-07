//TODO - Your ES6 JavaScript code (if any) goes here
import "bootstrap"

//Define Variables
const xhttp = new XMLHttpRequest();
let americas = [
    []
]
let asia = [
    []
]
let AfricaMiddleEast = [
    []
]
let europe = [
    []
]

// Define a callback function
xhttp.onload = function() {
    // Here you can use the Data
    let st = this.responseText
    processArray(st)
}

//Array processing
function processArray(st) {
    let arr = [
        []
    ]

    let tmpArr = st.split("\r\n")
    for (let row of tmpArr) {
        let tmp = row.split("\t")
        arr.push(tmp)
    }
    arr.shift()

    americas.push(arr[0])
    asia.push(arr[0])
    europe.push(arr[0])
    AfricaMiddleEast.push(arr[0])
    for (let tmp of arr) {
        if (tmp[3] == "North America" || tmp[3] == "South America") {
            americas.push(tmp)
        } else if (tmp[3] == "Asia Pacific") {
            asia.push(tmp)
        } else if (tmp[3] == "Europe") {
            europe.push(tmp)
        } else if (tmp[3] == "Africa" || tmp[3] == "Middle East") {
            AfricaMiddleEast.push(tmp)
        }
    }

    americas.shift()
    asia.shift()
    AfricaMiddleEast.shift()
    europe.shift()

    localStorage.setItem('americas', JSON.stringify(americas))
    localStorage.setItem('asia', JSON.stringify(asia))
    localStorage.setItem('europe', JSON.stringify(europe))
    localStorage.setItem('AfricaMiddleEast', JSON.stringify(AfricaMiddleEast))
    localStorage.setItem('all', JSON.stringify(arr))
}

function createTable(arr) {
    let table = document.querySelector('table')
    let Inner = ``
    Inner = `<thead><tr>`
    for (let tmp of arr[0]) {
        Inner += `<th scope="col">${tmp}</th>`
    }
    Inner += `</tr></thead>`
    Inner += `<tbody>`
    for (let i = 1; i < arr.length; i++) {
        Inner += '<tr>'
        for (let j = 0; j < arr[i].length; j++) {
            console.log(arr[i][j])
            Inner += `<td>`
            if (j == 4) {
                if (arr[i][j] == '#') {
                    Inner += '<p>None</p>'
                } else {
                    Inner += `<a href="${arr[i][j]}">${arr[i][0]}</a>`
                }
            } else {
                Inner += `${arr[i][j]}`
            }
            Inner += `</td>`
        }

        Inner += '</tr>'
    }
    table.innerHTML += Inner
}

// Send a request
xhttp.open("GET", "../Mythological Creatures.txt");
xhttp.send();

export { createTable };
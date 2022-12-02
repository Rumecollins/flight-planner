let tableBodyOne = document.getElementById("table-body-1")
let tableBodyTwo = document.getElementById("table-body-2")
let tableBodyThree = document.getElementById("table-body-3")

let airports = [
    {
        id:"1",
        airportcode:"20gh",
        airportname: "foks",
        country: "usa"
    }
]

let planes = [
    {
        id:"1",
        make:"20gh",
        model: "foks",
        year: "3009",
        capacity: "50"
    }
]

let flights = [
    {
        id:"1",
        planeid:"20gh",
        airportfromid: "from",
        airporttoid: "to",
        date: "2-04-2022"
    }
]

function populateTable(){
    for(const airport of airports){
        let tableRow = document.createElement("tr")

        for(const airportItems in airport){
            const tableColums = document.createElement("td")
            tableColums.innerHTML = airport[airportItems]
            tableRow.append(tableColums)
        }
        tableBodyOne.append(tableRow)
    }

    for(const plane of planes){
        let tableRow = document.createElement("tr")

        for(const planeItems in plane){
            const tableColums = document.createElement("td")
            tableColums.innerHTML = plane[planeItems]
            tableRow.append(tableColums)
        }
        tableBodyTwo.append(tableRow)
    }
    
    for(const flight of flights){
        let tableRow = document.createElement("tr")

        for(const flightItems in flight){
            const tableColums = document.createElement("td")
            tableColums.innerHTML = flight[flightItems]
            tableRow.append(tableColums)
        }
        tableBodyThree.append(tableRow)
    }
}

populateTable()
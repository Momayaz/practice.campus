'use strict';

var tableEl = document.getElementById('table');
var header = ['First Destination', 'Second Destination', 'Capacity', 'Reserved Seats', 'Lifted Seats', 'Tickets'];
var allFlightData = [];
function Flight(flightFrom, flightInto, capacity, reservedSeats){
    this.flightFrom = flightFrom;
    this.flightInto = flightInto;
    this.capacity = capacity;
    this.reservedSeats = reservedSeats;
    this.availableSeats = 0;
    this.tickets = [];
    allFlightData.push(this);
}

    var formEl = document.getElementById('form');
    formEl.addEventListener('submit', addInfo);
    function addInfo(event){
        event.preventDefault();
        var from = event.target.flightFrom.value;
        var to = event.target.flightInto.value;
        var capacity = event.target.capacity.value;
        var reserved = event.target.reservedSeats.value;
        var allFlights = new Flight(from, to, capacity, reserved);
        allFlights.getAvailableSeats();
        console.log(allFlights.availableSeats);
        allFlights.ticketsNumber();
        allFlights.renderRow();
        getTotal();
        localStorage.setItem('flightData', JSON.stringify(allFlightData));
    }


 function renderHeader(){
    let trEl = document.createElement('tr');
    tableEl.appendChild(trEl);
    for(let i=0; i<header.length; i++){
        let thEl = document.createElement('th');
        trEl.appendChild(thEl);
        thEl.innerHTML = `${header[i]}`;
    }

}
renderHeader();


Flight.prototype.renderRow = function(){
    let trEl1 = document.createElement('tr');
    tableEl.appendChild(trEl1);
    let tdEl = document.createElement('td');
    trEl1.appendChild(tdEl);
    tdEl.innerHTML = `${this.flightFrom}`;
    let tdEl1 = document.createElement('td');
    trEl1.appendChild(tdEl1);
    tdEl1.innerHTML = `${this.flightInto}`;
    let tdEl2 = document.createElement('td');
    trEl1.appendChild(tdEl2);
    tdEl2.innerHTML = `${this.capacity}`;
    let tdEl3 = document.createElement('td');
    trEl1.appendChild(tdEl3);
    tdEl3.innerHTML = `${this.reservedSeats}`;
    let tdEl4 = document.createElement('td');
    trEl1.appendChild(tdEl4);
    tdEl4.innerHTML = `${this.availableSeats}`;
    let tdEl5 = document.createElement('td');
    trEl1.appendChild(tdEl5);
    tdEl5.innerHTML = `${this.tickets}`;
    

}

Flight.prototype.getAvailableSeats = function(){
    this.availableSeats = this.capacity - this.reservedSeats;
}

Flight.prototype.ticketsNumber = function(){
    for(let r=0; r<this.reservedSeats; r++){
    this.tickets.push(r);
}


}
if(localStorage.getItem('flightData')){
let getData = JSON.parse(localStorage.getItem('flightData'));
for(let f=0; f<getData.length; f++){
    new Flight(getData[f].flightFrom, getData[f].flightInto, getData[f].capacity, getData[f].reservedSeats);
}
}
for(let t=0; t<allFlightData.length; t++){
    allFlightData[t].getAvailableSeats();
    allFlightData[t].ticketsNumber();
    allFlightData[t].renderRow();
}

function getTotal(){
    let total = 0;
    for(let k=0; k<allFlightData.length; k++){
        total+= Number(allFlightData[k].capacity);
    }
    document.getElementById('paragraph').innerHTML = `Total Capacity=${total}`;
}
getTotal();







































// var tableHeads = ['Flying From' , 'Flying To ' , 'Capacity' , 'Reserved Seats' , 'Available Seats'];
// var allFlights =[];
// var table = document.getElementById('flightsTable');
// function Flight (flyingFrom , flyingTo , capacity , reservedSeats){
//         this.flyingFrom =flyingFrom;
//         this.flyingTo = flyingTo;
//         this.capacity = capacity;
//         this.reservedSeats = reservedSeats;
//         this.availableSeats = 0;
//        this.tickets = [];
//        allFlights.push(this);
//     }
//     Flight.prototype.setAvailableSeats = function () {
//             this.availableSeats = this.capacity - this.reservedSeats;
// };
// Flight.prototype.fillTickets = function (){
//         for (var i =1; i< this.capacity; i++){
//                 this.tickets.push(i);
//             }
//         };
//         // var firstFlight = new Flight('Amman' , 'Paris' , 150  , 15);
//         // firstFlight.setAvailableSeats();
//         // firstFlight.fillTickets();
//         // console.log(firstFlight);
//         function createHeader (){
//                 // Create the header raw
//                 // create raw
//                var trEl = document.createElement('tr');
//                table.appendChild(trEl);
//                 //create tds
//                 var firstTh;
//     for (var i = 0; i < tableHeads.length ; i++){
//            var firstTh = document.createElement('th');
//            trEl.appendChild(firstTh);
//             firstTh.textContent= `${tableHeads[i]}`;
//         }
//      Flight.prototype.addRow= function(){
//             var row =document.createElement('tr');
//             table.appendChild(row);
//             var td = document.createElement('td');
//             td.textContent = this.flyingFrom;
//             row.appendChild(td);
//             var td1 = document.createElement('td');
//             td1.textContent = this.flyingTo;
//             row.appendChild(td1);
//             var td2 = document.createElement('td');
//             td2.textContent = this.capacity;
//             row.appendChild(td2);
//             var td3 = document.createElement('td');
//             td3.textContent = this.reservedSeats;
//             row.appendChild(td3);
//     var td4 = document.createElement('td');
//     td4.textContent = this.availableSeats;
//     row.appendChild(td4);
//     var td5 = document.createElement('td');
//     td5.textContent = this.tickets;
//     row.appendChild(td5);
// }
// }
// createHeader();


// console.log(allFlights.setAvailableSeats);
// var flyightFrom = document.getElementById('form');
// flyightFrom.addEventListener('submit',addFlight);
// function addFlight(event){
//     event.preventDefault();
//     console.log(event);
//     var from = event.target.flyingFrom.value;
//     var to = event.target.flyingTo.value;
//     var capacity = event.target.capacity.value;
//     var reserved = event.target.reserved.value;
//     console.log(from,to,capacity,reserved);
//     var addedFlight = new Flight(from,to,capacity,reserved);
//     addedFlight.setAvailableSeats();
//      addedFlight.fillTickets();
//      addedFlight.addRow();
//     localStorage.setItem('flight', JSON.stringify(allFlights));
// }

// var flightData = JSON.parse(localStorage.getItem('flight'));
// for(var i = 0; i<flightData.length; i++){

// }


































































































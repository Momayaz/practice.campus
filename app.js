
let info = ['Flight From', ' Flight To', ' Capacity', ' Reserved Seats', 'Availabe Seats', 'Ticket'];

function Flights(flightFrom, flightTo, capacity, reservedSeats){
    this.flightFrom = flightFrom;
    this.flightTo = flightTo;
    this.capacity = capacity;
    this.reservedSeats = reservedSeats;
    this.availabeSeats = 0;
    this.tickets = [];
}
Flights.prototype.setAvailableSeats = function(){
    this.availabeSeats = this.capacity-this.reservedSeats;
    console.log(this.availabeSeats);
}
Flights.prototype.setTickets = function(){
    for(let k=1; k<=this.reservedSeats; k++){
        this.tickets.push([k]);
    }
}
let allFlights = document.getElementById('form');
allFlights.addEventListener('submit',addingFlight);
function addingFlight(event){
    event.preventDefault();
    console.log(event);
    let from = event.target.flightfrom.value;
    let to = event.target.flightto.value;
    let capacity = event.target.capacity.value;
    let reservedseats = event.target.reservedseats.value;
    console.log(from, to, capacity, reservedseats);
    let flights = new Flights(from,to,capacity,reservedseats);
    flights.setAvailableSeats();
    flights.setTickets();
    flights.showTable();
    console.log(flights);
}


let tableEl = document.getElementById('table');


function render(){
let trEl = document.createElement('tr');
tableEl.appendChild(trEl);
// let tdEl1 = document.createElement('td')
// trEl.appendChild(tdEl1);
// tdEl1.innerHTML = ``;
for(let k=0; k<info.length; k++){
    let tdEl = document.createElement('td');
    trEl.appendChild(tdEl);
    tdEl.innerHTML = `${info[k]}`;
}
}
render();


Flights.prototype.showTable = function(){
let trEl2 = document.createElement('tr');
tableEl.appendChild(trEl2);
let tdEl2 = document.createElement('td');
trEl2.appendChild(tdEl2);
tdEl2.innerHTML= `${this.flightFrom}`;
let tdEl3 = document.createElement('td');
trEl2.appendChild(tdEl3);
tdEl3.innerHTML= `${this.flightTo}`;
let tdEl4 = document.createElement('td');
trEl2.appendChild(tdEl4);
tdEl4.innerHTML= `${this.capacity}`;
let tdEl5 = document.createElement('td');
trEl2.appendChild(tdEl5);
tdEl5.innerHTML= `${this.reservedSeats}`;
let tdEl6 = document.createElement('td');
trEl2.appendChild(tdEl6);
tdEl6.innerHTML= `${this.availabeSeats}`;
let tdEl7 = document.createElement('td');
trEl2.appendChild(tdEl7);
tdEl7.innerHTML= `${this.tickets}`;
}























































// var tableHeads = ['Flying From' , 'Flying To ' , 'Capacity' , 'Reserved Seats' , 'Available Seats'];
// var allFlights =[];
// var table = document.getElementById('flightsTable');
// function Flight (flyingFrom , flyingTo , capacity , reservedSeats){
    //     this.flyingFrom =flyingFrom;
    //     this.flyingTo = flyingTo;
    //     this.capacity = capacity;
    //     this.reservedSeats = reservedSeats;
    //     this.availableSeats = 0;
    //    this.tickets = [];
    // }
    // Flight.prototype.setAvailableSeats = function () {
        //     this.availableSeats = this.capacity - this.reservedSeats;
// };
// Flight.prototype.fillTickets = function (){
    //     for (var i =1; i< this.capacity; i++){
        //         this.tickets.push(i);
        //     }
        // };
        // var firstFlight = new Flight('Amman' , 'Paris' , 150  , 15);
        // firstFlight.setAvailableSeats();
        // firstFlight.fillTickets();
        // console.log(firstFlight);
        // function createHeader (){
            //     // Create the header raw
            //     // create raw
            //    var trEl = document.createElement('tr');
            //    table.appendChild(trEl);
            //     //create tds
            //     var firstTh;
//     for (var i = 0; i < tableHeads.length ; i++){
    //        var firstTh = document.createElement('th');
    //        trEl.appendChild(firstTh);
    //         firstTh.textContent= `${tableHeads[i]}`;
    //     }
    //  Flight.prototype.addRow= function(){
        //     var row =document.createElement('tr');
        //     table.appendChild(row);
        //     var td = document.createElement('td');
        //     td.textContent = this.flyingFrom;
        //     row.appendChild(td);
        //     var td1 = document.createElement('td');
        //     td1.textContent = this.flyingTo;
        //     row.appendChild(td1);
        //     var td2 = document.createElement('td');
        //     td2.textContent = this.capacity;
        //     row.appendChild(td2);
        //     var td3 = document.createElement('td');
        //     td3.textContent = this.reservedSeats;
        //     row.appendChild(td3);
//     var td4 = document.createElement('td');
//     td4.textContent = this.availableSeats;
//     row.appendChild(td4);
//     var td5 = document.createElement('td');
//     td5.textContent = this.tickets;
//     row.appendChild(td5);
// }
// }
// createHeader();
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
//     addedFlight.fillTickets();
//     addedFlight.addRow();
//     allFlights.push(addedFlight);
//     console.log(allFlights);
// }
// 
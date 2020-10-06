'use strict';

//declare form
var data = ['Flight From', 'Flight Destination', 'Capacity', 'reserve', 'lefted Seats'];
var formEl = document.getElementById('form');
 var allData = [];
function Flight(from,to,capacity,reserve){
    this.from = from;
    this.to = to;
    this.capacity = capacity;
    this.reserve = reserve;
    this.availableSeats = 0;
    this.totalCapacity = 0;
    allData.push(this);
    
    
    
}
Flight.prototype.getavailableSeats = function(){
    this.availableSeats =(this.capacity - this.reserve);
}
// Event lisnter
formEl.addEventListener('submit',click);
function click(event){
    event.preventDefault();
    var from=event.target.from.value;
    var to = event.target.to.value;
    var capacity = event.target.capacity.value;
    var reserve = event.target.reserve.value;
    console.log(from,to,capacity,reserve);
     var allFlights = new Flight(from,to,capacity,reserve);
     allFlights.getavailableSeats();
     allFlights.render();
     localStorage.setItem('flight', JSON.stringify(allData));
    //  allFlights.total();
    //  allFlights.showTotal();

    
}
// total();
//create table
var tableEl = document.getElementById('table');
var trEl = document.createElement('tr');
tableEl.appendChild(trEl);
for(var i = 0; i<data.length; i++){
    var thEl = document.createElement('th');
    trEl.appendChild(thEl);
    thEl.textContent = `${data[i]}`;
}
// let table accesses to constructor function.
Flight.prototype.render = function(){
    var trEl2 = document.createElement('tr');
    tableEl.appendChild(trEl2);
    var tdEl = document.createElement('td');
    trEl2.appendChild(tdEl);
    tdEl.innerHTML = `${this.from}`;
    var tdEl2 = document.createElement('td');
    trEl2.appendChild(tdEl2);
    tdEl2.innerHTML = `${this.to}`;
    var tdEl3 = document.createElement('td');
    trEl2.appendChild(tdEl3);
    tdEl3.innerHTML = `${this.capacity}`;
    var tdEl4 = document.createElement('td');
    trEl2.appendChild(tdEl4);
    tdEl4.innerHTML = `${this.reserve}`;
    var tdEl4 = document.createElement('td');
    trEl2.appendChild(tdEl4);
    tdEl4.innerHTML = `${this.availableSeats}`;
}
if(localStorage.getItem('flight')){
var flightData=JSON.parse(localStorage.getItem('flight'));
for(var i=0; i<flightData.length; i++){
    new Flight(flightData[i].from, flightData[i].to, flightData[i].capacity, flightData[i].reserve);
}
}
// function total(){
//     var totalCapacity =0; 
//     for(var i =0 ; i < allData.length ; i++)
//     {
//         totalCapacity+=Number(allData[i].capacity);
//     }
      
// }
// Flight.prototype.total = function(){
//     for(var e=0; e<allData.length; e++){
//         this.totalCapacity+= Number(this.capacity);
//     }
// }
// Flight.prototype.showTotal = function(){
// var totalEl = document.getElementById('total');
// totalEl.textContent = `the total capacity is ${this.totalCapacity}`;

// }

for(var t=0; t<allData.length; t++){
    allData[t].getavailableSeats();
    allData[t].render();
}













































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


























































// var allList = [];
// if(localStorage.getItem('gift')){
//     var getData = JSON.parse(localStorage.getItem('gift'));
//     for(var m=0; m<getData.length; m++){
//         new Gift(getData[m].wishList, getData[m].expectedYear);
        
//     }
//     }
// function Gift(wishList, expectedYear){
//     this.wishList = wishList;
//     this.expectedYear = expectedYear;
//     this.minYears =10;
//     this.maxYears = 100;
//     this.randomYear = 0; 
//     allList.push(this);
// }
// var formEl = document.getElementById('form');
// formEl.addEventListener('submit', addInfo);
// function addInfo(event){
//     event.preventDefault();
//     var wishList = event.target.wishList.value;
//     var expectedYear = event.target.expextedYear.value;
//     console.log(wishList,expectedYear);
//     var wishGift = new Gift(wishList, expectedYear);
    
//     wishGift.getRandomYear();
//     wishGift.render();
//     localStorage.setItem('gift', JSON.stringify(allList));
// }

// var tabelEl = document.getElementById('table');
// function showHeader(){
//     var trEl1 = document.createElement('tr');
//     tabelEl.appendChild(trEl1);
//     var thEl = document.createElement('th');
//     trEl1.appendChild(thEl);
//     thEl.innerHTML = `Wish List`;
//     var thEl2 = document.createElement('th');
//     trEl1.appendChild(thEl2);
//     thEl2.innerHTML = `expected Year`;
//     var thEl3 = document.createElement('th');
//     trEl1.appendChild(thEl3);
//     thEl3.innerHTML = `Your Wish Will Be True On `;


// }
// showHeader();
// Gift.prototype.render = function(){
//     var trEl = document.createElement('tr');
//     tabelEl.appendChild(trEl);
//     var tdEl = document.createElement('td');
//     trEl.appendChild(tdEl);
//     tdEl.innerHTML = `${this.wishList}`;
//     var tdEl1 = document.createElement('td');
//     trEl.appendChild(tdEl1);
//     tdEl1.innerHTML = `${this.expectedYear}`;
//     var tdEl2 = document.createElement('td');
//     trEl.appendChild(tdEl2);
//     tdEl2.innerHTML = `${this.randomYear}`;

// }
// Gift.prototype.getRandomYear = function(){
//     this.randomYear = Math.floor(getRandomArbitrary(this.minYears,this.maxYears));
// }
// for(var h=0; h<getData.length; h++){
//     allList[h].getRandomYear();
//     allList[h].render();
// }
// function getRandomArbitrary(min, max) {
//     return Math.random() * (max - min) + min;
//   }









































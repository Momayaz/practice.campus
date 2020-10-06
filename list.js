var data = [];
function Task(toDo, dueDate){
    this.toDo = toDo;
    this.dueDate = dueDate;
    data.push(this);
}

var formEl = document.getElementById('form');
formEl.addEventListener('submit', click);
function click(event){
    event.preventDefault();
    var toDo = event.target.toDo.value;
    var dueDate = event.target.due.value;
    var allData = new Task(toDo, dueDate);
    allData.render();
    localStorage.setItem('set', JSON.stringify(data));
}
// click();
Task.prototype.render = function(){
var listEl = document.getElementById('list');
var ulEl = document.createElement('ul');
listEl.appendChild(ulEl);
var liEl1 = document.createElement('li');
ulEl.appendChild(liEl1);
liEl1.textContent = `${this.toDo}`;
liEl2 = document.createElement('li');
ulEl.appendChild(liEl2);
liEl2.textContent= `${this.dueDate}`;
}
if(localStorage.getItem('set')){
var dataStorage=JSON.parse(localStorage.getItem('set'));
console.log(dataStorage);
for(var i=0; i<dataStorage.length; i++){
    new Task(dataStorage[i].toDo, dataStorage[i].dueDate);
    data[i].render();
}
}
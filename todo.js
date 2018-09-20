let todos = [];
const listDOM = document.getElementById('list');
const inputDOM = document.getElementById('input-todo');
const addDOM = document.getElementById('add-button');
//const countDOM = document.getElementById('count');

const data = JSON.parse(localStorage.getItem('todos'));
console.log(data);
todos = data;

function render () {
   let index = 0;
   listDOM.innerHTML = "";

    while(index < todos.length) {
        console.log(index)
        if(todos[index].status == true) {
            listDOM.innerHTML += '<li><input checked onchange="statusBerubah('+index+')" type="checkbox"><strike> ' + todos[index].nama + '</strike> <button onclick="hapus('+index+')">Delete</button></li>'
        } else {
            listDOM.innerHTML += '<li><input onchange="statusBerubah('+index+')" type="checkbox"> ' + todos[index].nama + ' <button onclick="hapus('+index+')">Delete</button></li>'
        }
        
        index = index + 1;
    } 
}

render();

addDOM.addEventListener('click', function() {
    const todo = {
        nama : inputDOM.value,
        status : false
    };
    // if (todo == "") {
    //     return;
    // }

    todos.push(todo);
    console.log(todos)
    //countDOM.innerHTML = todos.length;
    render();
    localStorage.setItem('todos', JSON.stringify(todos));
})

function hapus(p) {
    console.log(p)
    todos.splice(p, 1)
    //countDOM.innerHTML = p;
    render();
    localStorage.setItem('todos', JSON.stringify(todos));
}

function statusBerubah(index) {
    console.log(index);
    if(todos[index].status == true) {
        todos[index].status = false
    } else {
        todos[index].status = true
    }
    render();
    localStorage.setItem('todos', JSON.stringify(todos));
}


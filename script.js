// select my DOM elements
let newTodoForm = document.getElementById('new-todo-form')
let newTodoInput = document.getElementById('new-todo')
let todoList = document.getElementById('todo-list')
var todos = JSON.parse(localStorage.getItem('todos')) || []

//create list of todos
genList()

// loop through array
function genList() {
    todoList.innerHTML=''
    for (var i = 0; i < todos.length; i++ ) {
    var addLi = document.createElement('li')
    addLi.setAttribute("dataIndex", i)
    addLi.innerText = todos[i]
    var button = document.createElement('button')
    button.innerHTML = '&#10004'
    addLi.appendChild(button)
    todoList.appendChild(addLi)
    }
}
   
// listen to add item button
function addTodo(event) {
    event.preventDefault()
    var newTodoText = newTodoInput.value
    console.log("New Todo Item: " + newTodoText)
    todos.push(newTodoText)
    localStorage.setItem('todos', JSON.stringify(todos))
    console.log(todos)
    newTodoInput.value =''
    genList()
}

function removeTodo(event) {
    console.log(event.target)
    if (event.target.tagName == 'BUTTON' ) {
        var idx = event.target.parentElement.getAttribute('dataIndex')
    console.log(idx)
    todos.splice(idx,1)
    console.log(todos)
    localStorage.setItem('todos', JSON.stringify(todos))
    genList()

    }
}

todoList.addEventListener('click', removeTodo)
newTodoForm.addEventListener('submit',addTodo)

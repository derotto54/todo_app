// select my DOM elements
let newTodoForm = document.getElementById('new-todo-form')
let newTodoInput = document.getElementById('new-todo')
let todoList = document.getElementById('todo-list')
var todos = ['test1', 'test2', 'test3']

// listen to add item button
function addTodo(event) {
    event.preventDefault()
    var newTodoText = newTodoInput.value
    console.log("New Todo Item: " + newTodoText)
    todos.push(newTodoText)
    console.log(todos)
    newTodoInput.value =''
}
newTodoForm.addEventListener('submit',addTodo)

//for (var i = 0, )

// Count the number of todos


//List all todos


//Add a button to mark as complete for each listed todo and remove it from storage
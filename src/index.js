// Flatiron task lister Lab
//
// 1- we take the value inside of our input
// 2- make a new list below with that value
// 3- reveal a create task form

document.addEventListener('DOMContentLoaded', function(){

  let app = document.getElementById('app-content')
  let masterList = []
  console.log('the dom content is loaded')
  let createNewListForm = document.getElementById('create-list-form')

  function renderNewList(listTitle){
    return `<div><h2>${list.title}<button data-id="1" class="delete-list">X<button>list</h2></div>
            <ul>
            <li data-id="1">Task: desc <br> Priority: prio</li>
            <ul>`
  }

  function revealCreateTaskForm(){

    return `<div id="app-content">
  <form id="create-task-form">
    <label for="parent-list">Select List:</label>
    <select id="parent-list">
      <!-- Major key alert:
      read the docs for HTML option selected:
      https://www.w3schools.com/tags/att_option_selected.asp -->
    <option value="My Dank List" selected>
      My Dank List
    </option>
    </select>

    <label for="new-task-description">Task description:</label>
    <input required type="text" id="new-task-description" placeholder="description">

    <label for="new-task-priority">Priority level:</label>
    <input type="text" id="new-task-priority" placeholder="priority">
    <input type="submit" value="Create New Task">
  </form>
</div>`
  }


  function createNewList(e){
    e.preventDefault()
    let listContainer = document.getElementById('lists')

    if (listContainer){
      app.innerHTML += revealCreateTaskForm()
      listContainer = document.createElement('div')
      listContainer.id = 'lists'
      app.append(listContainer)

    }


    let newListTitle = document.getElementById('new-list-title')
    let newList = new List(newListTitle.value)
    masterList.push{newList}
    console.log(masterList)

    let parentList = document.getElementById('parent-list')
    parentList.innerHTML = masterList.map((list) => {
      return `<option value="${list.title}">
      ${list.title}
      </option>`
    }).join('')


    listContainer.innerHTML += newList.render




  })

})

  createNewListForm.addEventListener('submit', createNewList(){

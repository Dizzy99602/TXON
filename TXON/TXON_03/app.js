const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const filterBtns = document.querySelectorAll('.filter button');

let todos = [];

// Function to render todos
function renderTodos() {
  todoList.innerHTML = '';

  todos.forEach((todo, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span class="todo-text ${todo.completed ? 'completed' : ''}">${todo.text}</span>
      <button class="delete-btn" data-index="${index}">Delete</button>
    `;
    todoList.appendChild(li);
  });
}

// Function to add a new todo
function addTodo() {
  const text = input.value.trim();

  if (text === '') return;

  const todo = {
    text,
    completed: false
  };

  todos.push(todo);

  input.value = '';

  renderTodos();
}

// Function to delete a todo
function deleteTodo(index) {
  todos.splice(index, 1);

  renderTodos();
}

// Function to toggle todo completed state
function toggleCompleted(index) {
  todos[index].completed = !todos[index].completed;

  renderTodos();
}

// Function to filter todos
function filterTodos(filter) {
  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') {
      return !todo.completed;
    } else if (filter === 'completed') {
      return todo.completed;
    } else {
      return true;
    }
  });

  todos = filteredTodos;

  renderTodos();
}

// Event listeners
form.addEventListener('submit', event => {
  event.preventDefault();

  addTodo();
});

todoList.addEventListener('click', event => {
  if (event.target.classList.contains('delete-btn')) {
    const index = event.target.dataset.index;

    deleteTodo(index);
  } else if (event.target.classList.contains('todo-text')) {
    const index = event.target.parentNode.dataset.index;

    toggleCompleted(index);
  }
});

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.dataset.filter;

    filterBtns.forEach(btn => {
      btn.classList.remove('active');
    });

    btn.classList.add('active');

    filterTodos(filter);
  });
});

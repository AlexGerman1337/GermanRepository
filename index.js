const todoControl = document.querySelector('.todo-control'),
    todoList = document.querySelector('.todo-list'),
    headerInput = document.querySelector('.header-input'),
    todoСompleted = document.querySelector('.todo-completed');

const todoData = [
  {
        value: 'Сварить кофе',
        completed: false
  },
  {
        value: 'Помыть посуду',
        completed: false
  },
];

const render = function() {
  todoList.textContent = ' ';
  todoСompleted.textContent = ' ';

  todoData.forEach(function(item){
      const li = document.createElement('li');
      li.classList.add('todo-item');
      li.innerHTML = '<span class="text-todo">' + item.value + '</span>' + 
        '<div class="todo-buttons">' +
            '<button class="todo-remove"></button>' +
            '<button class="todo-complete"></button>' +
        '</div>';
        
        if(item.completed) {
          todoCompleted.append(li);

        } else {
          todoList.append(li);
        }

        const BtnTodoComplete = li.querySelector('todo-complete');
        BtnTodoComplete.addEventListener('click', function(){
          item.completed = !item.completed;
          render();
        })
  });

};

todoControl.addEventListener('submit', function(event){
  event.preventDefault();

  const newTodo = {
    value: headerInput.value,
    completed: false
  }
  todoData.push(newTodo)

  render();
});

render();
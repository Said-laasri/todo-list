const tasklistDisplay = document.querySelector('.shores');
const inputValu = document.querySelector('.newTask');
const addBtn = document.querySelector('.addtolist');

let taskList = [];

const display = () => {
  tasklistDisplay.innerHTML = '';
  taskList = JSON.parse(localStorage.getItem('localItem')) || [];
  taskList.forEach((task) => {
    const tasklistDisplay = document.querySelector('.shores');
    const shore = document.createElement('div');
    shore.classList.add('listDo');
    shore.innerHTML = `
  <input type="checkbox">
  <input class="editTask" type="text"  value="${task.description}"   >
  <div>
  <i class="fa-solid fa-trash-can" id="${task.index}"></i>
  </div>
 `;
    tasklistDisplay.appendChild(shore);
    const taskInput = shore.children[1];
    taskInput.addEventListener('change', () => {
      const taskListChores = document.querySelector('.shores');
      const array = Array.from(taskListChores.children);
      const index = array.indexOf(shore);
      const taskListLocal = JSON.parse(localStorage.getItem('localItem'));
      taskListLocal[index].description = taskInput.value;
      localStorage.setItem('localItem', JSON.stringify(taskListLocal));
    });
  });
};

display();

addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (inputValu.value === '') return;
  taskList = JSON.parse(localStorage.getItem('localItem')) || [];
  const obj = {
    description: inputValu.value,
    completed: false,
    index: taskList.length,
  };

  taskList.push(obj);
  localStorage.setItem('localItem', JSON.stringify(taskList));
  inputValu.value = '';
  display();
});

const removeTask = (index) => {
  const newArr = taskList.filter((element) => element.index !== index);
  taskList.length = 0;
  let i = 0;
  newArr.forEach((element) => {
    element.index = i;
    i += 1;
  });
  taskList.push(...newArr);
  localStorage.setItem('localItem', JSON.stringify(taskList));
  display();
};
tasklistDisplay.addEventListener('click', (e) => {
  if (e.target.classList.contains('fa-solid')) {
    const index = parseInt(e.target.getAttribute('id'), 10);
    removeTask(index);
  }
});

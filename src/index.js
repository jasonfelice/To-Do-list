import './styles/style.css';
const listWrapper = document.querySelector('.to-do-list');

let taskArray = [
    {
        description: 'Finish this project',
        completed: false,
        index: 1
    },
    {
        description: 'Complete the Ableton midi project',
        completed: false,
        index: 2
    },
];


let addTask = () => {
  for (let each of taskArray) {
    const taskWrapper = document.createElement('div');
    taskWrapper.classList.add('list-item');
    const task = document.createElement('div');
    task.classList.add('task');
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    if(each.completed) {
      checkbox.setAttribute('checked', '');
    }
    const description = document.createElement('p');
    description.textContent = each.description;
    const menuBtn = document.createElement('i');
    task.appendChild(checkbox);
    task.appendChild(description);
    taskWrapper.appendChild(task);
    taskWrapper.appendChild(menuBtn);
    listWrapper.appendChild(taskWrapper);
    console.log(task.description)
  }
}

addTask();
import List from './List.js';
import updateStorage from './updateStorage.js';

const listWrapper = document.querySelector('.to-do-list');

function chkBxEvent() {
  const chkBoxes = document.querySelectorAll('.task input[type="checkbox"]');
  chkBoxes.forEach((each) => each.addEventListener('change', () => {
    const index = +(each.parentElement.parentElement.getAttribute('id')) - 1;
    List.taskList[index].toggleCompleted();
    each.parentElement.parentElement.classList.toggle('completed');
    updateStorage();
  }));
}

function chkBxEvntsClr() {
  const chkBoxes = document.querySelectorAll('.task input[type="checkbox"]');
  for (let i = 0; i < chkBoxes.length; i += 1) {
    chkBoxes[i].replaceWith(chkBoxes[i].cloneNode(true));
  }
}

export default (taskItem, index, boo) => {
  const taskWrapper = document.createElement('div');
  taskWrapper.classList.add('list-item');
  taskWrapper.setAttribute('id', index);
  const task = document.createElement('div');
  task.classList.add('task');
  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  if (boo) {
    checkbox.setAttribute('checked', '');
    taskWrapper.classList.toggle('completed');
  }
  const description = document.createElement('input');
  description.setAttribute('type', 'text');
  description.classList.add('task-description');
  description.value = taskItem;
  description.addEventListener('input', (e) => {
    const desInput = e.target;
    List.taskList[+(desInput.parentElement.parentElement.getAttribute('id') - 1)].updateTask(desInput.value);
    updateStorage();
  });
  const btnWrapper = document.createElement('div');
  const dragBtn = document.createElement('i');
  dragBtn.classList.add('drag-btn');
  const delBtn = document.createElement('i');
  delBtn.classList.add('del-btn');
  delBtn.addEventListener('click', () => {
    const theTask = delBtn.parentElement.parentElement;
    List.deleteTask(+theTask.getAttribute('id'));
    theTask.remove();
    updateStorage();
  });
  delBtn.addEventListener('click', () => {
    const listItems = document.querySelectorAll('.list-item');
    for (let i = 0; i < listItems.length; i += 1) {
      listItems[i].setAttribute('id', i + 1);
    }
  });
  description.addEventListener('focus', () => {
    taskWrapper.classList.toggle('field-focus');
    delBtn.style.display = 'block';
    dragBtn.style.display = 'none';
  });
  description.addEventListener('blur', () => {
    taskWrapper.classList.toggle('field-focus');
    delBtn.style.display = 'none';
    dragBtn.style.display = 'block';
  });
  btnWrapper.appendChild(dragBtn);
  btnWrapper.appendChild(delBtn);
  task.appendChild(checkbox);
  task.appendChild(description);
  taskWrapper.appendChild(task);
  taskWrapper.appendChild(btnWrapper);
  listWrapper.appendChild(taskWrapper);
  chkBxEvntsClr();
  chkBxEvent();
};

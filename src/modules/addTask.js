const listWrapper = document.querySelector('.to-do-list');

export default (taskItem) => {
  const taskWrapper = document.createElement('div');
  taskWrapper.classList.add('list-item');
  const task = document.createElement('div');
  task.classList.add('task');
  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  const description = document.createElement('input');
  description.setAttribute('type', 'text');
  description.value = taskItem;
  const btnWrapper = document.createElement('div');
  const dragBtn = document.createElement('i');
  dragBtn.classList.add('drag-btn');
  const delBtn = document.createElement('i');
  delBtn.classList.add('del-btn');
  btnWrapper.appendChild(dragBtn);
  btnWrapper.appendChild(delBtn);
  task.appendChild(checkbox);
  task.appendChild(description);
  taskWrapper.appendChild(task);
  taskWrapper.appendChild(btnWrapper);
  listWrapper.appendChild(taskWrapper);
};

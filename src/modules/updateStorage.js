import { List } from './List';

export default () => {
  localStorage.setItem('tasks', JSON.stringify(List.taskList));
};

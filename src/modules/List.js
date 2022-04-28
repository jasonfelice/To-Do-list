export default class List {
  constructor(task, index, boo) {
    this.task = task;
    this.index = index;
    this.isCompleted = boo;
  }

  toggleCompleted() {
    if (this.isCompleted === false) {
      this.isCompleted = true;
    } else this.isCompleted = false;
  }

  updateTask(text) {
    this.task = text;
  }

  static reindex() {
    for (let i = 0; i < taskList.length; i += 1) {
      taskList[i].index = i + 1;
    }
  }

  static deleteTask(i) {
    taskList = taskList.filter((each) => each.index !== i);
    List.reindex();
  }

  static deleteCompleted() {
    taskList = taskList.filter((each) => each.isCompleted !== true);
    List.reindex();
  }
}

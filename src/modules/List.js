export default class List {
  constructor(task, index, boo) {
    this.task = task;
    this.index = index;
    this.isCompleted = boo;
  }

  static taskList = [];

  toggleCompleted() {
    if (this.isCompleted === false) {
      this.isCompleted = true;
    } else this.isCompleted = false;
  }

  updateTask(text) {
    this.task = text;
  }

  static reindex() {
    for (let i = 0; i < List.taskList.length; i += 1) {
      List.taskList[i].index = i + 1;
    }
  }

  static deleteTask(i) {
    List.taskList = List.taskList.filter((each) => each.index !== i);
    List.reindex();
  }

  static deleteCompleted() {
    List.taskList = List.taskList.filter((each) => each.isCompleted !== true);
    List.reindex();
  }
}

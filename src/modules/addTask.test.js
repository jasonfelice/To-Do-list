const addTask = require('./addTask');

describe('Add/Delete items from to-do list', () => {
  test('Add one new item to the list', () => {
    document.body.innerHTML =
    '<div class="to-do-list">' +
    '</div>';
    addTask('Test', 1, false);
    const list = document.querySelectorAll('.to-do-list');
    expect(list).toHaveLength(1);
  });
});
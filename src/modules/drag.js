export default () => {
  const wrapper = document.querySelector('.container');
  const header = wrapper.querySelector('.heading');

  const onDrag = ({ movementX, movementY }) => {
    let getStyle = window.getComputedStyle(wrapper);
    let left = parseInt(getStyle.left);
    let top = parseInt(getStyle.top);
    wrapper.style.left = `${left + movementX}px`;
    wrapper.style.top = `${top + movementY}px`;
  }

  header.addEventListener('mousedown', () => {
    header.addEventListener('mousemove', onDrag)
  });

  header.addEventListener('mouseup', () => {
    header.removeEventListener('mousemove', onDrag)
  });

  header.addEventListener('mouseout', () => {
    header.removeEventListener('mousemove', onDrag)
  });
}
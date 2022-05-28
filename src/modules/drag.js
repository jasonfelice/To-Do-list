export default () => {
  const wrapper = document.querySelector('.container');
  const header = wrapper.querySelector('.heading');

  const onDrag = ({ movementX, movementY }) => {
    const getStyle = window.getComputedStyle(wrapper);
    const left = parseInt(getStyle.left, 10);
    const top = parseInt(getStyle.top, 10);
    wrapper.style.left = `${left + movementX}px`;
    wrapper.style.top = `${top + movementY}px`;
  };

  header.addEventListener('mousedown', () => {
    header.addEventListener('mousemove', onDrag);
  });

  header.addEventListener('mouseup', () => {
    header.removeEventListener('mousemove', onDrag);
  });

  header.addEventListener('mouseout', () => {
    header.removeEventListener('mousemove', onDrag);
  });
};
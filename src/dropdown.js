import './style.css';

const dropdown = function addDrop(menu) {
  const list = menu.getElementsByTagName('ul')[0];
  const btn = menu.getElementsByTagName('button')[0];
  list.classList.add('hidden');
  btn.onmouseenter = () => {
    list.classList.remove('hidden');
    list.classList.add('visible');
  };
  btn.onmouseleave = () => {
    list.classList.remove('visible');
    list.classList.add('hidden');
  };
  list.onmouseenter = () => {
    list.classList.remove('hidden');
    list.classList.add('visible');
  };
  list.onmouseleave = () => {
    list.classList.remove('visible');
    list.classList.add('hidden');
  };
};

export { dropdown };

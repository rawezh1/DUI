import './style.css';

const mobMenu = function addDrop(menu) {
  const list = menu.getElementsByTagName('ul')[0];
  const img = menu.getElementsByTagName('img')[0];
  list.classList.add('hidden');
  img.onclick = () => {
    if (list.classList.contains('hidden')) {
      list.classList.remove('hidden');
      list.classList.add('visible');
    } else {
      list.classList.remove('visible');
      list.classList.add('hidden');
    }
  };
};

export { mobMenu };

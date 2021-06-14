import './style.css';
import { dropdown } from './dropdown';

window.onload = function load() {
  const menu = document.getElementsByClassName('dropMenu')[0];
  dropdown(menu);
};

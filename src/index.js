import './style.css';
import { dropdown } from './dropdown';
import menuImg from './menu.png';
import { mobMenu } from './mobile';

window.onload = function load() {
  const menu = document.getElementsByClassName('dropMenu')[0];
  const mobileMenu = document.getElementsByClassName('mobileMenu')[0];
  mobileMenu.getElementsByTagName('img')[0].src = menuImg;
  dropdown(menu);
  mobMenu(mobileMenu);
};

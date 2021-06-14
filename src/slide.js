/* eslint-disable prefer-destructuring */
import './style.css';
import img0 from './img0.png';
import img1 from './img1.jpg';
import img2 from './img2.png';

const slide = function slideImg() {
  const leftArrow = document.getElementById('leftArrow');
  const rightArrow = document.getElementById('rightArrow');
  const Image = document.getElementById('Image');
  const Arr = [img0, img1, img2];
  let currentIndex = 0;
  // Set initial image and dot
  Image.src = Arr[currentIndex];
  document.getElementById(`${currentIndex}`).classList.add('active');

  // Next image index
  function next() {
    if (currentIndex < 2) {
      currentIndex += 1;
    } else {
      currentIndex = 0;
    }
  }

  // Previous image index
  function previous() {
    if (currentIndex > 0) {
      currentIndex -= 1;
    } else {
      currentIndex = 2;
    }
  }

  // Set dot class to 'dot' (remove 'active' class)
  function resetClass() {
    for (let i = 0; i < 3; i += 1) {
      const dot = document.getElementById(`${i}`);
      dot.classList.remove('active');
      dot.classList.add('dot');
    }
  }

  // Set click handler on left arrow (previous button)
  leftArrow.onclick = () => {
    previous();
    Image.src = Arr[currentIndex];
    resetClass();
    document.getElementById(`${currentIndex}`).classList.add('active');
  };

  // Set click handler on right arrow (next button)
  rightArrow.onclick = () => {
    next();
    Image.src = Arr[currentIndex];
    resetClass();
    document.getElementById(`${currentIndex}`).classList.add('active');
  };

  // Set click handler for dots
  for (let i = 0; i < 3; i += 1) {
    const dot = document.getElementById(`${i}`);
    dot.addEventListener('click', () => {
      Image.src = Arr[i];
      resetClass();
      document.getElementById(`${i}`).classList.add('active');
    });
  }
};

export { slide };

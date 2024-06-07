
const toggleNav = document.querySelector('nav');
const toggleBtn = document.querySelector('.toggle');

const removePreload = () => {
  return document.querySelector('body').classList.remove('preload');
}

// 클릭 이벤트가 일어날 때 key-value값을 로컬스토리지에 저장
const onClickToggle = () => {
  removePreload();
  toggleNav.classList.toggle('active');

  if(toggleNav.className.includes('active')) {
    localStorage.setItem('toggle', 'open');
  } else {
    localStorage.setItem('toggle', 'close');
  }
}

// 로컬스토리지에 접근
window.addEventListener('DOMContentLoaded', () => {
  const toggleValue = localStorage.getItem('toggle');

  if(toggleValue === 'open') {
    toggleNav.classList.add('active');
  } else {
    toggleNav.classList.remove('active');
  }

  document.querySelector('body').style.visibility = 'visible';
})

toggleBtn.addEventListener('click', onClickToggle)

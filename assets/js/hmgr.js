const mobilemenu = document.querySelector('#MBL__menu')

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('navOpen').addEventListener('click', function () {
    this.classList.toggle('active');
    mobilemenu.classList.toggle('active');
  })
});
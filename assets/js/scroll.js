window.addEventListener('scroll',function () {
  let scroll = document.documentElement.scrollTop;
  document.querySelector('#scroll').innerHTML = scroll;

  let slideElm = document.querySelectorAll('.slide_anime');
  
  if (scroll > 200) {
    for (let i = 0;  i < slideElm.length; i++) {
      slideElm[i].classList.add('active');
    } 
  } else {
    for (let i = 0; i < slideElm.length; i++) {
      slideElm[i].classList.remove('active');  
    }
  } 
})
window.addEventListener('scroll',function () {
  let scroll = document.documentElement.scrollTop;
  document.querySelector('#scroll').innerHTML = scroll;

  let slideElm = document.querySelectorAll('.slide_in');
  
  if (scroll > 200) {
    // ↓　つまずいた部分 for in はダメだった。
    // for (let i in slideElm) {
    //   slideElm[i].classList.add('active');
    // }

    // ↓のforはOK 
    // for (let i = 0;  i < slideElm.length; i++) {
    //   slideElm[i].classList.add('active');
    // } 

    // 結果的にforEachで簡素化
    slideElm.forEach(value => value.classList.add('active'));
  } else {
    // for (let i = 0; i < slideElm.length; i++) {
    //   slideElm[i].classList.remove('active');  
    // }
    slideElm.forEach(value => value.classList.remove('active'));
  } 
})

// const elem = document.querySelector('.slide_in');
// const cb = function () {
//   alert('just now');
// }

// const io = new IntersectionObserver(cb);
// io.observe(elem);
// window.addEventListener('scroll',function () {
//   let scroll = document.documentElement.scrollTop;
//   document.querySelector('#scroll').innerHTML = scroll;

  // let slideElm = document.querySelectorAll('.slide_in');
/*
  if (scroll > 200) {
    // ↓　つまずいた部分 for in でもいける。lengthは不要！
    // for (i in slideElm) {
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
*/

// const scrollAnimationElm = document.querySelectorAll('.slide_in');
// const scrollAnimationFunc = function () {
//   for (i in scrollAnimationElm) {
//     const triggerMargin = 180;
//     if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
//       scrollAnimationElm[i].classList.add('active');
//     } else {
//       scrollAnimationElm[i].classList.remove('active');
//     }
//   }
// }
// window.addEventListener('load', scrollAnimationFunc);
// window.addEventListener('scroll', scrollAnimationFunc);

// ふわっとでるやつ　========================
function showElementAnimation() {

  let element = document.querySelectorAll('.slide_in');
  if (!element) return; // 要素がなかったら処理をキャンセル

  let showTiming = window.innerHeight > 768 ? 200 : 100; // 要素が出てくるタイミングはここで調整
  let scrollY = window.pageYOffset; //スクロール量を取得
  let windowH = window.innerHeight; //ブラウザウィンドウのビューポート(viewport)の高さを取得
  for (let i = 0; i < element.length; i++) {
    let elemClientRect = element[i].getBoundingClientRect();
    let elemY = scrollY + elemClientRect.top;
  if (scrollY + windowH - showTiming > elemY) {
    element[i].classList.add('active');
  } else if (scrollY + windowH < elemY) {
      // 上にスクロールして再度非表示にする場合はこちらを記述
    element[i].classList.remove('active');
    }
  }
}
showElementAnimation();
window.addEventListener('scroll', showElementAnimation);
// ふわっとここまで　===========================================
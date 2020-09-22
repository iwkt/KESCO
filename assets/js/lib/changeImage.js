'use strict';
class ChangeImage {
  constructor(elm, id) {
    this.elm = elm;
    this.id = id;
    this._thumbs();
  }
  _thumbs() {
    const id = this.id;
    const thumbs = document.querySelectorAll(this.elm);
    // const imgsrc = './step1/';
    thumbs.forEach(function (item, index) {
      item.addEventListener('mouseover', function () {
        document.querySelector(id).src = /*imgsrc + */this.dataset.image;
      })
    });
  }
}


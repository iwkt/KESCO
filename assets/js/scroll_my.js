class ScllOb {
  constructor(els, rootMargin, threshold) {
    this.els = document.querySelectorAll(els);
    const options = {
      root: null,
      rootMargin: rootMargin,
      threshold: threshold
    };
    this._init();
  }
  _init() {
    const callback = function (changes) {
      changes.forEach(change => {
        if (change.isIntersecting) {
          change.target.classList.add('active');
        // } else {
        //   change.target.classList.remove('active');
        }
      })
    }
    const obs = new IntersectionObserver(callback.bind(this), this.options)
    this.els.forEach(img => obs.observe(img));
  }
}

// document.addEventListener('DOMContentLoaded', function () {
  const elem = '.slide_in';
  const rm = '-30% 0px';
  const ths = 0;


// })

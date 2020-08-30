function clicktglClass(e_name) {
  document.addEventListener('DOMContentLoaded', function () {
    for (let i in e_name) {
      e_name[i].addEventListener('click', function (e) {
        e.preventDefault();
        this.classList.toggle('inview');
        this.nextElementSibling.classList.toggle('inview');
      })
    }
  })
}

const toglle_block = document.querySelectorAll('.toglle_block');
clicktglClass(toglle_block)

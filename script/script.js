
// nav toggle script
function menuToggle(){
    document.getElementById('menu').classList.toggle('icon');
    var x = document.getElementById("myDIV");
  if (x.style.maxHeight === "220px") {
    x.style.maxHeight = "0px";
  } else {
    x.style.maxHeight = "220px";
  }
}

// button toggle
btn = document.querySelector('.cloud-btn').querySelectorAll('button');
btn.forEach(element => {
  element.addEventListener('click', function() {
    btn.forEach(button=>button.classList.remove('active'))

    this.classList.add('active');
  })
});
let togglers = document.querySelectorAll('[data-toggle="tab"]');

for (let i = 0; i < togglers.length; i++) {
  togglers[i].addEventListener('click', function() {
    let tabs = document.querySelectorAll('.tab');
    for(let j = 0; j < tabs.length; j++) {
      tabs[j].classList.remove('active');
    }
    let $target = document.querySelector(this.getAttribute('data-target'));
    $target.classList.add('active');
  });
}



  // swiper js
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

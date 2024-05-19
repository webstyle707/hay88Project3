 // click menu (toggle btn)
 document.addEventListener("DOMContentLoaded", function () {
    const menuBar = document.getElementById("menuBar");
    const toggleButton = document.getElementById("toggleButton");

    toggleButton.addEventListener("click", function () {
      menuBar.classList.toggle("visible");
    });
  });
    // end

  var header = document.getElementById("myDIV");
  var btns = header.getElementsByClassName("btn");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("actived");
      current[0].className = current[0].className.replace(" actived", "");
      this.className += " actived";
    });
  }
  const $ = document.querySelector.bind(document),
    $$ = document.querySelectorAll.bind(document);

  const titleContent = $$(".title-item"),
    boxContent = $$(".box-item");

  titleContent.forEach((title, index) => {
    const boxed = boxContent[index];
    title.onclick = function () {
      $(".title-item.active").classList.remove("active");
      $(".box-item.active").classList.remove("active");
      this.classList.add("active");
      boxed.classList.add("active");
    };
  });


  // for slider auto swiper 


//   <link
//   rel="stylesheet"
//   href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/11.0.5/swiper-bundle.css"
//   integrity="sha512-pmAAV1X4Nh5jA9m+jcvwJXFQvCBi3T17aZ1KWkqXr7g/O2YMvO8rfaa5ETWDuBvRq6fbDjlw4jHL44jNTScaKg=="
//   crossorigin="anonymous"
//   referrerpolicy="no-referrer"
// />
// <script
//   src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/11.0.5/swiper-bundle.min.js"
//   integrity="sha512-Ysw1DcK1P+uYLqprEAzNQJP+J4hTx4t/3X2nbVwszao8wD+9afLjBQYjz7Uk4ADP+Er++mJoScI42ueGtQOzEA=="
//   crossorigin="anonymous"
//   referrerpolicy="no-referrer"
// ></script>


// =========>>> use this link for we can make slide  slider auto swiper 

  var swiper = new Swiper(".cubeSwiper", {
    // effect: "cube",
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    autoplay: true,
    interval: 1000,
    grabCursor: true,
    pauseOnMouseEnter: true,
  });
  var swiper = new Swiper(".cubeSwiper2", {
    slidesPerView: 2,
    spaceBetween: 20,
    loop: true,
    autoplay: true,
    interval: 1000,
    grabCursor: true,
    pauseOnMouseEnter: true,
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });










//=================>  click button scroll to top
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");
  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function() {
      scrollFunction();
  };

  function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          scrollToTopBtn.style.display = "block";
      } else {
          scrollToTopBtn.style.display = "none";
      }
  }

  // When the user clicks on the button, scroll to the top of the document with animation
  function scrollToTop() {
      // Scroll to the top of the document with animation
      var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
          window.requestAnimationFrame(scrollToTop);
          window.scrollTo(0, currentScroll - (currentScroll / 8));
      }
  }
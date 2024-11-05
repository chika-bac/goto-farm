/*
ローディングから画面遷移
================================================ */
const loadingArea = document.querySelector("#loading");
const loadingContent = document.querySelector("#loading-content");

window.addEventListener("load", () => {
  loadingArea.animate(
    {
      opacity: [1, 0],
      visibility: "hidden",
    },
    {
      duration: 2000,
      delay: 800,
      easing: "ease",
      fill: "forwards",
    }
  );
  loadingContent.animate(
    [
      {
        opacity: 1,
        offset: 0.8,
      },
      {
        opacity: 0,
        offset: 1,
      },
    ],
    {
      duration: 1200,
      easing: "ease",
      fill: "forwards",
    }
  );
});

/*
ハンバーガーメニュー
================================================ */
const hamburgerMenu = () => {
  const navBtn = document.querySelector("#js-hamburger");
  const navMenu = document.querySelector("#js-global-menu");
  const navLinks = document.querySelectorAll(".js-link");

  const menuOptions = {
    duration: 300,
    easing: "ease",
    fill: "forwards",
  };

  const menuOpenAnim = () => {
    navMenu.animate(
      {
        opacity: [0, 1],
        visibility: ["hidden", "visible"],
      },
      menuOptions
    );
    document.body.classList.add("is-open");
    navMenu.setAttribute("aria-hidden", "false");
  };

  const menuCloseAnim = () => {
    navMenu.animate(
      {
        opacity: [1, 0],
        visibility: ["visible", "hidden"],
      },
      menuOptions
    );
    document.body.classList.remove("is-open");
    navMenu.setAttribute("aria-hidden", "true");
  };

  navBtn.addEventListener("click", function () {
    if (this.getAttribute("aria-expanded") === "false") {
      this.setAttribute("aria-expanded", "true");
      menuOpenAnim();
    } else {
      this.setAttribute("aria-expanded", "false");
      menuCloseAnim();
    }
  });

  // リンククリックでメニュー閉じる
  navLinks.forEach((navLink) => {
    navLink.addEventListener("click", () => {
      navBtn.setAttribute("aria-expanded", "false");
      menuCloseAnim();
    });
  });
};

hamburgerMenu();

/*
Swiper
================================================ */
const swiper = new Swiper(".swiper", {
  loop: true,
  loopAdditionalSlides: 1,
  speed: 1000,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },

  slidesPerView: 1.4, // 左右の画像を見切れて表示
  centeredSlides: true, // スライドを中央寄せで表示
  spaceBetween: 24,
  grabCursor: true,

  breakpoints: {
    500: {
      slidesPerView: 2.6,
    },
    1080: {
      slidesPerView: 4.6,
    },
  },
});

/*
アコーディオンメニュー
================================================ */
const accQuestion = document.querySelectorAll(".js-question");

accQuestion.forEach((question) => {
  let accAnswer = question.nextElementSibling;

  question.addEventListener("click", () => {
    question.classList.toggle("is-active");
    accAnswer.classList.toggle("is-open");
  });
});

/*
フォーム
================================================ */
const form = document.querySelector("#js-form");
const formBtn = document.querySelector("#js-form-btn");
const textArea = document.querySelector("#js-textarea");

const formUpdate = () => {
  const isRequired = form.checkValidity();

  if (isRequired) {
    formBtn.disabled = false;
    formBtn.style.opacity = 1;
    formBtn.style.cursor = "pointer";
    return;
  }
};

form.addEventListener("input", formUpdate);
form.addEventListener("change", formUpdate);
textArea.addEventListener("change", () => {
  if (this.value !== "") {
    formUpdate();
  } else {
    formBtn.disabled = true;
  }
});

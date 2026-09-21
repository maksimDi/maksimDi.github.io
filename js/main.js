(function () {
  'use strict';

  const burger = document.getElementById('burger');
  const nav = document.getElementById('nav');

  if (burger && nav) {
    burger.addEventListener('click', function () {
      burger.classList.toggle('is-open');
      nav.classList.toggle('is-open');
    });

    nav.querySelectorAll('.nav__link').forEach(function (link) {
      link.addEventListener('click', function () {
        burger.classList.remove('is-open');
        nav.classList.remove('is-open');
      });
    });
  }

  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Спасибо! Заявка отправлена. (Это макет — форма пока не подключена к серверу)');
      form.reset();
    });
  }

  const header = document.querySelector('.header');
  if (header) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 10) {
        header.style.boxShadow = '0 2px 8px rgba(0,0,0,0.06)';
      } else {
        header.style.boxShadow = 'none';
      }
    });
  }
})();

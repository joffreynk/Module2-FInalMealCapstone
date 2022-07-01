import './index.css';

import { homePage } from './modules/fetchData.js';

const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
  });
  navLinks.forEach((link, index) => {
    link.style.animation = 'navLinkFade o.5s ease forwards ${index /7 }s';
  });
};

navSlide();
homePage();

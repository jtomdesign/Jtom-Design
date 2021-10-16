'use strict';
//SELECTION ELEMENTS
const nav = document.querySelector('.nav');
const header = document.querySelector('.header');
const navbar = document.querySelector('.nav__links');
const allLinks = document.querySelectorAll('.nav__link');
const social = document.querySelectorAll('.socials');
const workAs = document.querySelector('.work');
const section1 = document.querySelector('.section_1');
const start = document.querySelector('.arrow__down');
const sections = document.querySelectorAll('.section');
const profil = document.querySelector('img[data-src]');

//hover
const hoverEffect = function (e, color) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('.logo');
    link.style.color = color;
    siblings.forEach((el) => {
      if (el !== link) {
        el.style.opacity = this;
      }
    });
    logo.style.opacity = this;
  }
};
nav.addEventListener('mouseover', hoverEffect.bind(0.3));
nav.addEventListener('mouseout', hoverEffect.bind(1));

//icons animations

const iconsScale = function (e, scale1, scale2) {
  if (e.target.classList.contains('icons')) {
    const icon = e.target;
    const otherIcons = icon.closest('.socials').querySelectorAll('.icons');

    otherIcons.forEach((ico) => {
      if (ico !== icon) {
        icon.style.transform = scale1;
        ico.style.transform = scale2;
      }
    });
  }
};
social.forEach((el) => {
  el.addEventListener('mouseover', (e) => {
    iconsScale(e, 'scale(1.7)', 'scale(0.8)');
  });
  el.addEventListener('mouseout', (e) => {
    iconsScale(e, 'scale(1)', 'scale(1)');
  });
});

//get started

const startSec1 = section1.getBoundingClientRect();

start.addEventListener('click', function () {
  section1.scrollIntoView({ behavior: 'smooth' });
});
const trackSec1 = function (entries) {
  const [entry] = entries;
  if (entry.isIntersecting) {
    start.style.opacity = 0;
  } else {
    start.style.opacity = 1;
  }
};

const observer = new IntersectionObserver(trackSec1, {
  root: null,
  threshold: 0.15,
});
observer.observe(section1);
//navbar

navbar.addEventListener('click', function (e) {
  e.preventDefault();
  const links = e.target;
  const other = links.closest('.nav').querySelectorAll('.nav__link');
  if (links.classList.contains('nav__link')) {
    other.forEach((el) => {
      if (el !== links) {
        el.classList.remove('isActive');
      } else {
        links.classList.add('isActive');
      }
    });
    const id = links.dataset.tab;

    const sections = document.querySelector(`#${id}`);
    sections.scrollIntoView({ behavior: 'smooth' });
  }
});
const trackNav = nav.getBoundingClientRect();
const sectionsObserve = function (entries) {
  const [entry] = entries;
  const links = document.querySelectorAll(`[data-tab]`);

  if (entry.isIntersecting) {
    links.forEach((ele) => {
      if (ele.dataset.tab === entry.target.getAttribute('id')) {
        ele.classList.add('isActive');
      } else {
        ele.classList.remove('isActive');
      }
    });

    entry.target.classList.remove('section__reveal');
  } else {
    links.forEach((ele) => {
      if (ele.dataset.tab === entry.target.getAttribute('id')) {
        ele.classList.remove('isActive');
      } else {
        ele.classList.remove('isActive');
      }
    });
  }
};
const secObserver = new IntersectionObserver(sectionsObserve, {
  root: null,
  threshold: 0.15,
  rootMargin: '100px',
});
sections.forEach((section) => {
  section.classList.add('section__reveal');
  secObserver.observe(section);
});

//nav sticky
const trackHeader = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    nav.style.backgroundColor = 'rgba(18, 18, 18, 0.9)';
  } else {
    nav.style.backgroundColor = '';
  }
};
const observeHeader = new IntersectionObserver(trackHeader, {
  root: null,
  threshold: 0.8,
});
observeHeader.observe(header);

//LAZY LOADING
const lazyTrack = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', () => {
    entry.target.classList.remove('lazy_img');
  });
};
const lazyObserve = new IntersectionObserver(lazyTrack, {
  root: null,
  threshold: 0,
});
lazyObserve.observe(profil);

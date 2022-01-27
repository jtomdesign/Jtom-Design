'use strict'
//SELECTION ELEMENTS
const nav = document.querySelector('.nav')
const header = document.querySelector('.header')
const navbar = document.querySelector('.nav__links')
const allLinks = document.querySelectorAll('.nav__link')
const social = document.querySelectorAll('.socials')
const workAs = document.querySelector('.work')
const section1 = document.querySelector('.section_1')
const start = document.querySelector('.arrow__down')
const sections = document.querySelectorAll('.section')
const profil = document.querySelector('img[data-src]')
const scrollTop = document.querySelector('.scrollTop')
const menu = document.querySelector('.menu')
const services = document.querySelectorAll('.service')
const tabs = document.querySelector('.tabs')
const pics = document.querySelector('.images')
const yearDate = document.querySelector('.date_text')
const current__date = document.querySelector('.today__date')

//scrollTop
scrollTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
})
//hover
const hoverEffect = function (e, color) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target
    const siblings = link.closest('.nav').querySelectorAll('.nav__link')
    const logo = link.closest('.nav').querySelector('.logo')
    link.style.color = color
    siblings.forEach((el) => {
      if (el !== link) {
        el.style.opacity = this
      }
    })
    logo.style.opacity = this
  }
}
nav.addEventListener('mouseover', hoverEffect.bind(0.3))
nav.addEventListener('mouseout', hoverEffect.bind(1))

//icons animations

const iconsScale = function (e, scale1, scale2) {
  if (e.target.classList.contains('icons')) {
    const icon = e.target
    const otherIcons = icon.closest('.socials').querySelectorAll('.icons')

    otherIcons.forEach((ico) => {
      if (ico !== icon) {
        icon.style.transform = scale1
        ico.style.transform = scale2
      }
    })
  }
}
social.forEach((el) => {
  el.addEventListener('mouseover', (e) => {
    iconsScale(e, 'scale(1.7)', 'scale(0.8)')
  })
  el.addEventListener('mouseout', (e) => {
    iconsScale(e, 'scale(1)', 'scale(1)')
  })
})

//get started

const startSec1 = section1.getBoundingClientRect()

start.addEventListener('click', function () {
  section1.scrollIntoView({ behavior: 'smooth' })
})
const trackSec1 = function (entries) {
  const [entry] = entries
  if (entry.isIntersecting) {
    start.style.opacity = 0
  } else {
    start.style.opacity = 1
  }
}

const observer = new IntersectionObserver(trackSec1, {
  root: null,
  threshold: 0.15,
})
observer.observe(section1)
//navbar

navbar.addEventListener('click', function (e) {
  e.preventDefault()
  const links = e.target
  const other = links.closest('.nav').querySelectorAll('.nav__link')
  if (links.classList.contains('nav__link')) {
    other.forEach((el) => {
      if (el !== links) {
        el.classList.remove('isActive')
      } else {
        links.classList.add('isActive')
      }
    })
    const id = links.dataset.tab

    const sections = document.querySelector(`#${id}`)
    sections.scrollIntoView({ behavior: 'smooth' })
  }
})
const trackNav = nav.getBoundingClientRect()
const sectionsObserve = function (entries) {
  const [entry] = entries
  const links = document.querySelectorAll(`[data-tab]`)

  if (entry.isIntersecting) {
    links.forEach((ele) => {
      if (ele.dataset.tab === entry.target.getAttribute('id')) {
        ele.classList.add('isActive')
      } else {
        ele.classList.remove('isActive')
      }
    })

    entry.target.classList.remove('section__reveal')
  }
}
const secObserver = new IntersectionObserver(sectionsObserve, {
  root: null,
  threshold: 0.2,
})
sections.forEach((section) => {
  section.classList.add('section__reveal')
  secObserver.observe(section)
})

//nav sticky
const trackHeader = function (entries, observer) {
  const [entry] = entries
  if (!entry.isIntersecting) {
    scrollTop.classList.remove('scroll_hide')
    nav.style.backgroundColor = 'rgba(18, 18, 18, 0.7)'
    nav.style.backdropFilter = 'blur(10px)'
  } else {
    nav.style.backgroundColor = ''
    nav.style.backdropFilter = 'blur(0)'
    scrollTop.classList.add('scroll_hide')
  }
}
const observeHeader = new IntersectionObserver(trackHeader, {
  root: null,
  threshold: 0.8,
})
observeHeader.observe(header)

//LAZY LOADING
const lazyTrack = function (entries, observer) {
  const [entry] = entries

  if (!entry.isIntersecting) return
  entry.target.src = entry.target.dataset.src

  entry.target.addEventListener('load', () => {
    entry.target.classList.remove('lazy_img')
  })
}
const lazyObserve = new IntersectionObserver(lazyTrack, {
  root: null,
  threshold: 0,
})

//MOBILE NAV
lazyObserve.observe(profil)
menu.addEventListener('click', () => {
  menu.classList.toggle('times')
  navbar.classList.toggle('hide')
})

//SERVICES

services.forEach((service) => {
  service.addEventListener('mouseover', () => {
    service.classList.add('hover_fx')
  })
  service.addEventListener('mouseout', () => {
    service.classList.remove('hover_fx')
  })
})

//PORTFOLIO

const images = [
  '<img src="./images/Image1.jpg" alt="image" class="imgs   art" />',
  '<img src="./images/Image2.jpg" alt="image" class="imgs  art" />',
  '<img src="./images/Image3.jpg" alt="image" class="imgs  art" />',
  '<img src="./images/Image4.jpg" alt="image" class="imgs  art" />',
  '<img src="./images/Image5.jpg" alt="image" class="imgs  art" />',
  '<img src="./images/Image6.jpg" alt="image" class="imgs  art" />',
  '<img src="./images/Logo1.jpg" alt="image" class="imgs  logos" />',
  '<img src="./images/Logo2.jpg" alt="image" class="imgs  logos" />',
  '<img src="./images/Logo3.jpg" alt="image" class="imgs  logos" />',
  '<img src="./images/logo4.jpg" alt="image" class="imgs  logos" />',
  '<img src="./images/logo5.jpg" alt="image" class="imgs  logos" />',
  '<img src="./images/logo6.jpg" alt="image" class="imgs  logos" />',
  '<img src="./images/logo7.png" alt="image" class="imgs  logos" />',
  '<img src="./images/logo8.png" alt="image" class="imgs  logos" />',
  '<img src="./images/poster1.jpg" alt="image" class="imgs  poster" />',
  '<img src="./images/poster2.jpg" alt="image" class="imgs  poster" />',
  '<img src="./images/web1.jpg" alt="image" class="imgs  web" />',
  '<img src="./images/web2.jpg" alt="image" class="imgs  web" />',
  '<img src="./images/cover1.jpg" alt="image" class="imgs  cover" />',
]
pics.insertAdjacentHTML('beforeend', images.join())
tabs.addEventListener('click', (e) => {
  pics.textContent = ''
  if (e.target.classList.contains('tab')) {
    const current = e.target
    const others = current.closest('.tabs').querySelectorAll('.tab')

    others.forEach((tab) => {
      if (tab !== current) {
        tab.classList.remove('current')
      } else {
        current.classList.add('current')
      }
    })
    const picture = images.filter((img) => {
      return img.includes(e.target.dataset.img)
    })
    const html = picture.join(' ')
    pics.insertAdjacentHTML('afterbegin', html)
  }
})

//Dates
setInterval(() => {
  const newDate = new Date()
  yearDate.textContent = newDate.getFullYear()
  const worldDate = new Intl.DateTimeFormat(navigator.language, {
    day: '2-digit',
    year: 'numeric',
    weekday: 'short',
    month: 'long',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  }).format(newDate)

  current__date.textContent = worldDate.replaceAll('/', '-')
}, 1000)

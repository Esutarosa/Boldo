// ============== MENU BURGER ============== //
const navMenu   = document.getElementById('nav-menu'), 
      navToggle = document.getElementById('nav-toggle'),
      navClose  = document.getElementById('nav-close')

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

// ============== REMOVE MENU BURGER ============== //
const navLink = document.querySelectorAll('.nav__link, .nav__button')

const linkAvtion = () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(e => e.addEventListener('click', linkAvtion))

// ============== CHANGE BACKGROUND HEADER ============== // 
const scrollHeader = () => {
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('bg-header')
                       : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)

// ============== SWIPER ============== // 
const aboutSwiper = new Swiper('.about__content', {
    slidesPerView: 'auto',
    centeredSlides: true,
    loop: true,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
})

// ============== FAQ INFO ============== // 
const faqItems = document.querySelectorAll('.faq__info-item')

faqItems.forEach((item) => {
    const faqHeader = item.querySelector('.faq__info-header')

    faqHeader.addEventListener('click', () => {
        const openItem = document.querySelector('.faq-open')

        toggleItem(item)

        if (openItem && openItem != item) {
            toggleItem( openItem )
        }
    })
})

const toggleItem = (item) => {
    const faqContent = item.querySelector('.faq__info-content')

    if (item.classList.contains('faq-open')) {
        faqContent.removeAttribute('style')
        item.classList.remove('faq-open')
    } else {
        faqContent.style.height = faqContent.scrollHeight + 'px'
        item.classList.add('faq-open')
    }
}

// ============== LOAD MORE ============== // 
const loadMoreBtn = document.getElementById('loadMoreBtn'),
      blogCard = document.querySelectorAll('.blog__card')

let visibleItem = 3

loadMoreBtn.addEventListener('click', () => {
    const totalItems = blogCard.length

    blogCard.forEach((block, index) => {
        if (index >= visibleItem && index < visibleItem + visibleItem) {
            block.classList.add('show-blogs')
        }
    })

    visibleItem += visibleItem

    if (visibleItem >= totalItems) {
        loadMoreBtn.style.display = 'none'
    }
})

// ============== SHOW SCROLL UP ============== // 
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)
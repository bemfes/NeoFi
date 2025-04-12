const body = document.querySelector('body');
window.addEventListener('load', () => {
    body.classList.remove('no-scroll')
})
const nav = document.querySelector('.nav');
const hmg = document.querySelector('.hamburger');
const navCloseBtn = document.querySelector('.nav__close');
overlay = document.querySelector('.overlay');
hmg.addEventListener('click', () => {
    nav.classList.add('nav_open')
    overlay.classList.remove('overlay_closed')
})
navCloseBtn.addEventListener('click', () => {
    overlay.classList.add('overlay_closed')
    nav.classList.remove('nav_open')
})
overlay.addEventListener('click', () => {
    nav.classList.remove('nav_open')
    overlay.classList.add('overlay_closed')
})

const navList = document.querySelector('.nav__list');
navList.addEventListener('click', (e) => {
    if (e.target.classList.contains('nav__link')) {
        e.preventDefault()
        const id = e.target.getAttribute('href')
        document.querySelector(id).scrollIntoView({behavior: 'smooth'})
        overlay.classList.add('overlay_closed')
        nav.classList.remove('nav_open')
    }
})

const faqItems = document.querySelectorAll('.faq__item');

faqItems.forEach(item => {
    item.addEventListener('click', () => {
        const answer = item.querySelector('.faq__answer')
        const verticalSpan = item.querySelector('.faq__span_vertical')
        if (answer.style.maxHeight) {
            answer.style.maxHeight = null
            item.setAttribute('aria-expanded', 'false')
            console.log(verticalSpan);
            verticalSpan.classList.remove('faq__span_click')
        } else {
            console.log('no height');
            answer.style.maxHeight = answer.scrollHeight + "px"
            item.setAttribute('aria-expanded', 'true')
            console.log(verticalSpan);
            verticalSpan.classList.add('faq__span_click')
        }
    })
    item.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const answer = item.querySelector('.faq__answer')
            const verticalSpan = item.querySelector('.faq__span_vertical')
            if (answer.style.maxHeight) {
                answer.style.maxHeight = null
                item.setAttribute('aria-expanded', 'false')
                console.log(verticalSpan);
                verticalSpan.classList.remove('faq__span_click')
            } else {
                console.log('no height');
                answer.style.maxHeight = answer.scrollHeight + "px"
                item.setAttribute('aria-expanded', 'true')
                console.log(verticalSpan);
                verticalSpan.classList.add('faq__span_click')
            }
        }
    })
})

new window.JustValidate('.sub-form', {
    messages: {
      email: {
        email: "Enter the correct email",
        required: "Enter an email",
      },
  
    },
    submitHandler: function(thisForm) {
    //   gifBox.classList.remove('gif__box_hidden')
    //   gifOverlay.classList.add('overlay_gif-opened')
    //   let formData = new FormData(thisForm);
  
    //   let xhr = new XMLHttpRequest();
  
      
    //   xhr.open('POST', 'mail.php', true);
    //   xhr.send(formData);
  
      thisForm.reset();
    //   gifBox.classList.add('gif__box_hidden')
    //   gifOverlay.classList.remove('overlay_gif-opened')
    //   modal.classList.remove('modal__hidden')
    //   overlay.classList.add('overlay_opened')
    }
  });
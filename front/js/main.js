
const playBtn = document.querySelector('.bonus__main-wheel-btn'),
      main = document.querySelector('.bonus__main'),
      chips = document.querySelectorAll('.bonus__chip'),
      popupChips = document.querySelectorAll('.bonus__overlay-chip'),

      wheel = document.querySelector('.bonus__main-wheel-reel'),
      overlay = document.querySelector('.bonus__overlay'),
      popupFirst = document.querySelector('.bonus__firstWin'),
      popupFirstBtn = document.querySelector('.bonus__firstWin-btn'),
      popupSecond = document.querySelector('.bonus__secondWin'),
      overflow = document.querySelector('body'),

      wrapper = document.querySelector('.bonus'),
      ellipseOne = document.querySelector('.bonus__main-wheel-ellipse-one'),
      ellipseTwo = document.querySelector('.bonus__main-wheel-ellipse-two')







let triesCounter = 0

playBtn.addEventListener('click', () => {

    if (triesCounter === 0) {
        runFirstRotation()

    } else {
        runSecondRotation()
    }
})

function runFirstRotation() {
    wheel.classList.add('reel-rotation-first')
    playBtn.classList.remove('pulse-btn')
    ellipseOne.classList.remove('pulse-btn')
    ellipseTwo.classList.remove('pulse-btn')
    playBtn.style.cursor = 'default'
    wrapper.style.pointerEvents = 'none'
    setTimeout(() => {
        doAfterFirstRotation()
    }, 6000)
    triesCounter++
}

function doAfterFirstRotation() {
    wheel.style.transform = 'rotate(992deg)'
    wheel.classList.remove('reel-rotation-first')
    overlay.classList.add('win-tab')
    overlay.classList.add('win-mob')
    displayPopup(popupFirst)
    wrapper.style.pointerEvents = 'auto'
    overflow.style.overflow = 'hidden'
    setTimeout(() => {
        playBtn.classList.add('pulse-btn')
        ellipseOne.classList.add('pulse-btn')
        ellipseTwo.classList.add('pulse-btn')
        playBtn.style.cursor = 'pointer'
    }, 1200)
}

function runSecondRotation() {
    wheel.classList.add('reel-rotation-second')
    playBtn.classList.remove('pulse-btn')
    ellipseOne.classList.remove('pulse-btn')
    ellipseTwo.classList.remove('pulse-btn')
    playBtn.style.cursor = 'default'
    overflow.style.overflow = 'hidden'
    wrapper.style.pointerEvents = 'none'
    setTimeout(() => {
        doAfterSecondRotation()
    }, 6000)
    triesCounter++
}

function doAfterSecondRotation() {
    overlay.classList.add('win-tab')
    overlay.classList.add('win-mob')
    displayPopup(popupSecond)
    wrapper.style.pointerEvents = 'auto'
}


popupFirstBtn.addEventListener('click', () => {
    main.classList.remove('blur')
    chips.forEach(function (el) {
        el.classList.remove('blur')
    })
    overlay.classList.add('opacity-overlay')
    popupFirst.classList.add('hide')
    overflow.style.overflow = 'unset'
    overlay.classList.remove('win-tab')
    overlay.classList.remove('win-mob')
})

function displayPopup(popup) {
    overlay.classList.remove('opacity-overlay')
    popup.classList.remove('hide')
    main.classList.add('blur')
    chips.forEach(function (el) {
        el.classList.add('blur')
    })
    popupChips.forEach(function (el) {
        el.classList.remove('hide')
    })
}


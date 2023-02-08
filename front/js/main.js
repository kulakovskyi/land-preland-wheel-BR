
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

(function () {
    var url = new URL(window.location.href);
    var params = ['l', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'param1', 'param2'];
    var linkParams = ['affid', 'cpaid']; // ищем в url redirectUrl в url:

    if (url.searchParams.has('redirectUrl')) {
        var redirectUrl = new URL(url.searchParams.get('redirectUrl'));

        if (redirectUrl.href.match(/\//g).length === 4 && redirectUrl.searchParams.get('l')) {
            //если ссылка в ссылка redirectUrl корректная
            localStorage.setItem('redirectUrl', redirectUrl.href); // указываем точкой входа домен с протоколом из redirectUrl
        }
    } /////////


    params.forEach(function (param) {
        if (url.searchParams.has(param)) localStorage.setItem(param, url.searchParams.get(param));
    });
    linkParams.forEach(function (linkParam) {
        if (url.searchParams.has(linkParam)) localStorage.setItem(linkParam, url.searchParams.get(linkParam));
    });
    window.addEventListener('click', function (e) {
        var link,
            parent = e.target.closest('a');

        if (parent.getAttribute('href') !== 'https://tds.favbet.partners') {
            return;
        }

        parent && (e.preventDefault(),
            localStorage.getItem("redirectUrl")
                ? link = new URL(localStorage.getItem("redirectUrl"))
                : (link = new URL(parent.href),
                    affid = localStorage.getItem('affid'),
                    cpaid = localStorage.getItem('cpaid'),
                affid && cpaid && (link.pathname = '/' + affid + '/' + cpaid)), params.forEach(function (param)
        {
            url.searchParams.has(param) && link.searchParams.set(param, localStorage.getItem(param));
        }), document.location.href = link);
    });
})();


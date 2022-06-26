// Start writing JavaScript here!


const carousel = document.querySelector('.carousel')
const previousButton = carousel.querySelector('.previous-button')
const nextButton = carousel.querySelector('.next-button')

const contents = carousel.querySelector('.carousel_contents')

nextButton.addEventListener('click', event => {
    const currentSlide = contents.querySelector('.is-selected')
    const nextSlide = currentSlide.nextElementSibling
    const destination = getComputedStyle(nextSlide).left
    
    contents.style.left = `-${destination}`
    currentSlide.classList.remove('is-selected')
    nextSlide.classList.add('is-selected')
    previousButton.removeAttribute('hidden')

    if (!nextSlide.nextElementSibling) {
        nextButton.setAttribute('hidden', true)
    }
})

previousButton.addEventListener('click', event => {
    const currentSlide = contents.querySelector('.is-selected')
    const previousSlide = currentSlide.previousElementSibling
    const destination = getComputedStyle(previousSlide).left

    contents.style.left =`-${destination}`
    currentSlide.classList.remove('is-selected')
    previousSlide.classList.add('is-selected')
    nextButton.removeAttribute('hidden')

    if (!previousSlide.previousElementSibling) {
        previousButton.setAttribute('hidden', true)
    }
    
})

const slides = Array.from(carousel.querySelectorAll('.carousel_slide'))

const dots = Array.from(carousel.querySelectorAll('.carousel_dot'))

dots.forEach(dot => {
    dot.addEventListener('click', event => {


        let clickedDotIndex

        for (let index = 0; index < dots.length; index++) {
            if (dots[index] === dot) {
                clickedDotIndex = index
            }
        }
       

        const slideToShow = slides[clickedDotIndex]
        const destination = getComputedStyle(slideToShow).left
        
        contents.style.left = `-${destination}`

        dots.forEach(d => {
            d.classList.remove('is-selected')

        slides.forEach(slide => {
            slide.classList.remove('.is-selected')
        })

        dot.classList.add('is-selected')
        slideToShow.classList.add('.is-selected')

        //show-hide buttons wrt dots

        if (clickedDotIndex === 0) {
            previousButton.setAttribute('hidden', true)
            nextButton.removeAttribute('hidden')
        } else if (clickedDotIndex === dots.length - 1) {
            previousButton.removeAttribute('hidden')
            nextButton.setAttribute('hidden', true)
        } else {
            previousButton.removeAttribute('hidden')
            nextButton.removeAttribute('hidden')
        }
        })
    
    })
})


const dotsContainer = carousel.querySelector('.carousel_dots')

nextButton.addEventListener('click', event => {
    const currentDot = dotsContainer.querySelector('.is-selected')
    const nextDot = currentDot.nextElementSibling
    currentDot.classList.remove('is-selected')
    nextDot.classList.add('is-selected')
})

previousButton.addEventListener('click', event => {
    const currentDot = dotsContainer.querySelector('.is-selected')
    const previousDot = currentDot.previousElementSibling
    currentDot.classList.remove('is-selected')
    previousDot.classList.add('is-selected')
})
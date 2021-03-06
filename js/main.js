
//Switching slides with JS by next and previous button



const carousel = document.querySelector('.carousel')
const previousButton = carousel.querySelector('.previous-button')
const nextButton = carousel.querySelector('.next-button')

const contents = carousel.querySelector('.carousel_contents')

function switchSlide(currentSlide, targetSlide) {
    const destination = getComputedStyle(targetSlide).left
    contents.style.transform = `translateX(-${destination})`  //Understand this//
    currentSlide.classList.remove('is-selected')
    targetSlide.classList.add('is-selected')

}

nextButton.addEventListener('click', event => {
    const currentSlide = contents.querySelector('.is-selected')
    const nextSlide = currentSlide.nextElementSibling
    
    //Show next slide
    switchSlide(currentSlide, nextSlide)

    //Show previous slide
    previousButton.removeAttribute('hidden')

    //Hides next button
    if (!nextSlide.nextElementSibling) {
        nextButton.setAttribute('hidden', true)
    }
})

previousButton.addEventListener('click', event => {
    const currentSlide = contents.querySelector('.is-selected')
    const previousSlide = currentSlide.previousElementSibling
    
    //Show previous slide
    switchSlide(currentSlide, previousSlide)
    
    //Shows next button
    nextButton.removeAttribute('hidden')

    //Hides previous button
    if (!previousSlide.previousElementSibling) {
        previousButton.setAttribute('hidden', true)
    }
    
})

// Connecting slides with dots 

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
        
        contents.style.transform =`translateX(-${destination})`

        dots.forEach(d => {
            d.classList.remove('is-selected')

        slides.forEach(slide => {
            slide.classList.remove('is-selected')
        })

        dot.classList.add('is-selected')
        slideToShow.classList.add('is-selected')

       

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
 
//show-hide buttons wrt dots
const dotsContainer = carousel.querySelector('.carousel_dots')

function heighlightDot (currentDot, targetDot) {
    currentDot.classList.remove('is-selected')
    targetDot.classList.add('is-selected')
}

nextButton.addEventListener('click', event => {
    //Heighlight dot
    const currentDot = dotsContainer.querySelector('.is-selected')
    const nextDot = currentDot.nextElementSibling
    
    heighlightDot(currentDot, nextDot)
})
    
previousButton.addEventListener('click', event => {
    //Heighlight dot
    const currentDot = dotsContainer.querySelector('.is-selected')
    const previousDot = currentDot.previousElementSibling
    
    heighlightDot(currentDot, previousDot)
})


// Setting slides with javaScript for responsive design

function setSlidePosition () {
    const slideWidth = slides[0].getBoundingClientRect().width

    // slides[0].style.left = slideWidth*0 +'0px'
    // slides[1].style.left = slideWidth*1 + 'px'
    // slides[2].style.left = slideWidth*2 + 'px' or use forEach loop
    
    slides.forEach((slide, index) => {
        slide.style.left = slideWidth*index + 'px'
    })
}
setSlidePosition()
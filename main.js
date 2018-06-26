window.addEventListener('scroll', function (event) {
    //console.log(event)

    //console.log(window.pageYOffset)
    document.querySelector('.hero-logo').style.paddingTop = ( 150 + window.pageYOffset * 0.5) +'px'
    //document.querySelector('.hero').style.backgroundPositionX = (window.pageYOffset * 1) +'px'

})


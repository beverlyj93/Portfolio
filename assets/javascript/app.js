$('.container-img').click(() => {
    $('html, body').animate({
        scrollTop: $('.projects').offset().top,
        scrollLeft: 0
    }, 500);
})

function viewResume() {
    window.open("https://www.dropbox.com/s/ajiktrc6w6vclsk/Resume.pdf?dl=0");
}
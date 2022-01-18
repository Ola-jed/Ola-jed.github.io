const originalBG = '#000000';

const showHighlightEffect = function (element) {
    const x = element.pageX - this.offsetLeft;
    const y = element.pageY - this.offsetTop;
    const xy = `${x} ${y}`;
    const from = '#621aa4';
    const to = '#000000';
    this.style.background = `-webkit-gradient(radial, ${xy}, 0, ${xy}, 50, from(${from}), to(${to})), ${originalBG}`;
};

const removeHighlightEffect = function () {
    this.style.background = originalBG;
};

document.querySelectorAll('.project-container, .icon').forEach(function (element) {
    element.addEventListener('mousemove', showHighlightEffect);
    element.addEventListener('mouseleave', removeHighlightEffect);
});

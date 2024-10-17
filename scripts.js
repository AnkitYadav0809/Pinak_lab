function rotateCard(element) {
    anime({
        targets: element,
        rotateY: '360deg',
        duration: 1000,
        easing: 'easeInOutQuad'
    });
}

function resetCard(element) {
    anime({
        targets: element,
        rotateY: '0deg',
        duration: 1000,
        easing: 'easeInOutQuad'
    });
}

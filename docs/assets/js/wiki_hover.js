const blogURL = location.origin = location.protocol + '//' + location.host;
const template = document.querySelector(`.md-content a[href^="${blogURL}]"`)
let position = ['top', 'right', 'bottom', 'left'];

const tip = tippy(`.md-content a[href^="${blogURL}"]`, {
    content:'',
    allowHTML: true,
    animation: 'scale-subtle',
    theme: 'translucent',
    followCursor: true,
    arrow: false,
    placement: position[Math.floor(Math.random() * position.length)],
    onShow(instance) {
        fetch(instance.reference.href)
            .then(response => response.text())
            .then(html => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, 'text/html');
                const firstPara = doc.querySelector('article');
                const element1 = document.querySelector(`[id^="tippy"]`);
                element1.classList.add('tippy')
                instance.setContent(firstPara);
            })
            .catch(error => {
                console.log(error);
                instance.setContent('Error');
            });
    }
});


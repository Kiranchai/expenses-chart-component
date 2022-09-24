import data from './data.json' assert {type: 'json'};
const chartContainerHeight = document.querySelector('.chart-bars-container').offsetHeight;
const onHoverContainer = document.getElementById('on-hover-container');
const cyanColor = 'hsl(186, 34%, 60%)';

let sum = 0;

data.forEach(day => {
    sum += day.amount;
})

data.forEach(day => {
    const bar = document.getElementById(`bar-${day.day}`);
    let barHeight = day.amount * chartContainerHeight / sum *3;
    if (barHeight > 150) barHeight = 150;
    bar.style.height = barHeight+'px';
    bar.style.marginTop = (chartContainerHeight-barHeight)+'px';

    bar.addEventListener('mouseenter', e => {

        let barTop = bar.getBoundingClientRect().top;
        let barLeft = bar.getBoundingClientRect().left;
        let barWidth = bar.offsetWidth;

        onHoverContainer.innerText = `$${day.amount}`;
        onHoverContainer.style.top = + (barTop-30)+'px';
        onHoverContainer.style.left =  (barLeft+barWidth/2)+'px';
        onHoverContainer.style.opacity = 1;
    })

    bar.addEventListener('mouseleave', e => {
        onHoverContainer.style.opacity = 0;
    })
})

const today = new Date().getDay();
document.getElementById(`bar-${data[today-1].day}`).style.backgroundColor = cyanColor;
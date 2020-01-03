
const secondHand = document.querySelector(`.second-hand`);
const minHand = document.querySelector(`.min-hand`);

function setDate() {
    const now = new Date();
    // get seconds and rotate hand 
    const seconds = now.getSeconds();
    const secondsDegrees = (seconds / 60) * 360 + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg`;

        // get seconds and rotate hand 

    const mins = now.getMinutes();
    const minDegrees = (mins / 60) * 360 + 90;
    minHand.style.transform = `rotate(${minDegrees}deg)`;

    // hour
    const hour = now.getHours();
    const hoursDegrees = (hour/12) * 360 + 90;
    hoursDegrees.style.transform = `rotate(${minDegrees}deg)`;


    //console.log(seconds);
}

setInterval(setDate, 1000);

/// 1 s how many degree;
// 360 / 60 = 6 deg
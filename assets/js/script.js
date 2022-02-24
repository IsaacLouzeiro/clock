setInterval(() => {
    const d = new Date();
    const h = d.getHours();
    const m = d.getMinutes();
    const s = d.getSeconds();

    // digital time
    const hourDegrees = (h / 12) * 360 + (m / 60) * 30 + 90;
    const minsDegrees = (m / 60) * 360 + (s / 60) * 6 + 90;
    const secondsDegrees = (s / 60) * 360 + 90;
    document.getElementById('hour').innerHTML = `${`${h}:${m}:${s}`}`;

    // analog time
    document.getElementById('dashHour').style.transform = `rotate(${hourDegrees}deg)`;
    document.getElementById('dashMinutes').style.transform = `rotate(${minsDegrees}deg)`;
    document.getElementById('dashSeconds').style.transform = `rotate(${secondsDegrees}deg)`;
}, 1000);
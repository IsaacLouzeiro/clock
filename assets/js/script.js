setInterval(() => {
    // get Time
    const d = new Date();
    const h = d.getHours();
    const m = d.getMinutes();
    const s = d.getSeconds();

    // digital time
    const hDeg = (h / 12) * 360 + (m / 60) * 30 + 90;
    const mDeg = (m / 60) * 360 + (s / 60) * 6 + 90;
    const sDeg = (s / 60) * 360 + 90;
    document.getElementById('hour').innerHTML = `${`${h}:${m}:${s}`}`;

    // analog time
    document.getElementById('dashHour').style.transform = `rotate(${hDeg}deg)`;
    document.getElementById('dashMinutes').style.transform = `rotate(${mDeg}deg)`;
    document.getElementById('dashSeconds').style.transform = `rotate(${sDeg}deg)`;
}, 1000);
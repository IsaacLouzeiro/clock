
setInterval(() => {
    const d = new Date();
    let time = d.getTime();
    const h = d.getHours();
    const m = d.getMinutes();
    const s = d.getSeconds();
    document.getElementById('hour').innerHTML = `${h +':'+m+':'+s}`;
}, 1000);
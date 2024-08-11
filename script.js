setInterval(tempo, 100);


function tempo() {
    let time = new Date();
    let hora = time.getHours();
    let min = time.getMinutes();
    let seg = time.getSeconds();
    let am_pm = " AM";

    if (hora >= 12) {
        if (hora > 12) hora -= 12;
        am_pm = " PM";
    } else if (hora == 0) {
        hr = 12;
        am_pm = " AM";
    }

    hora = 
        hora < 10 ? "0" + hora : hora;
    min = min < 10 ? "0" + min : min;
    seg = seg < 10 ? "0" + seg : seg;

    let horario_atual =
        hora + ":" + min + ":" + seg + am_pm;

        document.getElementById("relogio").innerHTML = horario_atual;
}
    tempo();


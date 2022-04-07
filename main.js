function timer() {
    const time = document.querySelector('.timer__time');
    const start = document.querySelector('.timer_start');
    const pause = document.querySelector('.timer_pause');
    const restart = document.querySelector('.timer_restart');
    const seconds = document.querySelector('.time__seconds');
    const minutes = document.querySelector('.time__minutes');
    const hours = document.querySelector('.time_hours');
    let segundos = 0;
    let minutos = 0;
    let horas = 0;
    document.addEventListener('click', (e) => {
        const el = e.target;
        
        if (el.classList.contains('timer_start')) {
            control = setInterval(init, 1000);
            start.disabled = true;
            pause.disabled = false;
            restart.disabled = false;
            start.innerHTML = 'Start'
            time.classList.remove('paused');
        }
        if (el.classList.contains('timer_pause')) {
            clearInterval(control);
            pause.classList.add('paused');
            start.disabled = false;
            pause.disabled = true;
            start.innerHTML = 'Continue';
            time.classList.add('paused');
        }
        if (el.classList.contains('timer_restart')) {
            clearInterval(control);
            segundos = 0;
            minutos = 0;
            horas = 0;
            start.innerHTML = 'Start';
            hours.innerHTML = '0' + 0;
            minutes.innerHTML = '0' + 0;
            seconds.innerHTML = '0' + 0;
            start.disabled = false;
            pause.disabled = true;
            restart.disabled = true;
            time.classList.remove('paused');
        }
    })
    function init() {
        if (segundos < 10)  {
            seconds.innerHTML = '0' + segundos++;
        } else {
            seconds.innerHTML = segundos++;
        };
        if (segundos > 59) {
            segundos = 0;
            minutos += 1;
            if (minutos < 10) {
                minutes.innerHTML = '0' + minutos;
            } else {
                minutes.innerHTML = minutos;
            }
        }
        if (minutos > 59) {
            minutos = 0;
            horas += 1;
            if (horas < 10) {
                hours.innerHTML = '0' + horas;
            } else {
                hours.innerHTML = horas;
            }
        }
        if (horas > 23) {
            horas = 0;
        }
    }
}
timer();
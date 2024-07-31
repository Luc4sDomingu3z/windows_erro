function rand(min = 0, max = 100) {
    const r = Math.floor(Math.random() * (max - min) + min)
    console.log(r);
    return r
}

function percent(key = false, element, sufixo = "%") {
    const status = element

    if (status == null) return false;

    if (!key) {
        setTimeout(() => {
            status.textContent = rand() + sufixo
            setInterval(() => {
                status.textContent = rand() + sufixo
            }, rand(3000, 80000))
        }, 4000)
    } else {

    }
}

const t1 = document.getElementById('t1')
const t2 = document.getElementById('t2')

setInterval(() => {
    setTimeout(() => {
        t1.classList.toggle('hidden')
        setTimeout(() => {
            t2.classList.toggle('hidden')
        }, 0);
    }, 4000)
}, 6000);

percent(false, document.getElementById('status'))
percent(false, document.getElementById('status-2'), "% complete")
function getTimeFromsec(segundos){
const data = new Date(segundos * 1000);
return data.toLocaleTimeString('pt-BR', {
    hour12: false,
    timeZone: 'UTC'
});
}


const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const Zerar = document.querySelector('.Zerar');
let segundos = 0;
let timer;

function iniciarelogio() {
     timer = setInterval(function(){
        segundos++;
        relogio.innerHTML = getTimeFromsec(segundos) 
    },1000)
}

iniciar.addEventListener('click', function(event) {
    relogio.classList.remove('pausado')
    clearInterval(timer);
    iniciarelogio();
}) 

pausar.addEventListener('click', function(event) {
    relogio.classList.add('pausado')
    clearInterval(timer);
}) 

Zerar.addEventListener('click', function(event) {
relogio.classList.remove('pausado')
clearInterval(timer);
relogio.innerHTML = '00:00:00'
segundos = 0
}) 



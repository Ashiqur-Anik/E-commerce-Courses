const icon = document.getElementById('icon');
const textcolor = document.getElementsByClassName('text-color');
const cardColor = document.getElementsByClassName('card');

icon.addEventListener('click', () => {
    if (document.body.classList.contains('darkmode')) {
        lightMode()
    }
    else {
        darkMode();
    }
})

function darkMode() {
    icon.classList.replace('bi-sun-fill', 'bi-moon-fill');
    document.body.classList.add('darkmode')
    for (let i of textcolor) {
        i.style.color = 'white'
    }
    for(let i of cardColor){
        i.style.backgroundColor = 'rgb(146, 146, 146)'
    }
}
function lightMode() {
    icon.classList.replace('bi-moon-fill', 'bi-sun-fill')
    document.body.classList.remove('darkmode');
    for(let i of textcolor){
        i.style.color = 'black'
    }
    for(let i of cardColor){
        i.style.backgroundColor = 'rgb(209, 232, 253)'
    }
}

window.addEventListener('scroll',reveal);

function reveal(){
    const reveal = document.querySelectorAll('.reveal');

    for(let i = 0; i<reveal.length;i++){
        const windowHeight = window.innerHeight;
        const windowTop = reveal[i].getBoundingClientRect().top;
        if(windowTop<windowHeight){
            reveal[i].classList.add('active')
        }
        else{
            reveal[i].classList.remove('active')
        }
    }
}
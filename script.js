const iconMenu = document.querySelector('#iconmenu'),
menu = document.querySelector('#menu');

iconMenu.addEventListener('click', (e) => {
    menu.classList.toggle('active');
    document.body.classList.toggle('opacity');

    const rutaAct = e.target.getAttribute('src');

    if (rutaAct == './img/open-menu.png') {
        e.target.setAttribute('src', './img/close-menu2.png');
    } else {
        e.target.setAttribute('src', './img/open-menu.png')
    }
});



const bdark = document.querySelector('#bdark')
const body = document.querySelector('body');

load();

bdark.addEventListener('click', e => {
    body.classList.toggle('darkmode');
    store(body.classList.contains('darkmode'));
})

function load(){
    const dm = localStorage.getItem('darkmode');

    if (!dm) {
        store('false');
    }else if (dm == 'true') {
        body.classList.add('darkmode');
    }
} 

function store(value){
    localStorage.setItem('darkmode', value)
} 



function moreInfo() {
    var plus = document.querySelector('.moreInfo');
    plus.classList.toggle("moreInfoshow")
}

function moreInfo2() {
    var plus = document.querySelector('.moreInfo2');
    // var plustxt = document.getElementById("plustxt")
    plus.classList.toggle("moreInfoshow")

//     if (plus.style.display === "none") {
//         plustxt.innerHTML = "+";
//     } else if (plus.style.display === "block"){
//         plustxt.innerHTML = "-";
//     }
}

function moreInfo3() {
    var plus = document.querySelector('.moreInfo3');
    plus.classList.toggle("moreInfoshow")
}

function gameInfo1() {
    var plus = document.querySelector('.gameInfo1');
    plus.classList.toggle("lessInfoshow")
}

function gameInfo2() {
    var plus = document.querySelector('.gameInfo2');
    plus.classList.toggle("moreInfoshow")
}
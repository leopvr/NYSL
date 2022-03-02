var screenVW = window.matchMedia("(orientation: portrait)")
// var screenVH = window.matchMedia("(orientation: landscape)")

window.addEventListener('resize', horScreen);

function horScreen(p1) {

    if (document.getElementById('tbody1') != undefined) {

        if (p1.matches) {
            // console.log(p1.matches);

            data[0].games.forEach(element => {
                let tr = document.createElement("tr");
                tr.innerHTML =
                    `<td style="width: 80px;">${element.day}</td>
        <td>${element.vsName} <br> <a href="${element.location.linkGM}">${element.location.name}</a></td>
        <td style="width: 80px;">${element.times}</td>`;
                document.getElementById("tbody1").appendChild(tr);
            });


            data[1].games.forEach(element => {
                let tr = document.createElement("tr");
                tr.innerHTML =
                    `<td style="width: 80px;">${element.day}</td>
        <td>${element.vsName} <br> <a href="${element.location.linkGM}">${element.location.name}</a></td>
        <td style="width: 80px;">${element.times}</td>`;
                document.getElementById("tbody2").appendChild(tr);
            });

        } else {
            // console.log(p1.matches);

            document.getElementById("ulH").innerHTML = ' ';
            document.getElementById("ulH2").innerHTML = ' ';


            data[0].games.forEach(function (element) {
                // console.log(index)
                let ilH = document.createElement("button");
                ilH.classList.add('bar');

                ilH.innerHTML = `${element.vsName}`

                document.getElementById("ulH").appendChild(ilH);
                
            })

            document.getElementById('ulH').addEventListener("click", function(e){
                const seleccionado = [...this.children]
                .filter(el => el.className.indexOf('bar') > -1)
                .indexOf(e.target);
         

              if (seleccionado > -1) {
                // seleccionado.style.backgroundColor = "red";

                console.log(`position index: ${seleccionado}`);

                document.getElementById('infoH').innerHTML = ' ';

                function createInfo(s) {
                    let ulH = document.createElement("div");              
                    ulH.innerHTML = `<div class="infoT">
                    <div class="d-flex flex-column justify-content-center">
                        <p>Day:</p>
                        <p style="color: orange;">${data[0].games[s].day}</p>
                    </div>
                    <div>
                        <p>Times:</p>
                        <p style="color: orange;">${data[0].games[s].times}</p>
                    </div>
                    <div>
                        <p>Location:</p>
                        <p style="color: orange;">${data[0].games[s].location.name}</p>
                    </div>
                </div>
    
                <div class="d-flex justify-content-center">
                    <iframe class="Imap" style="box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;"
                        src="${data[0].games[s].location.Iframe}">
                    </iframe>
                </div>`
                    document.getElementById('infoH').appendChild(ulH);
                    ulH.classList.add('acomodo');
                }
                createInfo(seleccionado);

              } else {

                  console.log("Nada");

              }
            });

            data[1].games.forEach(function (element) {
                // console.log(index)
                let ilH = document.createElement("button");
                ilH.classList.add('bar');

                ilH.innerHTML = `${element.vsName}`

                document.getElementById("ulH2").appendChild(ilH);
                
            })

            document.getElementById('ulH2').addEventListener("click", function(e){
                const seleccionado = [...this.children]
                .filter(el => el.className.indexOf('bar') > -1)
                .indexOf(e.target);
         

              if (seleccionado > -1) {

                console.log(`position index: ${seleccionado}`);

                document.getElementById('infoH2').innerHTML = ' ';

                function createInfo(s) {
                    let ulH = document.createElement("div");              
                    ulH.innerHTML = `<div class="infoT">
                    <div class="d-flex flex-column justify-content-center">
                        <p>Day:</p>
                        <p style="color: orange;">${data[1].games[s].day}</p>
                    </div>
                    <div>
                        <p>Times:</p>
                        <p style="color: orange;">${data[1].games[s].times}</p>
                    </div>
                    <div>
                        <p>Location:</p>
                        <p style="color: orange;">${data[1].games[s].location.name}</p>
                    </div>
                </div>
    
                <div class="d-flex justify-content-center">
                    <iframe class="Imap" style="box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;"
                        src="${data[1].games[s].location.Iframe}">
                    </iframe>
                </div>`
                    document.getElementById('infoH2').appendChild(ulH);
                    ulH.classList.add('acomodo');
                }
                createInfo(seleccionado);

              } else {

                  console.log("Nada");

              }
            });

        }
    }
}
horScreen(screenVW)


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

function load() {
    const dm = localStorage.getItem('darkmode');

    if (!dm) {
        store('false');
    } else if (dm == 'true') {
        body.classList.add('darkmode');
    }
}

function store(value) {
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
}

function moreInfo3() {
    var plus = document.querySelector('.moreInfo3');
    plus.classList.toggle("moreInfoshow")
}

// function gameInfo1() {
//     var plus = document.querySelector('.gameInfo1');
//     plus.classList.toggle("lessInfoshow")
// }

// function gameInfo2() {
//     var plus = document.querySelector('.gameInfo2');
//     plus.classList.toggle("moreInfoshow")
// }
let menu = document.querySelector('.menu')
let frases = document.querySelector('.frases')
let imagem = document.querySelector('.home-img')

setTimeout(() => {
    frases.style.transition = 'all 1s'
    frases.style.opacity = '1'
    frases.style.transform = 'transform: translateY(0px);'
}, 1500);

setTimeout(() => {
    imagem.style.transition = 'all 1s'
    imagem.style.opacity = '1'
    imagem.style.transform = 'transform: translateY(0px);'
}, 2000);
setTimeout(() => {
    menu.style.transition = 'all 2s'
    menu.style.opacity = '1'
}, 2500);


/*CANAL DE OFERTAS*/
let canal = document.querySelector('#canal')
let fechar = document.querySelector('#fechar-c')
fechar.addEventListener('click', fecharCanal)

setTimeout(() => {
    canal.style.display = 'flex'
}, 5000);

function fecharCanal(){
    canal.style.display = 'none'
}


/*MENU HAMBURGUER*/
let secaoMenu = document.querySelector('#menu-open')
let menuHamburguer = document.querySelector('.menu-h')
let fecharMenu = document.querySelector('#fechar-m')
menuHamburguer.addEventListener('click', abrirMenu)
fecharMenu.addEventListener('click', fecharM)

function abrirMenu(){
    secaoMenu.style.display = 'flex'
}
function fecharM(){
    secaoMenu.style.display = 'none'
}


//DIVISÕES
let One = document.querySelector('#one')
let Two = document.querySelector('#two')
let Three = document.querySelector('#three')
let Four = document.querySelector('#four')
let Five = document.querySelector('#five')

//SETAS
let sd1 = document.querySelector('#sd1')
let sd2 = document.querySelector('#sd2')
let sd3 = document.querySelector('#sd3')
let sd4 = document.querySelector('#sd4')
let se1 = document.querySelector('#se1')
let se2 = document.querySelector('#se2')
let se3 = document.querySelector('#se3')
let se4 = document.querySelector('#se4')

//INDICADORES DE TROCA
let i1 = document.querySelector('.b1')
let i2 = document.querySelector('.b2')
let i3 = document.querySelector('.b3')
let i4 = document.querySelector('.b4')
let i5 = document.querySelector('.b5')

sd1.addEventListener('click', mudarA)
sd2.addEventListener('click', mudarB)
sd3.addEventListener('click', mudarC)
sd4.addEventListener('click', mudarD)
se1.addEventListener('click', mudarE)
se2.addEventListener('click', mudarF)
se3.addEventListener('click', mudarG)
se4.addEventListener('click', mudarH)

function mudarA(){
    //SAIDAS
    One.style.transition = 'all 0.5s ease-in-out';
    One.style.zIndex = '-1'
    One.style.opacity = '0'
    One.style.position = 'absolute'

    //ENTRADAS
    Two.style.transition = 'all 0.5s ease-in-out';
    Two.style.zIndex = '1'
    Two.style.opacity = '1'
    Two.style.position = 'static'

    //SETAS
    sd1.style.display = 'none'
    sd2.style.display = 'flex'
    se1.style.display = 'flex'

    //INDICADORES
    i1.style.backgroundColor = 'transparent'// saida
    i1.style.border = '1px solid #E39224' 
    i2.style.backgroundColor = '#E39224' // entrada
}

function mudarB(){
    //SAIDAS
    Two.style.zIndex = '-1'
    Two.style.opacity = '0'
    Two.style.position = 'absolute'

    //ENTRADAS
    Three.style.transition = 'all 0.5s ease-in-out'
    Three.style.zIndex = '1'
    Three.style.opacity = '1'
    Three.style.position = 'static'

    //SETAS
    sd2.style.display = 'none'
    se1.style.display = 'none'
    sd3.style.display = 'flex'
    se2.style.display = 'flex'

    //INDICADORES
    i2.style.backgroundColor = 'transparent'// saida
    i2.style.border = '1px solid #E39224' 
    i3.style.backgroundColor = '#E39224' // entrada
}

function mudarC(){
    //SAIDAS
    Three.style.zIndex = '-1'
    Three.style.opacity = '0'
    Three.style.position = 'absolute'

    //ENTRADAS
    Four.style.transition = 'all 0.5s ease-in-out';
    Four.style.zIndex = '1'
    Four.style.opacity = '1'
    Four.style.position = 'static'

    //SETAS
    se2.style.display = 'none'
    sd3.style.display = 'none'
    se3.style.display = 'flex'
    sd4.style.display = 'flex'

    //INDICADORES
    i3.style.backgroundColor = 'transparent'// saida
    i3.style.border = '1px solid #E39224' 
    i4.style.backgroundColor = '#E39224' // entrada
}

function mudarD(){
    //SAIDAS
    Four.style.zIndex = '-1'
    Four.style.opacity = '0'
    Four.style.position = 'absolute'

    //ENTRADAS
    Five.style.transition = 'all 0.5s ease-in-out';
    Five.style.zIndex = '1'
    Five.style.opacity = '1'
    Five.style.position = 'static'

    //SETAS
    se3.style.display = 'none'
    sd4.style.display = 'none'
    se4.style.display = 'flex'

    //INDICADORES
    i4.style.backgroundColor = 'transparent'// saida
    i4.style.border = '1px solid #E39224' 
    i5.style.backgroundColor = '#E39224' // entrada
}

function mudarE(){
    //SAIDAS
    Two.style.zIndex = '-1'
    Two.style.opacity = '0'
    Two.style.position = 'absolute'

    //ENTRADAS
    One.style.zIndex = '1'
    One.style.opacity = '1'
    One.style.position = 'static'

    //SETAS
    se1.style.display = 'none'
    sd2.style.display = 'none'
    sd1.style.display = 'flex'

    //INDICADORES
    i2.style.backgroundColor = 'transparent'// saida
    i2.style.border = '1px solid #E39224' 
    i1.style.backgroundColor = '#E39224' // entrada
}

function mudarF(){
    //SAIDAS
    Three.style.zIndex = '-1'
    Three.style.opacity = '0'
    Three.style.position = 'absolute'

    //ENTRADAS
    Two.style.zIndex = '1'
    Two.style.opacity = '1'
    Two.style.position = 'static'

    //SETAS
    se2.style.display = 'none'
    sd3.style.display = 'none'
    se1.style.display = 'flex'
    sd2.style.display = 'flex'

    //INDICADORES
    i3.style.backgroundColor = 'transparent'// saida
    i3.style.border = '1px solid #E39224' 
    i2.style.backgroundColor = '#E39224' // entrada
}

function mudarG(){
    //SAIDAS
    Four.style.zIndex = '-1'
    Four.style.opacity = '0'
    Four.style.position = 'absolute'

    //ENTRADAS
    Three.style.zIndex = '1'
    Three.style.opacity = '1'
    Three.style.position = 'static'

    //SETAS
    se3.style.display = 'none'
    sd4.style.display = 'none'
    se2.style.display = 'flex'
    sd3.style.display = 'flex'

    //INDICADORES
    i4.style.backgroundColor = 'transparent'// saida
    i4.style.border = '1px solid #E39224' 
    i3.style.backgroundColor = '#E39224' // entrada
}

function mudarH(){
    //SAIDAS
    Five.style.zIndex = '-1'
    Five.style.opacity = '0'
    Five.style.position = 'absolute'

    //ENTRADAS
    Four.style.zIndex = '1'
    Four.style.opacity = '1'
    Four.style.position = 'static'

    //SETAS
    se4.style.display = 'none'
    se3.style.display = 'flex'
    sd4.style.display = 'flex'

    //INDICADORES
    i5.style.backgroundColor = 'transparent'// saida
    i5.style.border = '1px solid #E39224' 
    i4.style.backgroundColor = '#E39224' // entrada
}

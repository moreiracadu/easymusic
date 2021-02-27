
// Variaveis
let time = 5000,
    currentImageIndex = 0,
    images = document
                .querySelectorAll('.carrossel img'),
    max = images.length;

// Funções

// const Modal = {
//     photoDesappear (){
//         document
//         .querySelector('.descricao-curso')
//         .classList
//         .add('desappear')
//     }, 

//     photoAppear (){
//         document
//         .querySelector('.descricao-curso')
//         .classList
//         .remove('desappear')
//     },
// }

function nextImage(){

    images[currentImageIndex]
            .classList.remove("selected");

    currentImageIndex++;

    if(currentImageIndex >= max)
        currentImageIndex = 0;

    images[currentImageIndex]
            .classList.add("selected");


}

function start(){

    setInterval(() => {
        //troca de imagem
        nextImage()
    }, time);
}

window.addEventListener('load', start);

console.log()
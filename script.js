const images = [
    'assets/images/products/notebook/notebook-01.jpg',
    'assets/images/products/notebook/notebook-02.jpg',
    'assets/images/products/notebook/notebook-03.jpg',
    'assets/images/products/notebook/notebook-04.jpg'
]

let indiceAtual = 0;
let imagem = document.querySelector('img.productimg')

let rightarrow = document.getElementById('rightarrow')
let leftarrow = document.getElementById('leftarrow')

function trocarimagem(){
    imagem.src = images[indiceAtual]
}

function avancarimagem(){
    if(indiceAtual === 3){
        indiceAtual = 0
        console.log(indiceAtual)
        }else{
            indiceAtual += 1;
            console.log(indiceAtual)
        }
        trocarimagem();
}

rightarrow.addEventListener("click", function(){
    avancarimagem()
})

leftarrow.addEventListener("click", function(){
    if(indiceAtual == 0){
        indiceAtual = 3
    }else{
    indiceAtual = indiceAtual - 1;
    }
    trocarimagem()
})

setInterval(avancarimagem, 5000);
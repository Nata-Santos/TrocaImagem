var imagemAtual = 1;
var repeticao = [
'img/primeirafoto.jpg',
'img/segundafoto.jpg',
'img/terceirafoto.jpg',
'img/quartafoto.jpg'
];

function trocarImg(){
    if(imagemAtual == repeticao.length){
        imagemAtual = 0;
    }
    document.getElementById("imagem").src = repeticao[imagemAtual];
    imagemAtual++;
}
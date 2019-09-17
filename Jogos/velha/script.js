//posições escolhidas de x e o
let X = [];
let O = [];

let img = 'X' ;
let espaco = window.document.querySelectorAll("div");
const respostas = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
];

if(X.length>=3 || O.length>=3){
    comparar(img);        
}

function comparar(vez){
    for( res of respostas){
        if(res == vez){
            console.log(`${vez} Ganhou!`);
        }
    }
}

//quando clicado no espaço
function simbolo(event){
    event.target.style.backgroundImage = `url(imagens/${img}.png)`;
    console.log(event.target);
    if(img == 'X'){
        X += ;    
    } 
}

for(let d of espaco){
    d.onclick = simbolo;
}

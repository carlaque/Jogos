
let jogador1 = 'jogador1';
let jogador2 = 'jogador2';
    
let vez = jogador1;
let jogada = '';
let imgX = window.document.getElementById('imgO');
let imgO = window.document.getElementById('imgO');

let contX = window.document.getElementById('contadorX');
let contO = window.document.getElementById('contadorO');

let espaco = window.document.querySelectorAll("div");
let d1 = window.document.getElementById('d1');
let d2 = window.document.getElementById('d2');
let d3 = window.document.getElementById('d3');
let d4 = window.document.getElementById('d4');
let d5 = window.document.getElementById('d5');
let d6 = window.document.getElementById('d6');
let d7 = window.document.getElementById('d7');
let d8 = window.document.getElementById('d8');
let d9 = window.document.getElementById('d9');

const respostas = [
    [d1,d2,d3],
    [d4,d5,d6],
    [d7,d8,d9],
    [d1,d4,d7],
    [d2,d5,d8],
    [d3,d6,d9],
    [d1,d5,d9],
    [d3,d5,d7]
];

//quando clicado no espaço
function simbolo(event){
    if(vez === jogador1){
        event.target.style.backgroundImage = 'url(imagens/X.png)';
        event.target.className = "jog1";
        vez = jogador2;

        //verifica o ganhador
        if(d1.className === d2.className && d2.className === d3.className ||
            d4.className === d5.className && d5.className === d6.className ||
            d7.className === d8.className && d8.className === d9.className ||
            d1.className === d4.className && d4.className === d7.className ||
            d2.className === d5.className && d5.className === d8.className ||
            d3.className === d6.className && d6.className === d9.className ||
            d1.className === d5.className && d5.className === d9.className ||
            d3.className === d5.className && d5.className === d7.className){
            setTimeout(function() {
                alert("você venceu!!!")}, 200);
        }
    
    }else{
        if(vez === jogador2){
            event.target.style.backgroundImage = 'url(imagens/O.png)';
            event.target.className = "jog2";
            vez = jogador1;

            //verifica o ganhador
            if(d1.className === d2.className && d2.className === d3.className ||
               d4.className === d5.className && d5.className === d6.className ||
               d7.className === d8.className && d8.className === d9.className ||
               d1.className === d4.className && d4.className === d7.className ||
               d2.className === d6.className && d6.className === d8.className ||
               d3.className === d6.className && d6.className === d9.className ||
               d1.className === d5.className && d5.className === d9.className ||
               d3.className === d5.className && d5.className === d7.className){
               setTimeout(function() {
                    alert("você venceu!!!")}, 200); 
            }
        }
    } 
}


for(let d of espaco){
	d.onclick = simbolo;
}







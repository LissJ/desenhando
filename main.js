// PEGA O ID DO CANVAS DO HTML
let canvas = document.getElementById("canvas");
// PEGAMOS O CONTEXTO DO DESENHO, ESSE É O MÉTODO QUE RETORNA UM DESENHO, USAR O PARÂMETRO 2D SIGNIFICA QUE O ONJETO QUE SERÁ RENDERIZADO SERÁ BIDIMENSIONAL
let contexto = canvas.getContext("2d");
// VARIÁVEL QUE VAMOS USAR PARA IDENTIFICAR SE ESTAMOS DESENHANDO
let desenhando = false;

let corLinha = "black"; // Cor da linha padrão

canvas.addEventListener("mousedown", function(event){
    // VAMOS USAR O MÉTODO addEventListener PARA OUVIR NOSSO MOUSE, ELE IRÁ IDENTIFICAR QUANDO CLICARMOS
    desenhando = true;
    // O DESENHANDO SE TORNA VERDADE
    contexto.beginPath();
    // A VARIÁVEL CONTEXTO RECEBE O MÉTODO beginPath(), ESSE MÉTODO SIGNIFICA QUE UM NOVO CAMINHO SERÁ CRIADO
    contexto.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
    // NESSA FUNÇÃO VAMOS DIZER COMO O CONTEXTO IRÁ FUNCIONAR, O clientX VAI FORNECER COORDENADAS HORIZONTAIS, ENQUANTO O canvas.offsetLeft VAI RETORNAR A MEDIDA EM PIXEL, A MESMA COISA ACONTECE COM O Y DE FORMA VERTICAL
    contexto.strokeStyle = corLinha;
});

canvas.addEventListener("mousemove", function(event){
    // ESSA FUNÇÃO IDENTIFICA QUANDO MOVEMOS O MOUSE
    if(desenhando){
        // ESSE if VAI IDENTIFICAR SE ESTAMOS CLICANDO ENQUANTO MOVEMOS O MOUSE
        contexto.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
        // ELE VAI IDENTIFICAR  TODA A LINHA QUE ESTAMOS TRAÇANDO ENQUANTO CLICAMOS E MOVEMOS O MOUSE
        contexto.stroke();
        // ELE TRAÇA A LINHA
    }
})

canvas.addEventListener("mouseup", function(event){
    // ESSA FUNÇÃO IDENTIFICA QUANDO NÃO ESTAMOS MAIS CLICANDO NO MOUSE
    desenhando = false;
})

// const colorPalette = document.getElementById("color-palette");

// colorPalette.addEventListener("click", function(event) {
//     if (event.target.classList.contains("color")) {
//         // Verifique se o elemento clicado pertence à classe "color"
//         const selectedColor = event.target.style.backgroundColor;
//         contexto.strokeStyle = selectedColor;
//         // Defina a cor da stroke para a cor selecionada
//     }
// });

// Função para definir a cor da linha
function definirCorLinha(cor) {
    corLinha = cor;
    // Atualize o valor do input de seleção de cor da linha
   
}

const circulo = document.getElementById("canvas");
 const ctx = circulo.getContext("2d");

 const raio = 200; // Raio do círculo
 const x = canvas.width / 2; // Posição X do centro do círculo
 const y = canvas.height / 2; // Posição Y do centro do círculo

 ctx.beginPath();
 ctx.arc(x, y, raio, 0, Math.PI * 2); // Desenha um círculo completo
 ctx.fillStyle = "yellow"; // Define a cor de preenchimento para vermelho
 ctx.fill(); // Preenche o círculo
 ctx.closePath();

 //preenchimento 
let modoPreenchimento = false;

function ativarModoPreenchimento() {
    modoPreenchimento = !modoPreenchimento; // Inverte o estado do modo de preenchimento
}

canvas.addEventListener("click", function(event) {
    if (modoPreenchimento) {
        contexto.fillStyle = corLinha; // Define a cor de preenchimento igual à cor da linha
        contexto.fill(); // Preenche a área
    }
});
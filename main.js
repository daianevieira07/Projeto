
let name = prompt("Qual é o seu nome?", "name");

let nomeHTML = document.getElementById("nome-pessoa")

nomeHTML.innerHTML = "Olá " + name + "!";


let jogar = prompt("Oi " + name + "! Deseja jogar? \n Digite o número: \n 1- Sim \n 2- Não")

if (jogar != "1") {
    let sairHTML = document.getElementById("mensagemSair")
    sairHTML.innerHTML = "A operação foi cancelada. Agradecemos a sua visita!";
    alert("A operação foi cancelada. Agradecemos a sua visita!")
}

else {
    let pergunta1 = prompt("Qual é a capital da França? \n 1- Nice \n 2- Paris \n 3-Budapeste  ")
    if (pergunta1 > "3" || pergunta1 === "") {
        alert("Só digita: 1, 2 ou 3 pra responder.")
        let pergunta1 = prompt("Qual é a capital da França? \n 1- Nice \n 2- Paris \n 3-Budapeste  ")
    }

    let pergunta2 = prompt("Qual é a capital do Brasil? \n 1- Salvador \n 2- Brasilia \n 3-São Paulo")
    if (pergunta2 > "3" || pergunta2 === "") {
        alert("Só digita: 1, 2 ou 3 pra responder.")
        let pergunta2 = prompt("Qual é a capital do Brasil? \n 1- Salvador \n 2- Brasilia \n 3-São Paulo")
    }

    let pergunta3 = prompt("Qual é a capital dos Estados Unidos? \n 1- Nova York \n 2- Washington \n 3-Maiami")
    if (pergunta3 > "3" || pergunta3 === "") {
        alert("Só digita: 1, 2 ou 3 pra responder.")
        let pergunta3 = prompt("Qual é a capital dos Estados Unidos? \n 1- Nova York \n 2- Washington \n 3-Maiami")

    }

    switch (pergunta1) {

        case "1":
            let resposta1case1 = document.getElementById("respostaE1case1")
            resposta1case1.innerHTML = "Resposta 1 - Errada";
            break;

        case "2":
            let resposta1case2 = document.getElementById("respostaC1")
            resposta1case2.innerHTML = "Resposta 1 - Correta";
            break;

        case "3":
            let resposta3case3 = document.getElementById("respostaE1case3")
            resposta3case3.innerHTML = "Resposta 1 - Errada";

                            
      default:
            confirm("Está tentando sair do jogo?")

            if (confirm = true) {
                {
                    let sairHTML = document.getElementById("mensagemSair")
                    sairHTML.innerHTML = "A operação foi cancelada. Agradecemos a sua visita!";
                    alert("A operação foi cancelada. Agradecemos a sua visita!")
                }
                break;
            }



            switch (pergunta2) {

                case "1" , "3":
                    let resposta2case1 = document.getElementById("respostaE2case1")
                    resposta2case1.innerHTML = "Resposta 2 - Errada";

                    break;

                case "2":
                    let resposta2case2 = document.getElementById("respostaC2")
                    resposta2case2.innerHTML = "Resposta 2 - Correta";

                    break;

               case "3":
                    let resposta2case3 = document.getElementById("respostaE2case3")
                    resposta2case3.innerHTML = "Resposta 2 - Errada";

                    break;

                default:
                    
                    break;
            }


            switch (pergunta3) {

                case "1" , "3":
                    let resposta3case1 = document.getElementById("respostaE3case1")
                    resposta3case1 .innerHTML = "Resposta 3 - Errada";
                    break;

                case "2":
                    let resposta3case2 = document.getElementById("respostaC3")
                    resposta3case2.innerHTML = "Resposta 3 - Correta";
                    break;

                case "3":
                    let resposta3case3 = document.getElementById("respostaE3case3")
                    resposta3case3.innerHTML = "Resposta 3 - Errada";

                    break;

                default:
                
                    break;
            }
    }
}


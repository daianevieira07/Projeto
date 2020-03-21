let name = prompt("Qual é o seu nome?", "name" );

//let name = document.getElementById ("name")

//name.innerHtml = "Olá " + name + "!";

document.write("Olá " + name +"!\n")


let jogar = prompt( "Oi " + name + "! Deseja jogar? \n Digite o número: \n 1- Sim \n 2- Não")

if (jogar != "1") {
    mensagemSair = "A operação foi cancelada. Agradecemos a sua visita!"
    alert(mensagemSair)
    document.write(mensagemSair) 
    document.innerHtml
}

else {
    let pergunta1 = prompt("Qual é a capital da França? \n 1- Nice \n 2- Paris \n 3-Budapeste  ")
    let pergunta2 = prompt("Qual é a capital do Brasil? \n 1- Salvador \n 2- Brasilia \n 3-São Paulo")
    let pergunta3 = prompt("Qual é a capital dos Estados Unidos? \n 1- Nova York \n 2- Washington \n 3-Maiami")

    switch (pergunta1) {

        case "1":

            document.write  (" Resposta 1 errada <br>")
            break;

        case "2":
            document.write(" Resposta 1 certa <br>")
            break;

        case "3":

            document.write(" Resposta 1 errada <br> ")

            break;

        default:
            alert("Digite um número para a opção: 1, 2, ou 3.");
            break;
    }



    switch (pergunta2) {

        case "1":
            document.write("Resposta 2 errada <br>")
            break;

        case "2":
            document.write("Resposta 2 certa <br>")

            break;

        case "3":
            document.write("Resposta 2 errada <br>")

            break;

        default:
            alert("Digite um número para a opção: 1, 2, ou 3.");
            break;
    }


    switch (pergunta3) {

        case "1":
            document.write("Resposta 3 errada <br>")
            break;

        case "2":
            document.write("Resposta 3 certa <br>")
            break;

        case "3":
            document.write("Resposta 3 errada <br>")

            break;

        default:
            alert("Digite um número para a opção: 1, 2, ou 3.");
            break;
    }
}


document.getElementsById("corretas")


document.getElementsById("erradas")







// ENTRADA PAUTAS

let nameUser2 = []
let votations2
let votationsPositive2 = 0
let votationsNegative2 = 0




function votation2 () {

    alert("Seja-bem vindo(a), fique a vontade para tomar a sua decisão :)")


     nameUser2.push(prompt("Informe seu nome: "))
     votations2 = prompt("Escolha o seu voto:\n1 - Estou a favor\n2 - Estou contra")

    switch (votations2) {

        case "1":

        votationsPositive2++;
        if (votationsPositive2 <= 100) {

            alert("Voto salvo")

  
        }
  
            break;

        case "2":

            votationsNegative2++;
            if (votationsNegative2 <= 100) {
    
                alert("Voto salvo")
    
      
            }
            
            break;
    
        default:

        alert("Digito invalido")

            break;
    }
    
}



function informations2() {

    let userInfo2 = prompt("Selecione a opção desejada:\n1 - Nome dos participants\n2 - Votos totais\n3 - Sair do programa")

    switch (userInfo2) {

        case "1":

       
        alert(`Nome dos candidatos:\n${nameUser2}`)

       
       

            break;

        case "2":

        alert(`Quantidade de votos positivos ${votationsPositive2}\n\nQuantidade de votos negativos: ${votationsNegative2}`)

            break;

        case "3":

        return votations()

    
        default:
            break;
    }


    
}


function activateVotation() {

    let options2 = prompt("Escolha a opção desejada:\n\n1 - Votar\n2 - Informações")
    let information2
    let validation2 = 1


    switch (options2) {

        case "1":

        information2 = votation2()
        
            break;

        case "2":

        information2 = informations2()

            break;
    
        default:

        alert("Digito invalido")
            break;
    }


    while (validation2 == 1) {

        activateVotation();
        
    }
    
    

  

    

    
}



// STATUS DA ASSEMBLEIA


function assembly() {

    alert("Esta assembleia esta ativada.")
    
}

function noassembly() {

    alert("Esta assembleia esta inativa, favor voltar outro dia :).")
    
}


// ENTRADA PAUTAS

let nameUser = []
let votations
let votationsPositive = 0
let votationsNegative = 0




function votation () {

    alert("Seja-bem vindo(a), fique a vontade para tomar a sua decisão :)")


     nameUser.push(prompt("Informe seu nome: "))
     votations = prompt("Escolha o seu voto:\n1 - Estou a favor\n2 - Estou contra")

    switch (votations) {

        case "1":

        votationsPositive++;
        if (votationsPositive <= 100) {

            alert("Voto salvo")

  
        }
  
            break;

        case "2":

            votationsNegative++;
            if (votationsNegative <= 100) {
    
                alert("Voto salvo")
    
      
            }
            
            break;
    
        default:

        alert("Digito invalido")

            break;
    }
    
}



function informations() {

    let userInfo = prompt("Selecione a opção desejada:\n1 - Nome dos participants\n2 - Votos totais\n3 - Sair do programa")

    switch (userInfo) {

        case "1":

       
        alert(`Nome dos candidatos:\n${nameUser}`)

       
       

            break;

        case "2":

        alert(`Quantidade de votos positivos ${votationsPositive}\n\nQuantidade de votos negativos: ${votationsNegative}`)

            break;

        case "3":

        return votations()

    
        default:
            break;
    }


    
}


function activate() {

    let options = prompt("Escolha a opção desejada:\n\n1 - Votar\n2 - Informações")
    let information
    let validation = 1


    switch (options) {

        case "1":

        information = votation()
        
            break;

        case "2":

        information = informations()

            break;
    
        default:

        alert("Digito invalido")
            break;
    }


    while (validation == 1) {

        activate();
        
    }
    
    

  

    

    
}



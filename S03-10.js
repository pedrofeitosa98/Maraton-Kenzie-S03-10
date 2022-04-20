// Uma função com argumento os parâmetros: firstPlace, secondPlace, lastPlace
// Um array com os 3 lugares
// Daniel tem 1 ponto extra, então sempre estará a frente

function positions(firstPlace, secondPlace, lastPlace) {
    
    let podio = [firstPlace, secondPlace, lastPlace]
    
    if (podio[2] == "Daniel") {
        podio.push(podio[1])
        podio.splice(1, 1)
        secondPlace = podio[1]
    }
    if (podio[1] == "Daniel"){
        podio.unshift(podio[1])
        podio.splice(2, 1)
        firstPlace = podio[0]
    }
    console.log(podio[0] + " na 1ª posição")
    console.log(podio[1] + " na 2ª posição")
    console.log(podio[2] + " na 3ª posição")
    return
}

positions("Rafael", "Manoel", "Daniel")
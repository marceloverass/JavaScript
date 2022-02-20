function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var semana = window.document.getElementById('diaSem')
    var data = new Date()
    var diaSem = data.getDay()
    var hora = data.getHours()
    var min = data.getMinutes()
    
    msg.innerHTML = `${hora}:${min}`
    switch(diaSem) {
        case 0:
            semana.innerHTML = 'Domingo'
            break;
        case 1:
            semana.innerHTML = 'Segunda-Feira'
                break;
        case 2: 
            semana.innerHTML = 'Terça-Feira'
                break;
        case 3:
            semana.innerHTML = 'Quarta-Feira'
                break;
        case 4:
            semana.innerHTML = 'Quinta-Feira'
                break;
        case 5:
            semana.innerHTML = 'Sexta-Feira'
                break;
        case 6:
            semana.innerHTML = 'Sabádo'
                break;
        default:
            semana.innerHTML = '[ERRO] Dia inválido.'
    }
    
    if (min < 10){
        min = "0" + mim
    }
    if (hora < 6){
        img.src = 'fotonoite.png'
        document.body.style.background = '#515154'
    }
    else if (hora < 12){
        //BOM DIA!
        img.src = 'fotomanha.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora < 18) {
        //BOA TARDE!
        img.src = 'fototarde.png'
        document.body.style.background = '#b9846f'
    } else {
        //BOA NOITE!
        img.src = 'fotonoite.png'
        document.body.style.background = '#515154'
    }
}
    

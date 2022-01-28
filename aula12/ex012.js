var agora = new Date()
var hora = agora.getHours()
var minutes = agora.getMinutes()
console.log(`Agora são exatamente ${hora} horas e ${minutes} minutos.`)

if (hora < 5){
    console.log('BOA MADRUGADA')
}
  else if (hora < 12) {
    console.log('BOM DIA!')
} else if ( hora <= 18) {
    console.log('BOA TARDE!')
} else if (hora <= 24) {
    console.log('BOA NOITE!')
} 

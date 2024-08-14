function carregar(){
  var msg = window.document.getElementById('msg') 
  var img= window.document.getElementById('imagem')
  var data = new Date() //pega a data atual
  var hora = data.getHours()//pega a hora da data atual
  msg.inneerHTML = `Agora sao ${hora} horas`
  if (hora >=0 && hora <12){
    //Bom Dia
  img.src= 'manha.jpg'
  } else if(hora >=12 && hora <18){
//Boa Tarde
    img.src = 'tarde.jpg'
  }else {
    //Boa noite
    img.src='noite.jpg'
  }
    




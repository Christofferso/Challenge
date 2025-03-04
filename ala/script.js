
const swiper = new Swiper('.swiper', {
    speed: 400,
    spaceBetween: 100,
  });
  
const button = document.querySelector(".btn_secundario")
const button_2 = document.querySelector(".btn_open")
const modal = document.querySelector("dialog")
const buttonClose = document.querySelector(".btn_fechar")
const modal2 = document.querySelector(".dialog_abrir")
const buttonClose2 = document.querySelector(".botao_fechar")

button_2.onclick = function(){
    modal.showModal()
}

buttonClose.onclick = function(){
modal.close()
}


button.onclick = function(){
  modal2.showModal()
}

buttonClose.onclick = function(){
  modal.close()
}

buttonClose2.onclick = function(){
modal2.close()
}
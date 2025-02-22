function comprar(){
   let res = document.querySelector('div#res')
   let nome = prompt('Insira seu nome:')
   let idade = Number(window.prompt('Informe sua idade: '))
    
      if(idade<18){
        alert(`[ERRO] VOCÊ NÃO É MAIOR DE IDADE! ENTRADA NÃO LIBERADA.`)
      }else{
         alert(`Aguardando confirmação de pagamento.`)

         res.innerHTML = (`<strong>${nome}, seu pagamento foi realizado com sucesso!</strong>`)
      }

}
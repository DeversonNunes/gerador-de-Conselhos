const  elementoDoButton =document.querySelector('.advice-update')
    const  elementoDoNumber=document.querySelector('.advice-id')
    const   elementoDescription=document.querySelector('.advice-description')

    async function elementoAdvince() {
        try {
          const response = await fetch("https://api.adviceslip.com/advice");
      
          if (!response.ok){
            let error=" ao entra no java script"
            console.log(error)
          }
      
          const adviceContent = await response.json();
          const adviceId = `advince #${adviceContent.slip.id}`;
          const adviceText = `"${adviceContent.slip.advice}"`;
      
          elementoDoNumber.innerText = adviceId;
          elementoDescription.innerText = adviceText;
      
        } catch (error) {
          console.error("Erro ao tentar buscar as informações da API", error);
        }
        
      }
      elementoDoButton .addEventListener('click', elementoAdvince)
      elementoAdvince()

































//  function ferverAgua(chaleiraEstaNoFogo,fogaoEstaLigado) {
    
//     return new Promise((resolve, reject) => {
//         if (chaleiraEstaNoFogo&&fogaoEstaLigado) {
//             console.log('passo1: ritual comencando')
//             resolve()
//         }
//         else{
//          let error='erro ao executar'
//          reject()
//         }
//     })
// }

// function passarCafe(aguaFervida) {
//     return new Promise((resolve) => {
//         console.log('passo2')
//         resolve()
//     })
// }

// function tomarCafe(cafePassado) {
//     return new Promise((resolve) => {
//         console.log('passo3')
//         resolve()
//     })
// }

// function lavarXicara(cafeTomado) {
//     new Promise((resolve) => {
//         console.log(passo5)
//         resolve()
//     })
// }

// chaleiraEstaNoFogo=true
// fogaoEstaLigado=true
// // ferverAgua(chaleiraEstaNoFogo,fogaoEstaLigado)


// async function iniciarProcessoDeFaserCafe() {
//     const aguaFervida=  ferverAgua(chaleiraEstaNoFogo,fogaoEstaLigado)
//     console.log(aguaFervida)
// }
// iniciarProcessoDeFaserCafe()








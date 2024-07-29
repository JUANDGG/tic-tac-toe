import Swal from 'sweetalert2';
import confetti from 'canvas-confetti';



///WARKING WAY TO PROGRAM IMPERATIVE 


function tiedGameModal(){
  return Swal.fire({
    title: 'Tied Game',
    confirmButtonText: null, 
    showConfirmButton: false,
    allowOutsideClick: false,
    footer: `
      <button id="exitButton" style="background-color: red; color: white; border: none; border-radius: 3px; padding: 10px 20px; cursor: pointer;">Exit Game</button>
      <button id="reloadButton" style="background-color: #3085d6; color: white; border: none; border-radius: 3px; padding: 10px 20px; cursor: pointer;">New Game</button>
    `,
    didOpen: () => {
      const exitButton =Swal.getFooter().querySelector('#exitButton');
      exitButton.addEventListener('click',()=>{
        window.close();
      })

      const reloadButton = Swal.getFooter().querySelector('#reloadButton');
      reloadButton.addEventListener('click', () => {
        window.location.reload();
      });
    }
  });
}


function winnerModal(winner) {
    confetti()
    return Swal.fire({
      title: winner.toLowerCase()=='x' ? "Player one" : "Player two",
      confirmButtonText: null, 
      showConfirmButton: false,
      allowOutsideClick: false,
      footer: `
        <button id="exitButton" style="background-color: red; color: white; border: none; border-radius: 3px; padding: 10px 20px; cursor: pointer;">Exit Game</button>
        <button id="reloadButton" style="background-color: #3085d6; color: white; border: none; border-radius: 3px; padding: 10px 20px; cursor: pointer;">New Game</button>
      `,
      didOpen: () => {
        const exitButton =Swal.getFooter().querySelector('#exitButton');
        exitButton.addEventListener('click',()=>{
          window.close();
        })
  
        const reloadButton = Swal.getFooter().querySelector('#reloadButton');
        reloadButton.addEventListener('click', () => {
          window.location.reload();
        });
      }
    });
}



   
   
  


export  {
  tiedGameModal,
  winnerModal
};
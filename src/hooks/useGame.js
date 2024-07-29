import { useState,useEffect, useCallback } from "react";


    //swal alerts
    import {tiedGameModal,winnerModal} from '@scripts/modals.js'

    const WINNER_COMBOS={
        "cb1":[0,1,2],
        "cb2":[0,3,6],
        "cb3":[2,5,8],
        "cb4":[1,4,7],
        "cb5":[0,4,8],
        "cb6":[2,4,6],
        "cb7":[3,4,5]
    }

function useGame(board){
    
    const [winner ,setWinner] =useState(null);
    const [isTied,setIsTied]=useState(false);



    const checkTied =useCallback(()=>{
        if(board.every(cell => cell !=="")){
            setIsTied(true)
        }
    },[board])

    //function check winner for search winners
    const checkWinner=useCallback(()=>{
        for(let i in WINNER_COMBOS){
            let [a, b ,c] =WINNER_COMBOS[i];
            if (board[a] !=="" && board[a] === board[b] && board[a] === board[c]) {
                    setWinner(board[a]);       
            }
        }
        
    },[board])


    //for updat
    useEffect(()=>{
        checkWinner()
        checkTied()
    },[board,checkWinner,checkTied])
    

    //for view Tied
    useEffect(()=>{
        if(isTied){
            tiedGameModal()
        }
    },[isTied])
        
      

    //for view winner
    useEffect(()=>{
        if(winner!=null){
            winnerModal(winner)
        }
    },[winner])



    return {winner}
}

export default useGame;
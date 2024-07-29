import { useState } from "react";

function useBoard(){

    const arr = new Array(9);
    const [board,setBoard]=useState(arr.fill(""));


    const toggleBoard=(newBoard)=>{
        setBoard(newBoard)
    }

    return {board,toggleBoard};

}   

export default useBoard;



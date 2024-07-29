import { useState } from "react";



function usePaintItem(){
    const [className, setClassName] = useState('');

    const toogleClassName =(turn)=>{
        if (turn === 'X') {
            setClassName('item-x');
        } else if (turn === 'O') {
            setClassName('item-o');
        }
    }

    return {className,toogleClassName}
}


export default usePaintItem ;
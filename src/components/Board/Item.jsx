import usePaintItem from "@customHooks/usePaintItem.js";



function Item({ children, index, updateBoard, turn_game }) {
  
  const {className,toogleClassName} =usePaintItem()

  const handleClick = (event) => {
    updateBoard(index);
    if (className !== '') return;
    toogleClassName(turn_game);    
  };

  return (
    <li onClick={handleClick} className={className}>
      {children}
    </li>
  );
}

export default Item


//custom hooks
import useBoard from "@customHooks/useBoard.js";
import useTurn from "@customHooks/useTurn";
import useGame from "@customHooks/useGame";

//childs components
import Item from "@components/Board/Item.jsx";


//style sheets
import '@styleSheets/Board.css';




function Board() {
    const { board, toggleBoard } = useBoard();
    const { turn, toggleTurn } = useTurn();
    const { winner } = useGame(board);

    const updateBoard = (index) => {
        const newBoard = [...board];
        if (winner !== null || newBoard[index] !== "") return;
        newBoard[index] = turn;
        toggleBoard(newBoard);
        toggleTurn();
    };



    return (
        <section>
            <ul className="board_list">
                {board && board.map((item, index) => (
                    <Item  key={index} index={index} updateBoard={updateBoard} turn_game={turn}>
                        {item}
                    </Item>
                ))}
            </ul>
        </section>
    );
}

export default Board;

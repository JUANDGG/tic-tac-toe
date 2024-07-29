
// components
import Board from '@components/Board/Board.jsx'
import Header from '@components/Header/Header.jsx'

//style sheets
import '@styleSheets/App.css'

function App() {
  return(
    <>
       <Header title="tic tac toe"/>
       <section className='container_board'>
          <Board />
       </section>
       
    </>
    
  )
}

export default App

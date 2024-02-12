import BackgammonBoard from './components/backgammonBoard'
import {BackgammonProvider} from './providers/BackgammonProvider'

function App() {

  return (
    <>
      <BackgammonProvider>
        <BackgammonBoard/>
      </BackgammonProvider>
    </>
  )
}

export default App

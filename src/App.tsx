import TodosContainer from "./redux/containers/TodosContainer"
import Modal from './Modal'

const App = () => {
  return (
    <>
      <Modal />
      <TodosContainer />
    </>
  )
}

export default App
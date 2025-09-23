import './App.css'
import { Counter } from './components/Counter'

function App() {

  return (
    <>
      <div className='flex justify-center items-center'>
        <h1 className='text-3xl font-bold underline'>Hello world!'</h1>
      </div>
      <div className='flex justify-center items-center'>
        <Counter/>
      </div>
     
    </>
  )
}

export default App

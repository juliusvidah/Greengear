import { useState } from 'react'
import './App.css'
import SignUp from './component/signup/SignUp'
import Login from './component/signin/SignIn'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <SignUp/>
    {/* <Login/> */}
    </>
  )
}

export default App

import './App.css'
import SignUp from './component/signup/SignUp'
import { Route, Routes } from 'react-router-dom'
import Home from './component/home/Home'
import SignIn from './component/signin/SignIn'
import PasswordResetForm from './component/Passwordresetform/PasswordResetForm'
import EmailVerification from './component/Emailverification/EmailVerification'

function App() {

  return (
    <>
      {/* <SignIn/> */}
      <SignUp/>
      {/* <PasswordResetForm/> */}
      {/* <EmailVerification/> */}
    </>
  )
}

export default App

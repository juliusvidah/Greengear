import './App.css'
import SignUp from './component/signup/SignUp'
import { Route, Routes } from 'react-router-dom'
import SignIn from './component/signin/SignIn'
import PasswordResetForm from './component/Passwordresetform/PasswordResetForm'
import EmailVerification from './component/Emailverification/EmailVerification'
import Account from './component/Account/Account'

function App() {

  return (
    <>
      {/* <SignIn/> */}
      {/* <SignUp/> */}
      <Account/>
      {/* <PasswordResetForm/> */}
      {/* <EmailVerification/> */}
    </>
  )
}

export default App

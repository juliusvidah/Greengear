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
    <Routes>
      <Route path='/' element={<SignUp/>}/>
      <Route path='/signin' element={<SignIn/>}/>
      <Route path='/account' element={<Account/>}/>
      <Route path='/Emailverification' element={<EmailVerification/>}/>
      <Route path='/passwordresetform' element={<PasswordResetForm/>}/>
    </Routes>
      {/* <SignIn/> */}
      
      {/* <Account/> */}
      {/* <PasswordResetForm/> */}
      {/* <EmailVerification/> */}
    </>
  )
}

export default App

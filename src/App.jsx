import { Suspense, lazy, useState } from "react";
import "./App.css";
import SignUp from "./component/signup/SignUp";
import { Route, Routes } from "react-router-dom";
import Home from "./component/home/Home";
import SignIn from "./component/signin/SignIn";
import PasswordResetForm from "./component/Passwordresetform/PasswordResetForm";
import EmailVerification from "./component/Emailverification/EmailVerification";
import Description from "./component/description/Description";
import Cart from "./component/cart/Cart";
import Footer from "./component/footer/Footer";
import Nav from "./component/Nav/Nav";
import Categories from "./component/categories/Categories";
import HowItWorks from "./component/how-it-works/HowItWorks";
import Contact from "./component/contact/Contact";
import FAQ from "./component/faq/FAQ";
import Error from "./component/Error/Error";

function App() {
  return (
    <>
      {/* <SignIn /> */}
      {/* <SignUp/> */}
      {/* <PasswordResetForm/> */}
      {/* <EmailVerification/> */}
      <Nav />

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Categories" element={<Categories />} />
          <Route path="/HowItWorks" element={<HowItWorks />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/FAQ" element={<FAQ />} />
          {/* <Route path="/Checkout" element={<Checkout />} /> */}
          {/* <Route path="/SingleProduct" element={<SingleProduct />} />
          <Route path="/About" element={<About />} />
          <Route path="/Blog" element={<Blog />} /> */}
          <Route path="*" element={<Error />} />
        </Routes>
      </Suspense>
      {/* <Description />
      <Cart /> */}
      <Footer />
    </>
  );
}

export default App;

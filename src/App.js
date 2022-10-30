import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AuthContext from "./contexts/AuthContext";
import GlobalStyle from "./GlobalStyle";
import Homepage from "./login/Homepage";
import Cadastro from "./registration/Cadastro";
import Subscriptions from "./subscription/Subscriptions";
import Planos from "./subscription/Planos";
import Home from "./home/Home";


export default function App() {
  const [imgPlano, setImgPlano] = useState()
  const [membership, setMembership] = useState()
  const [name, setName] = useState()
  const [chegado, setChegado] = useState(false)
  const [auth, setAuth] = useState(null)
  const [form, setForm] = useState({
    membershipId: '',
    cardName: '',
    cardNumber: '',
    securityNumber: '',
    expirationDate: '',
});

  function setAndPersistToken(token) {
		setAuth(token);
		localStorage.setItem("token", token);
	}


  return (
    <AuthContext.Provider value={{setAndPersistToken, auth, setAuth, setImgPlano, imgPlano, setMembership, membership, setName, name, setChegado, chegado, form, setForm}}>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/sign-up" element={<Cadastro />} />
          <Route path="/subscriptions" element={<Subscriptions />} />
          <Route path="/subscriptions/memberships/:planoId" element={<Planos />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}
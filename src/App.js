import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AuthContext from "./contexts/AuthContext";
import GlobalStyle from "./GlobalStyle";
import Homepage from "./login/Homepage";
import Cadastro from "./registration/Cadastro";
import Subscriptions from "./subscription/Subscriptions";
import Planos from "./subscription/Planos";


export default function App() {
  const [auth, setAuth] = useState(undefined)


  return (
    <AuthContext.Provider value={{auth, setAuth}}>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/sign-up" element={<Cadastro />} />
          <Route path="/subscriptions" element={<Subscriptions />} />
          <Route path="/subscriptions/memberships/:planoId" element={<Planos />} />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}
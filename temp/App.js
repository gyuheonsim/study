// import { useMemo } from "react";
import React, { Component } from "react";
// import faker from "faker/locale/ko";
// import Table from "./Table";
import Header from "./Header";
import Main from "./Main";
import Footer from "./footer";


function App() {
  return(
    <div>
      <Header />
      <Main name = "심규헌"/>
      <Footer/>
    </div>
  );
}

export default App;
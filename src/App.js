import React, { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Result from "./components/result/Result";

import requests from "./constant/requests";
import Footer from "./components/footer/Footer";

function App() {
    const [selectedOption, setSelectedOption] = useState(
        requests.fetchTrending
    );
    return (
        <div className="app">
            <Header />
            <Nav setSelectedOption={setSelectedOption} />
            <Result selectedOption={selectedOption} />
            <Footer />
        </div>
    );
}

export default App;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main/Main";
import NotFound from "./components/NotFound/NotFound";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Randomchar from "./components/RandomChar/RandomChar";
import Randombob from "./components/Randombob/randombob";

import styles from "./App.module.css";

const App = () => {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Header />
            <div className={styles.Layout}>
                <Routes>
                    <Route path="/" element={<Main />}></Route>
                    <Route path="/randomchar" element={<Randomchar />}></Route>
                    <Route path="/randombob" element={<Randombob />}></Route>
                    <Route path="*" element={<NotFound />}></Route>
                </Routes>
            </div>
            <Footer className={styles.bottom} />
        </BrowserRouter>
    );
};
export default App;

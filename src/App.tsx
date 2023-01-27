import React, {useState} from 'react';
import {BrowserRouter, NavLink, Route, Routes} from 'react-router-dom';
import cv from './data/rus'
import CV from './model/resume';
import Main from './pages/main';

function App() {
    const [currentCV, setCV] = useState<CV>(cv);
    const reload = () => window.location.reload();

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Main currentCV={currentCV}/>}></Route>
                </Routes>
            </BrowserRouter>
        </>

    );
}

export default App;

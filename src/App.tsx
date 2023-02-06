import React from 'react';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import NavArray from "./model/navigateLink";
import NavComponent from "./component/navComponent";

function App() {
    const reload = () => window.location.reload();
    return (
        <>
            <BrowserRouter>
                <NavComponent></NavComponent>
                <Routes>
                    {NavArray.map(route =>
                        <Route key={route.path} path={route.path} element={route.component}></Route>
                    )}
                    <Route path="*" element={<Navigate to="/"/>}/>
                </Routes>
            </BrowserRouter>
        </>

    );
}

export default App;

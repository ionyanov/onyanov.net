import React, {Suspense, useEffect, useState} from 'react';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import NavArray from "./model/navigateLink";
import NavComponent from "./component/navComponent";
import FilterProvider from "./component/filterProvider";

function App() {
    const [showNav, setShowNav] = useState(false)

    useEffect(() => {
        const searchParams = new URLSearchParams(document.location.search)
        if (searchParams.get('nav')) {
            setShowNav(true)
        }
    }, [])

    return (
        <>
            <BrowserRouter>
                <FilterProvider>
                    {showNav && <NavComponent/>}
                    <Routes>
                        {NavArray.map(route =>
                            <Route key={route.path} path={route.path} element={
                                <Suspense fallback={<div>Loading...</div>}>
                                    {route.component}
                                </Suspense>
                            }></Route>
                        )}
                        <Route path="*" element={<Navigate to="/"/>}/>
                    </Routes>
                </FilterProvider>
            </BrowserRouter>
        </>

    );
}

export default App;

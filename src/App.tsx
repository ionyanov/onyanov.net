import React, {Suspense} from 'react';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import NavArray from "./model/navigateLink";
import FilterProvider from "./component/filterProvider";

function App() {


    return (
        <>
            <BrowserRouter>
                <FilterProvider>
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

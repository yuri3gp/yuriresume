import {Routes, Route } from "react-router-dom";
import NoPage from "../pages/NoPage";
import Home from '../pages/Home';
import About from '../pages/About';

export default function PageRoutes() {
    return (
        <>
            <Routes>
                <Route>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<NoPage />} />
                    <Route path="/home" index element={<Home />} />
                    <Route path="about" element={<About />} />
                </Route>
            </Routes>
        </>
    )
}
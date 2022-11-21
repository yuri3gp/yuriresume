import { Routes, Route } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from '../pages/Home';
import About from '../pages/About';

export default function Switch() {
    return (
        <>
            <Routes>
                <Route>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<NotFound />} />
                    <Route path="home" index element={<Home />} />
                    <Route path="about" element={<About />} />
                </Route>
            </Routes>
        </>
    )
}
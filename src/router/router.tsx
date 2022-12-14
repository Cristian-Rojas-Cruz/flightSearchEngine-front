import { Route, Routes } from "react-router-dom";
import { Login, Home, MapView } from "../views";

const RouterView: React.FC = () => (
    <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/map" element={<MapView />}/>
        {/* /:id */}
    </Routes>
);

export default RouterView;

import { Route, Routes, Navigate  } from "react-router-dom";
import { Login, Home, MapView } from "../views";

const RouterView: React.FC = () => (
    <Routes>
        {/* <Route path="/login" element={<Login />}/> */}
        <Route path="/" element={<Home />}/>
        <Route path="/map" element={<MapView />}/>
        {/* 3000-20000 */}
        <Route path="/map/:price" element={<MapView />}/>
        {/* DD/MM/YY 14122022-16122023  */}
        <Route path="/map/:price/:date" element={<MapView />}/>
        {/* id  */}
        {/* <Route path="/cards/:price/:date/:place" element={<MapView />}/> */}


        {/* /:id */}
        <Route path="/*" element={<Navigate to="/" />}/>
    </Routes>
);

export default RouterView;

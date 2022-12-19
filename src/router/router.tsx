import { Route, Routes } from "react-router-dom";
import { Home, MapView, Flight, ActionCrud } from "../views";

const RouterView: React.FC = () => (
    <Routes>
        {/* <Route path="/login" element={<Login />}/> */}
        <Route path="/" element={<Home />}/>
        <Route path="/map" element={<MapView />}/>
        {/* 3000-20000 */}
        <Route path="/map/:price" element={<MapView />}/>
        {/* DD/MM/YY 14122022-16122023  */}
        <Route path="/map/:price/:date/:place" element={<MapView />}/>
        {/* id  */}
        <Route path="/flights/:price/:date/:place" element={<Flight />}/>

        {/* ActionCrud */}
        <Route path="/flight/card/" element={<ActionCrud />}/>
        {/* <Route path="/flight/card/" element={<ActionCrud />}/> */}
        {/* /:id */}
        {/* <Route path="/*" element={<Navigate to="/" />}/> */}
    </Routes>
);

export default RouterView;

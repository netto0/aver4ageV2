import {
  Routes,
  Route,
} from "react-router-dom";
import Grades from "./routes/Grades";
import Charts from "./routes/Charts";
import Settings from "./routes/Settings";
import Profile from "./routes/Profile";

export default function RoutesComponent() {
return (
    <Routes>
        <Route path="/" element={<Grades/>}/>
        <Route path="/charts" element={<Charts/>}/>
        <Route path="/settings" element={<Settings/>}/>
        <Route path="/profile" element={<Profile/>}/>
    </Routes>
)
}

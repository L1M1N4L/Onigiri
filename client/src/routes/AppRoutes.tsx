import {Routes, Route, Navigate} from 'react-router-dom'
import Homepage from "../pages/Homepage"

export default function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Homepage />} />
        </Routes>
    )
}
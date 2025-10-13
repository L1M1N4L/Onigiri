import {Routes, Route, Navigate} from 'react-router-dom'
import Homepage from "../pages/Homepage"
import SignupPage from "../pages/SignupPage"

export default function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Homepage />} />
            <Route path="/signup" element={<SignupPage />} />
        </Routes>
    )
}
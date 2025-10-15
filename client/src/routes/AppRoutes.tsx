import {Routes, Route, Navigate} from 'react-router-dom'
import Homepage from "../pages/Homepage"
import SignupPage from "../pages/SignupPage"
import Dashboard from "../pages/dashboard"
import CoursesPage from "../pages/CoursesPage"

export default function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Homepage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/courses" element={<CoursesPage />} />
        </Routes>
    )
}
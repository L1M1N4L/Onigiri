import {Routes, Route, Navigate} from 'react-router-dom'
import Homepage from "../pages/Homepage"
import SignupPage from "../pages/SignupPage"
import Dashboard from "../pages/dashboard"
import CoursesPage from "../pages/CoursesPage"
import SimulationPage from "../pages/SimulationPage"
import LogStatsPage from "../pages/LogStatsPage"
import ExamPagesPage from "../pages/ExamPagesPage"

export default function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Homepage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/simulation" element={<SimulationPage />} />
            <Route path="/log-stats" element={<LogStatsPage />} />
            <Route path="/exam-pages" element={<ExamPagesPage />} />
        </Routes>
    )
}
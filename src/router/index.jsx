import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "../pages/Home"
import LoginPage from '../pages/Login'
import RegisterPage from "../pages/Register"

export const AppRouter = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" exact element={<HomePage />} />
                <Route path="/login" exact element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
            </Routes>
        </Router>
    )
}
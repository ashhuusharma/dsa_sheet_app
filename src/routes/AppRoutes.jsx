import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import Register from '../pages/Register';
import store from '../redux/store';
import { initializeUserAsync } from '../redux/userSlice';
import { useEffect } from 'react';
import CourseDetail from '../pages/CourseDetail';

function AppRoutes() {
    // Get the login state from Redux
    const { isLoggedIn } = useSelector((state) => state.user);

    useEffect(() => {
        store.dispatch(initializeUserAsync());
    }, []);

    return (
        <Router>
            <Routes>
                {/* If logged in, show Dashboard, otherwise redirect to login */}
                <Route path="/" element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />} />
                <Route path="/course/:slug" element={isLoggedIn ? <CourseDetail /> : <Navigate to="/login" />} />

                {/* Only allow access to login if the user is not logged in */}
                <Route path="/login" element={!isLoggedIn ? <Login /> : <Navigate to="/" />} />

                {/* Only allow access to register if the user is not logged in */}
                <Route path="/register" element={!isLoggedIn ? <Register /> : <Navigate to="/" />} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;

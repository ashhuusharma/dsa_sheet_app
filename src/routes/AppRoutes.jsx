import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import Register from '../pages/Register';
import { initializeUserAsync } from '../redux/userSlice';
import CourseDetail from '../pages/CourseDetail';
import CourseDetailProblem from '../pages/CourseDetailProblem';

function AppRoutes() {
    const [loading, setLoading] = useState(true);
    const { isLoggedIn } = useSelector((state) => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        const initializeAuth = async () => {
            await dispatch(initializeUserAsync());
            setLoading(false);
        };
        initializeAuth();
    }, [dispatch]);

    if (loading) {
        return <div>Loading...</div>; // Or a spinner component
    }

    return (
        <Router>
            <Routes>
                {/* If logged in, show Dashboard, otherwise redirect to login */}
                <Route path="/" element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />} />
                <Route path="/course/:slug" element={isLoggedIn ? <CourseDetail /> : <Navigate to="/login" />} />
                <Route path="/course/:slug/:problemId" element={isLoggedIn ? <CourseDetailProblem /> : <Navigate to="/login" />} />

                {/* Only allow access to login if the user is not logged in */}
                <Route path="/login" element={!isLoggedIn ? <Login /> : <Navigate to="/" />} />

                {/* Only allow access to register if the user is not logged in */}
                <Route path="/register" element={!isLoggedIn ? <Register /> : <Navigate to="/" />} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;

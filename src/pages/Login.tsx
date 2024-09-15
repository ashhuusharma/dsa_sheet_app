import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAxiosWithoutToken } from '../axios/AxiosObj';

export default function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    // Handle input changes
    const handleChange = (e: any) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    // Handle form submission
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setErrorMessage(''); // Clear any previous error messages

        try {
            const config: any = {
                method: 'POST',
                url: '/api/auth/login', // Your login API endpoint
                data: {
                    email: formData.email,
                    password: formData.password,
                },
            };

            // Make API call
            const response: any = await getAxiosWithoutToken(config);

            // Check if login is successful
            if (response.success) {
                alert('Login successful! Redirecting to dashboard...');
                navigate('/'); // Redirect to the dashboard after successful login
            } else {
                setErrorMessage(response.message || 'Login failed. Please check your credentials.');
            }
        } catch (error) {
            setErrorMessage('An error occurred during login. Please try again.');
        }
    };

    return (
        <section className="auth d-flex">
            <div className="auth-left bg-main-50 flex-center p-24">
                <img src="https://html.themeholy.com/edmate/assets/images/thumbs/auth-img2.png" alt="" />
            </div>
            <div className="auth-right py-40 px-24 flex-center flex-column">
                <div className="auth-right__inner mx-auto w-100">
                    <h2 className="mb-8 !text-white">Sign In</h2>
                    <p className="text-15 mb-32 !text-white">
                        Please log in to your account to start your session.
                    </p>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-24">
                            <label htmlFor="email" className="form-label mb-8 h6 !text-white">Email</label>
                            <div className="position-relative">
                                <input
                                    type="email"
                                    className="form-control py-11 ps-40 !text-white"
                                    id="email"
                                    placeholder="Type your email address"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                                <span className="position-absolute top-50 translate-middle-y ms-16 text-gray-600 d-flex">
                                    <i className="ph ph-envelope"></i>
                                </span>
                            </div>
                        </div>
                        <div className="mb-24">
                            <label htmlFor="password" className="form-label mb-8 h6 !text-white">Password</label>
                            <div className="position-relative">
                                <input
                                    type="password"
                                    className="form-control py-11 ps-40 !text-white"
                                    id="password"
                                    placeholder="Enter your password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                                <span className="position-absolute top-50 translate-middle-y ms-16  !text-white d-flex">
                                    <i className="ph ph-lock"></i>
                                </span>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-main rounded-pill w-100">Sign In</button>
                        {errorMessage && <p className="text-danger mt-3">{errorMessage}</p>}
                    </form>

                    <p className="mt-32 text-center !text-white">Don't have an account?
                        <Link to="/register" className="hover-text-decoration-underline !text-white">{" "}Sign Up</Link>
                    </p>
                </div>
            </div>
        </section>
    );
}

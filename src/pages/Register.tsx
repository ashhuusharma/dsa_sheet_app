import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getUserRegister } from '../redux/userSlice';
import { useDispatch } from 'react-redux';

export default function Register() {
    const dispatch: any = useDispatch();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });
    const [errorMessage, setErrorMessage] = useState('');

    // Handle input changes
    const handleChange = (e: any) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
          // Dispatch register action and wait for it to complete
          await dispatch(getUserRegister({
            email: formData.email,
            username: formData.username,
            password: formData.password
          })).unwrap(); // Unwrap the action payload or throw an error
    
          // Navigate to the root path after successful registration
          navigate('/');
        } catch (error) {
          console.error('Registration failed:', error);
          // Handle error (e.g., show error message to user)
        }
      };

    return (
        <section className="auth d-flex">
            <div className="auth-left bg-main-50 flex-center p-24">
                <img src="https://html.themeholy.com/edmate/assets/images/thumbs/auth-img2.png" alt="" />
            </div>
            <div className="auth-right py-40 px-24 flex-center flex-column">
                <div className="auth-right__inner mx-auto w-100">
                    <h2 className="mb-8 !text-white">Sign Up</h2>
                    <p className="!text-white text-15 mb-32">
                        Please sign up to your account and start the adventure
                    </p>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-24">
                            <label htmlFor="username" className="form-label mb-8 h6  !text-white">Name</label>
                            <div className="position-relative">
                                <input
                                    type="text"
                                    className="form-control py-11 ps-40 !text-white"
                                    id="username"
                                    placeholder="Type your username"
                                    value={formData.username}
                                    onChange={handleChange}
                                    required
                                />
                                <span className="position-absolute top-50 translate-middle-y ms-16  !text-white d-flex">
                                    <i className="ph ph-user"></i>
                                </span>
                            </div>
                        </div>
                        <div className="mb-24">
                            <label htmlFor="email" className="form-label mb-8 h6  !text-white">Email</label>
                            <div className="position-relative">
                                <input
                                    type="email"
                                    className="form-control py-11 ps-40  !text-white"
                                    id="email"
                                    placeholder="Type your email address"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                                <span className="position-absolute top-50 translate-middle-y ms-16  !text-white d-flex">
                                    <i className="ph ph-envelope"></i>
                                </span>
                            </div>
                        </div>
                        <div className="mb-24">
                            <label htmlFor="password" className="form-label mb-8 h6 !text-white">Password</label>
                            <div className="position-relative">
                                <input
                                    type="password"
                                    className="form-control py-11 ps-40  !text-white"
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
                        <button type="submit" className="btn btn-main rounded-pill w-100">Sign Up</button>
                        {errorMessage && <p className="text-danger mt-3">{errorMessage}</p>}
                    </form>

                    <p className="mt-32  !text-white text-center">Already have an account?
                        <Link to="/login" className=" !text-white  hover-text-decoration-underline"> Log In</Link>
                    </p>
                </div>
            </div>
        </section>
    );
}

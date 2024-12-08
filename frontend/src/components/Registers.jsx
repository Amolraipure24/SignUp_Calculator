import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Register() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        operator: "Addition",
    });
    const [error, setError] = useState("");

    const { name, email, password, operator } = formData;

    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(
                "http://localhost:5000/api/auth/register",
                formData,
                {
                    withCredentials: true,
                }
            );

            localStorage.setItem("isAuthenticated", "true");
            navigate("/login");
        } catch (err) {
            setError(err.response?.data?.message || "Registration failed");
        }
    };

    return (
        <div className="row justify-content-center">
            <div className="col-md-6">
                <h2 className="mb-4">Register</h2>
                {error && <div className="alert alert-danger">{error}</div>}
                <form onSubmit={onSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            value={name}
                            onChange={onChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            name="email"
                            value={email}
                            onChange={onChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            value={password}
                            onChange={onChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Select Operator</label>
                        <select
                            className="form-select"
                            name="operator"
                            value={operator}
                            onChange={onChange}
                            required
                        >
                            <option value="Addition">Addition</option>
                            <option value="Subtraction">Subtraction</option>
                            <option value="Multiplication">
                                Multiplication
                            </option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Register
                    </button>
                </form>
                <p className="mt-3">
                    Already have an account? <Link to="/login">Login here</Link>
                </p>
            </div>
        </div>
    );
}

export default Register;

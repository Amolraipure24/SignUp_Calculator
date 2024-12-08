import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Calculator() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [inputs, setInputs] = useState({ num1: "", num2: "" });
  const [result, setResult] = useState(null);

  const { num1, num2 } = inputs;

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/auth/user", {
          withCredentials: true,
        });
        setUser(res.data);
      } catch (err) {
        console.log(err);
        navigate("/login");
      }
    };
    fetchUser();
  }, [navigate]);

  const onChange = (e) =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  const calculate = () => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);
    if (isNaN(number1) || isNaN(number2)) {
      alert("Please enter valid numbers");
      return;
    }
    let res;
    switch (user.operator) {
      case "Addition":
        res = number1 + number2;
        break;
      case "Subtraction":
        res = number1 - number2;
        break;
      case "Multiplication":
        res = number1 * number2;
        break;
      default:
        res = "Invalid Operator";
    }
    setResult(res);
  };

  const logout = async () => {
    try {
      await axios.post(
        "http://localhost:5000/api/auth/logout",
        {},
        { withCredentials: true }
      );
      localStorage.removeItem("isAuthenticated");
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Welcome, {user.name}</h2>
        <button className="btn btn-danger" onClick={logout}>
          Logout
        </button>
      </div>
      <h4>Operator: {user.operator}</h4>
      <div className="mt-4">
        <div className="mb-3">
          <label className="form-label">Input 1</label>
          <input
            type="number"
            className="form-control"
            name="num1"
            value={num1}
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Input 2</label>
          <input
            type="number"
            className="form-control"
            name="num2"
            value={num2}
            onChange={onChange}
          />
        </div>
        <button className="btn btn-primary" onClick={calculate}>
          Calculate
        </button>
      </div>
      {result !== null && (
        <div className="mt-4">
          <h4>Result: {result}</h4>
        </div>
      )}
    </div>
  );
}

export default Calculator;

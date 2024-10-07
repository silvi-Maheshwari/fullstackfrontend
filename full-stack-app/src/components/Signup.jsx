import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 

const Signup = () => {
    const [data, setData] = useState({
        email: "",
        password: "",
        name: "",
        mobilenumber: ""
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const navigate = useNavigate();

    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        setSuccess("");

        try {
            await axios.post('http://localhost:8080/user/register', data);
            setSuccess("Signup successful!");
            navigate('/login'); 
        } catch (err) {
            setError("Signup failed. Please try again.");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <form style={{ height: '100%' }} onSubmit={handleSubmit}>
                <div style={{ display: 'flex', flexDirection: 'column', margin: 'auto', width: '25%', marginTop: "10%", height: "100%" }} className='formtag'>
                    <h3 style={{ textAlign: 'center' }}>Registration Form</h3>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    {success && <p style={{ color: 'green' }}>{success}</p>}
                    <input
                        type='text'
                        name='name'
                        placeholder='Enter your name'
                        value={data.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type='email'
                        name='email'
                        placeholder='Enter your email'
                        value={data.email}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type='text'
                        name='mobilenumber'
                        placeholder='Enter your mobile number'
                        value={data.mobilenumber}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type='password'
                        name='password'
                        placeholder='Enter your password'
                        value={data.password}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit" style={{ backgroundColor: "blue", color: 'white', border: "none" }} disabled={loading}>
                        {loading ? "Submitting..." : "Submit"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Signup;


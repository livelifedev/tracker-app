import React, { useState } from "react";

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const { email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        console.log(formData);
    }

    return (
        <div className="page">
            <h1>Login</h1>

            <form method="post" onSubmit={e => onSubmit(e)}>
                <div>
                    <label>Email</label>
                    <input type="text" name="email" value={email} onChange={e => onChange(e)} />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={e => onChange(e)} />
                </div>
                <div>
                    <input type="submit" value="Login" />
                </div>
            </form>
        </div>
    );
};

export default Login;
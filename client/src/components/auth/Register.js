import React, { useState } from "react";
import axios from "axios";

const Register = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        rank: "Pigeon Watcher"
    });

    const { username, email, password, rank } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        const newUser = {
            username,
            email,
            password,
            rank
        }

        try {
            const config = {
                header: {
                    "Content-Type": "application/json"
                }
            }

            const body = JSON.stringify(newUser);
            
            const res = await axios.post("/register", body, config);
            console.log(res.data);
        } catch(err) {
            console.log(err.response.data);
        }
    //     await fetch("/register", {
    //         method: "POST",
    //         header: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(newUser)

    //     })
    //     .then(response => {
    //         // console.log(response.text());
    //         response.json()
    //     })
    //     .then(data => console.log(data))
    //     .catch(err => console.log(err, newUser));
    }

    return (
        <div className="page">
            <h1>Register</h1>

            <form method="post" onSubmit={e => onSubmit(e)}>
                <div>
                    <label>Username</label>
                    <input type="text" name="username" value={username} onChange={e => onChange(e)} />
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" name="email" value={email} onChange={e => onChange(e)} />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={e => onChange(e)} />
                </div>
                {/* <div>
                    <input type="hidden" name="rank" value="Pigeon Watcher" />
                </div> */}
                <div>
                    <input type="submit" value="Register" />
                </div>
            </form>
        </div>
    );
};

export default Register;